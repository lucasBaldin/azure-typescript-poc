## Prerequisites
  - Run `npm install` from project root to install dev dependencies. 

## Build
To build this Function app run `npm run build`. (Note that `npm start` and `F5` already include a build step.) If you are using binding extensions, the necessary binaries are also installed.

On build, all TypeScript code in the root directory is transpiled into JavaScript and placed in an output directory called `dist`, as configured in `tsconfig.json` by `outDir`. We don't advise changing this configuration. The default [`scriptFile`](#using-scriptfile) property of each function assumes that the transpiled JavaScript output will be located in `dist` (example: `../dist/FunctionName/index.js`).

### Run
To run your code, use `npm start`. If you are using VS Code, you can press `F5` to build and run instead.

This command builds your Function app and starts the Azure Functions host to run your code. If you only want to run your built code, you can run `func start` or `npm run start:host`.

## Learn More
If you are getting started with Azure Functions, you can follow this tutorial to [create and deploy your first JavaScript function](https://docs.microsoft.com/azure/azure-functions/functions-create-first-function-vs-code). We recommend that you use Visual Studio Code and the [Azure Functions extension](https://code.visualstudio.com/tutorials/functions-extension/getting-started).

The [Azure Functions developer guide](https://docs.microsoft.com/azure/azure-functions/functions-reference) and the [JavaScript-specific developer guide](https://docs.microsoft.com/azure/azure-functions/functions-reference-node) are good resources to gain an understanding of more Azure Functions concepts.
