# ConvosoE2E
UI and API automation assignment using Cypress

Node Verion used: v20.17.0
npm version used: 10.8.3


**Folder Structure:**

**Page Object:** 

**DNCPageObject**
  - loginPage.js 
  - dncUploadPage.js
  - ConvosoHomePage.js

**e2e**
  - verifyDNCFunctionality.cy.js
    
**Fixtures**
  - credential.json :  Not Attached with this project for security reasons.
  - phonenumbers.json : Test Phone Numbers supplied in assignment

**Project Setup and Execution Steps:**
1) Install Visual Code
2) Install npm package
3) Install node package
4) Create Git Repository.
5) Create project folder in drive and open this folder in Visual code
6) Clone repository created in step 4 by running command in Visual code terminal or Git Bash terminal  : git clone https://github.com/SAPAP/ConvosoE2E.git
7) Refresh folder in Visual code.
8) open new terminal in Visual Code and run command to create package.json file : npm -i init
9) run command to install Cypress : npm install cypress --save-dev
10) run command to install xpath module in project : npm install -D cypress-xpath
11) execute command to launch cypress : npx cypress open
12) Select E2E testing on cypress window. Select any browser of choice (from Chrome, edge or Electron) and click 'Start E2E testing ..' button.
13) Create New Spec file. This will setup cypress project folder structure in Visual code.
14) Once coding is complete , launch cypress again by executing step 11 and step 12.
15) Click on test spec file and observer execution for any failures.
16) Fix failure and rerun again.
17) After test is complete open Visual code terminal and run command : git add -A
18) run commmand : git commit -am <"commit message">
19) run command : git push
20) Access git repository and verify all files are auto merged on main branch based on repository settings.
21) for desired branching approach tweek repository settings accordingly.
    
**Note:** I got auth-token generation url (https://admin-dt.convoso.com/api/get-auth-token) by tracing network call of API--> DNC navigation page in network calls but could not figure out (username/password/client-id/Client-secret) to make API call to generate new auth-token for every auth call before Retrieve and delete API calls so I took below mentioned approach.

Used static Automation token authn_token present API DNC page in automation script to perform retrieve and delete API call (POST) for phone numbers seeded via UI automation run.
