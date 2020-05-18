/* globals gauge*/
"use strict";
const { openBrowser,write, click, below, evaluate, waitFor, closeBrowser, goto, near, into, link, button, press, screenshot, text, focus, textBox, _selectors, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() == 'true';


beforeSuite(async () => {
    await openBrowser({args:['--no-sandbox', '--disable-setuid-sandbox'], headless: false })
    //await openBrowser()
});

afterSuite(async () => {
    await closeBrowser();
});


step("Goto getgauge github page", async () => {
    await goto('https://github.com/getgauge');
});

step("Search for <query>", async (query) => {
    await focus(textBox(toRightOf('Pricing')))
    await write(query);
    await press('Enter');
});


step("goto page <arg0>", async function(arg0) {
    goto(arg0,{timeout:60000});
    await waitFor("1000"); 
});

step("click link <arg0>", async function(arg0) {
    await waitFor("1000");
    await evaluate(link(arg0), ele => ele.click());
});

step("assert text <content> exists on the page", async function(content) {
	assert.ok(await text(content).exists());
});
step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});

step("click <arg0>", async function(arg0) {
    //await waitFor("3000");
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
    //await waitFor("3000");
    await link(arg0).exists();
    await click(link(arg0, below(arg1)), {'waitForEvents' : ['firstMeaningfulPaint']});
    //await click(link(arg0, below(link(arg1))));
});

step("click <arg0> with class as <arg1>", async function(arg0, arg1) {
	await click(link('class',arg1));
});

step("click <arg0> near link <arg1>", async function(arg0, arg1) {
    await link(arg1).exists();
    //await click(link(arg0, near(link(arg1))), {'waitForEvents' : ['firstMeaningfulPaint']});
    await click(link(arg0, near(link(arg1))));
});

step("click button <arg0>", async function(arg0) {
    await button(arg0).exists();
    await click(button(arg0));
});