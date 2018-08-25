const browserstackKey = process.env.BROWSERSTACK_PASSWORD;
const browserstackUser = process.env.BROWSERSTACK_USER;

module.exports = {
  services: ['browserstack'],
  user: browserstackUser,
  key: browserstackKey,
  desiredCapabilities: {
    os: 'OS X',
    os_version: 'Sierra',
    browser: 'Chrome',
    resolution: '1280x1024',
    project: 'visual-regression-spike'
  }
};
