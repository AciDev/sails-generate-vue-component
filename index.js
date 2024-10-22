/**
 * Module dependencies
 */

var util = require('util');
var path = require('path');
var _ = require('@sailshq/lodash');


/**
 * @acidev/sails-generate-vue-component
 *
 * Usage:
 * `sails generate vue-component`
 *
 * @description Generates a vue-component.
 * @docs https://sailsjs.com/docs/concepts/extending-sails/generators/custom-generators
 */

module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Dictionary} scope
   * @param  {Function} done
   */

  before: function (scope, done) {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // // scope.args are the raw command line arguments.
    // //
    // // e.g. if someone runs:
    // // $ sails generate vue-component user find create update
    // // then `scope.args` would be `['user', 'find', 'create', 'update']`
    // if (_.isUndefined(scope.args[0])) {
    //   return done(new Error('Please provide a name for this vue-component.'));
    // }
    // if (!_.isString(scope.args[0])) {
    //   return done(new Error('Expected a string for `scope.args[0]`, but instead got: '+util.inspect(scope.args[0],{depth: null})));
    // }
    //
    // // Provide defaults for the scope.
    // _.defaults(scope, {
    //   createdAt: new Date()
    // });
    //
    // // Decide the output filename for use in targets below:
    // scope.filename = scope.args[0];
    //
    // // Add other stuff to the scope for use in our templates:
    // scope.whatIsThis = 'an example file created at '+scope.createdAt;
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // When finished, trigger the `done` callback to begin generating
    // files/folders as specified by the `targets` below.
    //
    // > Or call `done()` with an Error for first argument to signify a fatal error
    // > and halt generation of all targets.
    const componentName = scope.args[0];


    if(typeof componentName === 'undefined') {
      return done('Please provide a name for this controller.1');
    }

    if(typeof componentName !== 'string') {
      return done(`${typeof componentName} Please provide a name for this controller.2`);
    }

    const foldersFile = componentName.split('/');

    scope.componentName = foldersFile[foldersFile.length-1].toLowerCase();

    scope.fileName = `${componentName.toLowerCase()}.component.js`;

    return done();
  },



  /**
   * The files/folders to generate.
   * @type {Dictionary}
   */
  targets: {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // • e.g. create a folder:
    // ```
    // './hey_look_a_folder': { folder: {} }
    // ```
    //
    // • e.g. create a dynamically-named file relative to `scope.rootPath`
    // (defined by the `filename` scope variable).
    //
    // The `template` helper reads the specified template, making the
    // entire scope available to it (uses underscore/JST/ejs syntax).
    // Then the file is copied into the specified destination (on the left).
    // ```
    // './:filename': { template: 'example.template.js' },
    // ```
    //
    // • See https://sailsjs.com/docs/concepts/extending-sails/generators for more documentation.
    // (Or visit https://sailsjs.com/support and talk to a maintainer of a core or community generator.)
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //'./assets/js/components': { folder: {} },

    './assets/js/components/:fileName': {
      template: 'component.template.js',
    },
  },


  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` and `copy` builtins)
   *
   * @type {String}
   */
  templatesDirectory: path.resolve(__dirname, './templates'),

};
