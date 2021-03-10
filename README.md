# CustomWebpackInjectModule

Reproduction repository to inject modules with a Webpack loader

The issue seems to be that even though I update the source to include the HelloModule inside the imports array of the AppModule's NgModule decorator, it doesn't seem to be included in the build output.

To verify this, run `npm install` to install the Node dependencies and run `ng serve` to start the dev server or `ng build --prod` to run a production build

## Expected

* When the app loads, there should be a log in the browser console saying 'hello from the appHello directive'.
* After running a production build, inside `dist/custom-webpack-inject-module/main.js`, there is one instance of './hello/hello.module' as a comment.

## Actual

* When the app loads, there isn't a log in the browser console saying 'hello from the appHello directive'.
* After running a production build, inside `dist/custom-webpack-inject-module/main.js`, there isn't an instance of './hello/hello.module' as a comment (meaning the HelloModule isn't being imported).
