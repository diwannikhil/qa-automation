/* globals gauge*/
"use strict";
const { openBrowser,write, click, evaluate, waitFor, closeBrowser, goto, into, link, press, screenshot, text, focus, textBox, _selectors, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';


beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};

step("Goto getgauge github page", async () => {
    await goto('https://github.com/getgauge');
});

step("Search for <query>", async (query) => {
    await focus(textBox(toRightOf('Pricing')))
    await write(query);
    await press('Enter');
});


step("goto page <arg0>", async function(arg0) {
    goto(arg0);
    await waitFor("3000"); 
});

step("click link <arg0>", async function(arg0) {
    await waitFor("3000");
    await evaluate(link(arg0), ele => ele.click());
});

step("assert text <content> exists on the page", async function(content) {
	assert.ok(await text(content).exists());
});
step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});

step("click <arg0>", async function(arg0) {
    await waitFor("3000");
    await click(arg0);
});

step("click link to right of <arg0>", async function(arg0) {
    await click(link(toRightOf(_selectors.getElement(arg0))));
});

step("Enter <arg0> as <arg1>", async function(arg0, arg1) {
    //await write(arg0, into(await inputField({"placeHolder":arg1})));
    await focus(textBox(arg1))
    //await waitFor("5000");
    await write(arg0);
});

step("click <arg0> below <arg1>", async function(arg0, arg1) {
    await waitFor("3000");
    await click(link(args0, below(args1)), {'waitForEvents' : ['firstMeaningfulPaint']});
});