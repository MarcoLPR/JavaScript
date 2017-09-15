// Karma configuration
// Generated on Thu May 25 2017 17:42:18 GMT-0500 (Hora de verano central (México))

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'wwwroot',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'angular'],


    // list of files / patterns to load in the browser
    files: [
      'https://cdn.jsdelivr.net/npm/angular@1.6.4/angular.js',
      "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-mocks.js",
      'https://cdn.jsdelivr.net/npm/angular-route@1.6.4/angular-route.js',
      'https://cdn.jsdelivr.net/npm/angular-animate@1.6.4/angular-animate.js',
      'https://momentjs.com/downloads/moment.js',
      'https://cdn.jsdelivr.net/npm/tubular@1.7.11',
      'https://cdn.jsdelivr.net/g/angular.bootstrap@2.5.0(ui-bootstrap.min.js+ui-bootstrap-tpls.min.js),momentjs@2.17.1',
      'js/app.js',
      'controllers/*.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 3000,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
