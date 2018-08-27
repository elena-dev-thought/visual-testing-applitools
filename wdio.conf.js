const browserstackKey = process.env.BROWSERSTACK_PASSWORD;
const browserstackUser = process.env.BROWSERSTACK_USER;

module.exports = {
  services: ['browserstack'],
  user: browserstackUser,
  key: browserstackKey,
  desiredCapabilities: {
    // os: 'OS X',
    // os_version: 'Sierra',
    browser: 'Safari',
    resolution: '375x812',
    device: 'iPhone X',
    realMobile: 'true',
    os_version: '11.0',
    safariAllowPopups: true,

    project: 'visual-regression-spike'
  }
};
