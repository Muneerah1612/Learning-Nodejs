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
