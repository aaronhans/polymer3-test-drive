# polymer3 Test Drive

Slightly modified latest version of Polymer responsive navigation example to make it more in line with the standard web component style

To run locally

```
npm install
polymer serve --open
```

Creating a web component based on Polymer 3 is very similar to a plain web component, see <a href="https://github.com/aaronhans/polymer3-test-drive/blob/master/src/hello-world.js">Hello World component code</a>.
The differences are the extension of PolymerElement and a polymer specific template syntax used by default. The template syntax can be replaced with template literals using <a href="https://github.com/PolymerLabs/lit-html/tree/next">lit-html</a>.

The cost is 54K(after gzip) of library weight without any polyfills. The benefit is access to the polymer component library and advanced capabilities like polymer's <a href="https://www.polymer-project.org/1.0/docs/devguide/data-system">data system</a>.


Sample Hello World <a href="https://aaronhans.github.io/polymer3-test-drive/hello-bundle.html">demo</a>

The responsive header polymer demo based on several off the shelf polymer components <a href="https://aaronhans.github.io/polymer3-test-drive/index-bundle.html">demo</a>. There is no custom code here, the polymer tutorial code is just modified to be a standard web component
