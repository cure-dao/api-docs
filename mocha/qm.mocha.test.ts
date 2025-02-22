import {expect} from "chai";
import {assert} from "chai";
import * as qmGit from "../ts/qm.git";
import * as qmShell from "../ts/qm.shell"
import * as fileHelper from "../ts/qm.file-helper";
import * as qmTests from "../ts/cypress-functions";
import * as urlParser from "url";
import * as https from "https";
import * as _str from "underscore.string";
import * as simpleGit from 'simple-git/promise';
import * as th from '../ts/test-helpers';
import {Configuration, ConnectorsApiFactory} from "../typescript-fetch-client";
const git = simpleGit();
beforeEach(function (done) {
    let t = this.currentTest
    this.timeout(10000) // Default 2000 is too fast for GitHub API
    // @ts-ignore
    qmGit.setGitHubStatus("pending", t.title, "Running...", null, function (res) {
        const logResult = false
        if(logResult){console.debug(res)}
        done();
    });
});
afterEach(function (done) {
    let t = this.currentTest
    // @ts-ignore
    let state = t.state
    if (!state) {
        console.debug("No test state in afterEach!")
        done();
        return;
    }
    let githubState = "success";
    if (state === "failed") {githubState = "failure" }
    // @ts-ignore
    qmGit.setGitHubStatus(githubState, t.title, t.title, null, function (res) {
        const logResult = false
        if(logResult){console.debug(res)}
        done();
    });
});
describe("git", () => {
    it.skip("sets commit status", function (done) { // skipping because it pollutes the status checks
        qmGit.setGitHubStatus("pending", "test context", "test description", "https://get-bent.com", function (res) {
            expect(res.status).to.eq(201);
            done();
        });
    });
    it.skip("creates commit comment", function (done) { // skipping because it pollutes the status checks
        qmGit.createCommitComment("test createCommitComment context", "test createCommitComment description", function (res) {
            expect(res.status).to.eq(201);
            done();
        });
    });
    it.skip("creates a feature branch and deletes it", function (done) {
        let featureName = "test-feature"
        let branchName = "feature/"+featureName;
        qmGit.createFeatureBranch("test-feature");
        git.branchLocal().then(function (branchSummary) {
            expect(branchSummary.all).to.contain(branchName);
            qmShell.executeSynchronously("git checkout -B develop", true)
            git.deleteLocalBranch(branchName).then(function () {
                git.branchLocal().then(function (branchSummary) {
                    expect(branchSummary.all).not.to.contain(branchName);
                    done();
                })
            });
        })
    });
});
function downloadFileContains(url: string, expectedToContain: string, cb) {
    downloadFile(url, function (str) {
        expect(str).to.contain(expectedToContain)
        cb()
    })
}
function downloadFile(url: string, cb){
    const parsedUrl = urlParser.parse(url)
    const options = {
        hostname: parsedUrl.hostname,
        method: "GET",
        path: parsedUrl.path,
        port: 443,
    }
    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`)
        expect(res.statusCode).to.eq(200)
        let str = ""
        res.on("data", (chunk) => {
            str += chunk
        })
        res.on("end", function () {
            console.log("RESPONSE: " + _str.truncate(str, 30))
            cb(str);
        })
    })
    req.on("error", (error) => {
        console.error(error)
    })
    req.end()
}

describe("uploader", function () {
    it("uploads a file", function (done) {
        this.timeout(20000) // Default 2000 is too fast
        fileHelper.uploadToS3("ionIcons.js", "tests", function (uploadResponse) {
            downloadFileContains(uploadResponse.Location, "iosArrowUp", done)
        })
    })
    it.skip("uploads test results", function (done) {
        this.timeout(20000) // Default 2000 is too fast
        qmTests.uploadTestResults(function (uploadResponse) {
            downloadFileContains(uploadResponse.Location, "mocha", done)
        })
    })
})

describe("gi-tester", function () {
    it("runs tests on staging API", function (done) {
        let previouslySetApiUrl = process.env.API_URL || null;
        delete process.env.API_URL
        assert.isUndefined(process.env.API_URL)
        process.env.RELEASE_STAGE = "staging"
        const url = th.getApiUrl()
        expect(url).to.contain("https://staging-app.curedao.org")
        if(previouslySetApiUrl){
            process.env.API_URL = previouslySetApiUrl
        }
        done()
    })
})

describe("typescript-fetch-tester", function () {
    it("connectors", function (done) {
        let config = new Configuration({accessToken: "demo"})
        let f = ConnectorsApiFactory(config);
        f.getConnectors()
            .then(function (response){
                let c = Object.values(response.connectors).find(function (c){
                    return c.name === "fitbit";
                })
                f.disconnectConnector("fitbit").then(function (response){
                    expect(Object.values(response.connectors))
                });
            })
        done()
    })
})
