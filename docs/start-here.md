The CureDAO API has two main components:

-   **Connect** - UI to facilitate data source connections
-   **Data API** - Endpoints to pull user data from

To quickly grasp how an integration with CureDAO API works, it is helpful to view the following diagram:

![](https://files.readme.io/QI3KkBPJQBGZyUJrhayA_Screen%20Shot%202015-11-19%20at%201.39.13%20PM.png "Screen Shot 2015-11-19 at 1.39.13 PM.png")

In the diagram, you'll see your application and server in orange, CureDAO API components and actions in blue, and all external data sources the user is trying to connect to in gray.

The flow here is simple:

**A**: A user of your application launches CureDAO Connect to connect a data source  
**B**: In CureDAO Connect, they search for/select available data source(s) to connect to your application  
**C**: When they are finished, Connect notifies our system of the connected accounts  
**D**: Our system begins syncing their data from the source  
**E**: Your server retrieves user credentials and data from CureDAO API

Once a user has an active connection, we will continue to sync new data for that user and make it available to you. Most importantly, no matter what or how many sources the user connects, you'll end up with a single set of CureDAO API credentials and one, normalized API to query all of that user's data.

There are two main components of integrating CureDAO API:

**Authentication**

-   Adding CureDAO Connect to your application (Client Side)
-   Retrieving a user's API Credentials (Server Side)

**Data Retrieval**

-   Retrieving the user's data from the Data API


[Sign up](https://builder.quantimo.do) for a developer account.

After signing up, the first thing you'll want to do is create a CureDAO API application. An application in CureDAO API is a container that holds users and their data, and allows for custom configuration options. Above all, it is the single pipeline that you will integrate directly with your application.

Each application has a specific set of keys found on the application's settings:

| Key               | Description                                                                                           |
|-------------------|-------------------------------------------------------------------------------------------------------|
| **Client ID**     | Unique ID of the application container                                                                |
| **Client Secret** | Secret value for the application container                                                            |
| **App Key**       | Authentication token for the [Application API](https://reference.curedao.org/v1/docs/application-api) |

> ### 🚧
> 
> Secure Values
> 
> Your **Client Secret** and **App Key** should be kept securely on your server. For support requests, please send along your **Client ID** only.

Next up, [integrating CureDAO Connect](https://reference.curedao.org/v1/docs/overview-of-curedao-connect)!
