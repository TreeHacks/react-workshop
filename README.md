# React workshop


Objective: Install a simple, locally-hosted React app for every attendee and install a new node module


## Creating a new React app

### Prerequisites:

* Node.js 
* npx
* IDE of choice

### Installing prereqs

* Node.js: https://nodejs.org/en/
* npx: `npm i -g npx
    `

### Creating React app

1. cd into desired directory
2. Run create react app command
    1. `npx create-react-app my-app`
3. Open my-app in your IDE
4. In IDE or native terminal, run command:
    1. `npm start`
5. Go to localhost:3000
    1. Verify you see this screen
        1. [Image: image.png]
6. Open `src/App.js`

1. Delete everything in `<div className="App"> </div>`
2. Replace with `<h1> Hello World </h1>`
    1. Verify changes are updating the React app
        1. [Image: image.png]
3. Add a sample button with separate onClick function
    1. `<button onClick={handleClick}> click me! </button>`
    2. UI:
        1. [Image: image.png]
    3. Console (F12)
        1. [Image: image.png]
        2. The console is also a really helpful, easy-to-use debugging tool
4. Sample NPM install
    1. [Material UI](https://material-ui.com/getting-started/installation/)
    2. Run command:
        1. `npm install @material-ui/core`
5. Make sure React is installed
    1. `npm i react`
6. Import React to project
    1. `ìmport React from 'react';`
7. Create Material UI button
    1. Import Button
        1. `import { Button } from '@material-ui/core';`
    2. <Button onClick={handleMaterialClick} variant=“outlined”> New button </Button>
8. Add basic layouts for React directories
    1. Create a directory called `components` in `src`
    2. `App.js` is the highest parent component. You use this to call other components. Typically, you would use React Router or similar to handle different paths. Much of that logic will remain in `App.js`
    3. If you’re interested in this, I can go over a quick overview after this session
9. Create a new directory called `Home`
    1. Create a new file in `Home` called `Home.js`
    2. Create a new file in `Home` called `Home.css`
10. In `Home.js`, paste this boilerplate code block
    1. import React from 'react';
        import './Home.css';
        
        class Home extends React.Component {
          constructor(props) {
            super(props);
            this.state = {}
          }
        
          render() {
            return (
              <div>
              </div>
            );
          }
        }
        
        export default Home;

    1. Explanation:
        1. Importing React again → always have to do this with every new `.js` file
        2. Importing CSS file that we just created
        3. Creating a new React class component
        4. `this.state = {}` will contain all of your states in this component
        5. All HTML will be housed in `return ()`
1. Insert phrase in `div` tags in `Home.js`
2. Import `Home.js` into `App.js`
    1. `import Home from './components/Home/Home';`
3. Render `Home.js` in `App.js`
    1. `<Home/>`
4. In summary, we’ve covered:
    1. Creating a new React app and all the boilerplate that comes with the project
    2. Running the React app on localhost
    3. Making updates to the HTML in our main `App.js` file
    4. Creating a simple button with a function to control its logic
    5. Debugging using the console
    6.  Importing and using new node modules into our project (Material UI)
    7. Creating a new React class component 
    8. Importing this new class component into our `App.js` file



### Follow ups

* Learn how to use functional components with hooks which can do most of what you’ll need without having to write class components
* Bootstrap themes to get slick UI components out of the box
* React Router to handle new URL routes
* Create a server directory to handle public and private API calls 
    * Tutorial [here](https://www.twilio.com/blog/react-app-with-node-js-server-proxy)
* Find and install other node modules [here](https://www.npmjs.com/)
* Really should be using `.jsx` files, but I didn’t want to cover that here




## Potential bugs

* [Error: EACCES: permission denied, access '/usr/local/lib/node_modules'](https://stackoverflow.com/questions/48910876/error-eacces-permission-denied-access-usr-local-lib-node-modules)
    * sudo chown -R $USER /usr/local/lib/node_modules

* Can’t find index.js file in material UI
    * Make sure you’ve installed and imported React 
