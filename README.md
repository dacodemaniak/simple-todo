# simple-todo
Build web apps from HTML / CSS / TypeScript

# Requirements
- VSCode as IDE (https://code.visualstudio.com/download)
- GIT as VCS (https://git-scm.com/downloads)
- NodeJS as Javascript Engine LTS Version (https://nodejs.org/en/download/)

# Prepare environment
$ mkdir ~/javascript-workspace/simple-todo

$ cd ~/javascript-workspace/simple-todo

$ npm init

$ touch .gitignore

$ echo "node_modules" >> .gitignore

$ git init

# Install dev dependencies
$ npm i typescript@latest --save-dev

$ npm i babel@latest babel-cli@latest babel-core@latest --save-dev

$ npm i @babel/core@latest @babel/preset-env@latest --save-dev

$ npm i webpack@latest webpack-cli@latest --save-dev

$ npm i ts-loader@latest --save-dev

$ npm i @types/jquery --save-dev

# Install dependencies
$ npm i jquery@latest --save

$ npm i bootstrap@latest --save

$ npm i moment@latest

# Configure builder
$ nano package.json

Put the following in the "scripts" attribute :

       "scripts": {
        "babel": "babel --presets es2015 src/app.ts -o build/bundle.js",
        "webpack:dev": "webpack --watch --mode=development",
        "webpack:prod": "webpack --watch --mode=production"
    },

# Configure TypeScript
$ nano tsconfig.json

Put the following :

    {
      "compilerOptions": {
           "baseUrl": ".",
           "paths": { "*": ["types/*"] },
           "outDir": "./dist/",
           "noImplicitAny": true,
           "module": "es6",
           "target": "es2015",
           "allowJs": true,
           "lib": ["dom", "dom.iterable", "es6", "es2015.promise"]
      }
    }

# Configure webpack options

$ nano webpack.config.js

Put the following :

    var path = require('path');
    var webpack = require('webpack');

    module.exports = {
        entry: './src/app.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "[name].bundle.js",
            chunkFilename: "[name].chunk.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [
                '.ts',
                '.js',
                '.tsx'
            ]
        },
        devtool: 'source-map'
    };





