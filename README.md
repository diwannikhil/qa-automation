# QA-Automation using Taiko
This is sample project that is created to try on writing automation tests, using Gauge, Taiko with JavaScript

## Install Taiko
npm install -g taiko

## Getting Started with Taiko
Taiko is a free and open source browser automation tool built by the team behind Gauge by ThoughtWorks. It is a node library with a clear and concise API to automate the chrome browser. Taiko uses the Chrome DevTools API and is built ground up to test modern web applications.

### Interactive Recorder
Taiko comes with a Recorder that’s a REPL to write test scripts. You can use Taiko’s API to control the browser from REPL.
    - To launch the REPL type **taiko** in your favorite terminal application. 

Above command will launch your taiko prompt. You can now start writing Taiko's API commands on prompt
   - Example Below:
        goto("google.com")
        write("taiko test automation")
        click("Google Search")

### Generating javascript code for Taiko steps
You can see and save javascript code generated for above Taiko script.
    - To see generated js code, type **.code** on Taiko command prompt
    - To save generated js code in a file, type **.code file_name.js**

### Running javascript code for your Taiko test
To run a Taiko script pass the file as an argument to taiko, below
    - taiko file_name.js

### Help on Taiko API and its usage, with example
Taiko’s REPL also documents all the API’s. To view the documentation of any api use below command
    -  .api api_name, example to see usage of openBrower api, type **.api openBrowser**
    - It will show you complete details about api, along with example for usage, as below
        Launches a browser with a tab. The browser will be closed when the parent node.js process is closed.
        openBrowser()
        openBrowser({ headless: false })
        openBrowser({args:['--window-size=1440,900']})

### Read more about Taiko's API
or detailed information on Taiko API's and usage, browse to
    - https://docs.taiko.dev/#whats-taiko 
        


 

