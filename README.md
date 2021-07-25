# @funhouse-atelier/sails-generate-vue-component

A `vue-component` generator for use with the Sails command-line interface.

This is a modified version of the `@acidev/sails-generate-vue-component` package. The original package can be found [here on GitHub](https://github.com/AciDev/sails-generate-vue-component) and [here on NPM](https://www.npmjs.com/package/@acidev/sails-generate-vue-component).

The following functional changes were made:
* lodash dependency removed
* component name and folder path are no longer forced to lower case
* a corresponding LESS file is generated along with the JS file
* changed "props" in template from array-type definition to object-type
* added "watch" to template

## Installation

```sh
$ npm install @funhouse-atelier/sails-generate-vue-component --save
```

Then merge the following into your `.sailsrc` file:

```json
{
  "modules": {
    "vue-component": "@funhouse-atelier/sails-generate-vue-component"
  }
}
```

> Note that instead of `"@funhouse-atelier/sails-generate-vue-component"`, you can also choose to provide the path to the generator locally (e.g. "./generators/vue-component").
> This is useful if, for example, you have specific best practices for particular projects or teams within your organization, and you want to be able to check in generators to your code repository.
>
> Certain generators are installed by default in Sails, but they can be overridden.  Other generators add support for generating entirely new kinds of things.
> Check out [Concepts > Extending Sails > Generators](https://sailsjs.com/docs/concepts/extending-sails/generators) for information on installing generator overrides / custom generators and information on building your own generators.

## Usage

```bash
$ sails generate vue-component <new-component-name>
```

## Need help?

See [Extending Sails > Generators > Custom Generators](https://sailsjs.com/docs/concepts/extending-sails/generators/custom-generators) in the [Sails documentation](https://sailsjs.com/documentation), or check out [recommended support options](https://sailsjs.com/support).

[Sails.js](https://sailsjs.com)

## Contributing

Please observe the guidelines and conventions laid out in the [Sails project contribution guide](https://sailsjs.com/documentation/contributing) when opening issues or submitting pull requests.

## License

This vue-component generator is available under the **MIT license**.

The [Sails framework](https://sailsjs.com) is free and open-source under the [MIT License](https://sailsjs.com/license).

![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
