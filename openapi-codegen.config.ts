import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  curedao: {
    from: {
      relativePath: "./specifications/cure-dao-open-api-v3.yml",
      source: "file",
    },
    outputDir: "react-query-components",
    to: async (context) => {
      const filenamePrefix = "curedao";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
