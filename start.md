## Getting Started
Node is a runtime environment for executing javascript code, they are asynchronous by default which makes it ideal for building highly scalable,data-intensive and run time applications.

### Modules
Every file in node app is considered module,they have one file which is the main file.
There are few built-in modules to take note of, they include;
- file system (to work with files)
- http(to create webserver, listen to http request)
- OS (to work with operating systems)
- path
- QueryStrings (useful in building http services)
*NOTE: always prefer to use asynchronous methods*

To export a variable,function or class from a module,we have to add them to
module.exports:
we use the *require()* to load a module or import a module

### NPM
NPM is a command line tool as well as a registry of third party libraries that we can add to our node application.
You can also create your Node module and publish to NPM.
- Before adding any Node package to your application, you have to create a *Package.json* file, and to create it, run *npm init*
- To reinstall dependencies, run *npm install or npm i*
- To see the list of all installed dependencies and their dependencies, run *npm list*
- If you only want to see list of installed dependencies,without their dependencies, run *npm list --depth=0*

### DevDependencies
DevDependencies are development dependencies that are only used during development. E.g tools for unit tests, to bundle JS,etc.
- To specify that a package is a devdependency, use the flag --save-dev when installing

*To uninstall a package, run npm uninstall packagename or npm un packagename*

