# Website

### Local Development

Generate API Docs:

```sh
docusaurus gen-api-docs all && docusaurus gen-api-docs:version apiDienste:all && docusaurus gen-api-docs:version apiQuellsysteme:all
```

```
$ npm start
```

## Create new verion

To create an new documentation for an additional version you need to execute the following command:

```sh
docusaurus docs:version [new version]
```

This will create a new versioned_docs directory which

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

### OpenAPI-Demo

Unter Tutorial / OpenAPI
