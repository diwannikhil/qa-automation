/* globals gauge*/
"use strict";
const { openBrowser,click, link, waitFor, write, closeBrowser, goto, press, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("goto(<arg0>)", async function(arg0) {
	goto("https://qa-pub-vca.akqa.technology/us/en/home.html")

});

step("click(link('Creations'))", async function() {
    await click(link('Creations'));
    await waitFor("3000"); 
});

step("click(link('Watches'))", async function() {
    await click(link('Watches'));
    await waitFor("3000");
});

step("Assert text <content> exists on the page", async function(content) {
	assert.ok(await text(content).exists());
});