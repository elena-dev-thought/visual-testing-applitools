const browserOptions = require('./wdio.conf');
const applitoolsKey = process.env.APPLITOOLS_KEY;

async function main() {
  const webdriverio = require('webdriverio');

  // Open a Chrome browser.
  const driver = webdriverio.remote(browserOptions);
  let browser = driver.init();

  // Initialize the eyes SDK and set your private API key.
  const { Eyes, Target } = require('@applitools/eyes.webdriverio');
  let eyes = new Eyes();
  eyes.setApiKey(applitoolsKey);
  eyes.setForceFullPageScreenshot(true);

  try {
    // Start the test and set the browser's viewport size to 800x600.
    await eyes.open(browser, 'Hello World!', 'My first Javascript test Modified!', { width: 800, height: 600 });

    // Navigate the browser to the "hello world!" web-site.
    await browser.url('https://applitools.com/');

    // Visual checkpoint #1.
    await eyes.check('Main Page', Target.window());

    // Click the "Click me!" button.
    await browser.click('button');

    // // Visual checkpoint #2.
    // await eyes.check('Click!', Target.window());

    // End the test.
    await eyes.close();
  } finally {
    // Close the browser.
    await browser.end();

    // If the test was aborted before eyes.close was called ends the test as aborted.
    await eyes.abortIfNotClosed();
  }
}

main();
