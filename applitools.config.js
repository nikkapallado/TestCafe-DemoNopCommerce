module.exports = {
    apiKey: 'E2mO4eRNE106sa109mcqz17NAZ3105rbBk7KIZMagoXgme0TE110' || process.env.APPLITOOLS_API_KEY,
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        // {width: 700, height: 500, name: 'firefox'},
        // {width: 1600, height: 1200, name: 'ie11'},
        // {width: 1024, height: 768, name: 'edgechromium'},
        // {width: 800, height: 600, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        // {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        // {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    batchName: 'Ultrafast Demo No Commerce',
    // specify Eyes concurrency level
    testConcurrency: 1,
}