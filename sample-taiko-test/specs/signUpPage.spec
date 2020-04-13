# User Sign up page on IWC QA
This is to sign up a new user on IWC QA page.

## New User sign up
* goto page "https://qa-pub-iwc.akqa.technology/us/en/home.html"
* click link "Log In"
* click link "Register"
* Enter "new@qa.akqa.com" as "Email"
* Enter "Test12345" as "Password"
* Enter "Test12345" as "Confirm password"
* Enter "Test" as "First Name"
* Enter "User" as "Last Name"
* click button "Register"
* assert text "PLEASE CONFIRM YOUR EMAIL" exists on the page
* assert text "Thank you for registering." exists on the page