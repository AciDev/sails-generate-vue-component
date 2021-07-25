/**
 * @module @funhouse-atelier/sails-generate-vue-component
 * @desc Generates a vue-component.
 * @usage
 * `sails generate vue-component <new-component-name>`
 *   OR
 * `sails generate vue-component <path>/<new-component-name>`
 * @docs https://sailsjs.com/docs/concepts/extending-sails/generators/custom-generators
 */

/**
 * Module dependencies
 */
var path = require('path');

/**
 * Module exports
 */
module.exports = {

  /**
   * Absolute path to the templates for this generator
   * @type {String}
   */
  templatesDirectory: path.resolve(__dirname, './templates'),
  
  /**
   * Function to run before processing the `targets` defined below
   * @param  {Dictionary} scope
   * @param  {Function}   done
   */
  before: function (scope, done) {

    // Define the first argument provided via CLI
    const firstArg = scope.args[0];
    
    // Define an example of the CLI syntax, to be displayed if the generation fails
    const example = 
      `To create a new Vue component, use the following syntax:
      
      sails generate vue-component <new-component-name>
        OR
      sails generate vue-component <path>/<new-component-name>`
    ;
    
    // If there is no first argument, finish with an error message
    if(typeof firstArg === 'undefined') {
      return done(new Error(
        `You did not provide a name for the component. ${example}`
      ));
    }
    
    // If the first argument is not a string, finish with an error message
    if(typeof firstArg !== 'string') {
      return done(new Error(
        `The name you provided for the component is not a string. ${example}`
      ));
    }
    
    // Attach all data needed to generate the files to the global "scope" variable
    const firstArgPieces  = firstArg.split('/');
    scope.componentName   = firstArgPieces[firstArgPieces.length - 1];
    scope.jsFilePath      = `${firstArg}.component.js`;
    scope.lessFilePath    = `${firstArg}.component.less`;
    
    // Finished with no errors
    return done();
  },

  /**
   * The files/folders to generate
   * @type {Dictionary}
   */
  targets: {

    // Generate the JS file for the component
    './assets/js/components/:jsFilePath': {
      template: 'component.js',
    },

    // Generate the LESS file for the component
    './assets/styles/components/:lessFilePath': {
      template: 'component.less',
    },
  },

  /**
   * Function to run after processing the `targets` defined above
   * @param  {Dictionary} scope
   * @param  {Function}   done
   */
  after: function (scope, done) {

    // Log success message to console
    console.log(
      `
      A new Vue component named <${scope.componentName}> was created. If you want to 
      create styles specific to this component, you will need to manually import the new 
      LESS stylesheet from your "assets/styles/importer.less" file; e.g.:

      @import 'components/${scope.lessFilePath}'
      `
    );

    // Finished
    return done();
  },
};
