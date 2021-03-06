<a name="0.6.3"></a>
## [0.6.3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.6.2...v0.6.3) (2016-03-31)


### Bug Fixes

* **multiselect:** allow workaround for #442 ([eaf10bb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/eaf10bb))

### Features

* **sample help:** new tutorials ([e1d7a3c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e1d7a3c))



<a name="0.6.2"></a>
## [0.6.2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.6.1...v0.6.2) (2016-03-23)


### Bug Fixes

* **config-builder:** use relative paths ([5c0edd6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5c0edd6))
* **dependencies:** updated aurelia dependencies ([ab2e99d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ab2e99d))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.6.0...v0.6.1) (2016-03-21)


### Bug Fixes

* **webpack:** added main to package.json ([fac4acf](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fac4acf))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.5.1...v0.6.0) (2016-03-11)

### Important
We had to change the prefix of custom elements and custom attributes as there were conflicts with some properties. For example, the `k-tooltip` property on the Chart was conflicting with the `k-tooltip` custom attribute for the Kendo Tooltip control. This is probably the largest breaking change we've had so far, but we'd rather have a breaking change than people having weird issues.

This is what you have to change:

`<k-grid k-sortable.bind="true">`  
becomes  
`<ak-grid k-sortable.bind="true">`


`<button k-button="k-enable.bind: false">foo</button>`  
becomes  
`<button ak-button="k-enable.bind: false">foo</button>`

So all **custom elements** and **custom attributes** now have the `ak-` prefix, and all **properties** and **events** keep the `k-` prefix  

Please check the [catalog](http://aurelia-ui-toolkits.github.io/demo-kendo/) for more examples


### Bug Fixes

* **all:** delay initialization ([8f7c17b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8f7c17b))
* **combobox:** import combox kendo file ([2522549](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2522549))

### Features

* **index:** allow not to globalize anything ([d4d4d03](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d4d4d03))
* **template-compiler:** compile with $$item and wrap strings/integers in object ([ba6247e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ba6247e))


### BREAKING CHANGES

* **prefix for custom elements / custom attributes changed (`k-` is now `ak-`)
* index: if you want to use `core()` you now need to explicitly call this function on the plugin callback



<a name="0.5.1"></a>
## [0.5.1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.5.0...v0.5.1) (2016-03-08)


### Bug Fixes

* **all:** delay initialization for some controls ([50bde02](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/50bde02))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.4.2...v0.5.0) (2016-03-04)


### Bug Fixes

* **numeric-textbox:** initialize from attached and not bind ([dbf273a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/dbf273a))
* **template-compiler:** resolved issue where parentcontext is null ([e25de25](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e25de25))
* **widget-base:** allow for undefined context ([dfa5110](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/dfa5110))
* **widget-base:** allow for undefined parent contexts ([07063a5](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/07063a5))
* **widget-base:** destroy only if widget has element property ([929fb92](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/929fb92))

### Features

* **all:** add QR Code ([f2a57ba](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f2a57ba))
* **buttongroup:** added buttongroup wrapper ([a296e6f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a296e6f))
* **colorpalette:** enable two-way value binding ([3e85292](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3e85292))
* **colorpicker:** enable two-way value binding ([858b5b1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/858b5b1))
* **colorpicker:** enable two-way value binding ([cc83b7a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/cc83b7a))
* **contextmenu:** contextmenu wrapper ([8d62237](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8d62237))
* **gantt:** gantt chart wrapper ([f41e8d7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f41e8d7))
* **menu:** menu wrapper and initial samples ([84bb2de](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/84bb2de))
* **multiselect:** added multiselect wrapper ([8443b82](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8443b82))
* **notification:** notification wrapper ([425b8e2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/425b8e2))
* **pivotgrid:** added pivotgrid wrapper ([19de5a7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/19de5a7))
* **responsive-panel:** responsive panel ([d93a710](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d93a710))
* **scroll-view:** scrollview wrapper ([4af603c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4af603c))
* **sortable:** sortable wrapper ([de01cb8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/de01cb8))
* **spreadsheet:** added spreadsheet wrapper ([977fac0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/977fac0))
* **switch:** add switch wrapper ([08cd61d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/08cd61d))
* **tabstrip:** tabstrip wrapper ([d12ca6a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d12ca6a))
* **templating:** allow for kendo templates in k-template ([31727ef](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/31727ef))
* **toolbar:** initial toolbar wrapper ([9c01410](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9c01410))
* **tooltip:** initial tooltip wrapper ([efa9646](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/efa9646))
* **upload:** upload wrapper ([ca3d39f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ca3d39f))
* **validator:** validator wrapper ([8cfb4b3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8cfb4b3))
* **widget-base:** allow for k-options binding ([130f12d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/130f12d))
* **widget-base:** allow for multiple value binding property names ([69615f6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/69615f6))
* **window:** window wrapper ([551a05c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/551a05c))



<a name="0.4.2"></a>
## [0.4.2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.4.1...v0.4.2) (2016-03-03)

### refactor

* chore(test): load aurelia-polyfill for tests ([48d433f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9464ec605eececfd80dc0dc413804444648d433f))
also removed for-of loops so it doesn't need the Symbols polyfill


<a name="0.4.1"></a>
## [0.4.1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.4.0...v0.4.1) (2016-03-02)


### Bug Fixes

* **dependencies:** updated dependencies ([3534eac](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3534eac))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.3.2...v0.4.0) (2016-02-25)


### Bug Fixes

* **grid:** always initialize on div ([d5c64e1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d5c64e1))

### Features

* **autocomplete:** convert to custom element ([5125848](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5125848))
* **barcode:** add barcode wrapper ([895246f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/895246f))
* **diagram:** added diagram wrapper ([93b581f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/93b581f))
* **drag-and-drop:** added drag and drop wrappers ([783378d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/783378d))
* **gauges:** add linear and radial gauges ([e81c6b3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e81c6b3))
* **switch:** add switch wrapper ([6ab4259](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6ab4259))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.3.1...v0.3.2) (2016-02-25)


### Bug Fixes

* **map:** Map is a PRO control ([9bec7a2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9bec7a2))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.3.0...v0.3.1) (2016-02-24)


### Bug Fixes

* **autocomplete:** load autocomplete with core() ([695d1a6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/695d1a6))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.2.3...v0.3.0) (2016-02-24)


### Bug Fixes

* **events:** only delay specific events ([c19801c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c19801c))
* **value-binding:** fix sender.value is undefined error ([33c214a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/33c214a))
* **wrapper:** map control has no value ([33e4e66](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/33e4e66))

### Features

* **all:** added multi-template support using k-template element ([2dbe981](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2dbe981))
* **combobox:** combobox wrapper ([9ab478f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9ab478f))
* **editor wrapper:** add basic use case ([bb30950](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/bb30950))
* **grid:** added multi-template support for grid ([bd6ba43](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/bd6ba43))
* **listview:** added listview wrapper ([0ffc197](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0ffc197))
* **listview:** listview wrapper ([000e0ea](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/000e0ea))
* **numeric-textbox:** two-way value binding ([6b1fbba](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6b1fbba))
* **scheduler:** replace k-event-template with generic k-template element ([b601108](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b601108))
* **scheduler:** replace k-event-template with generic k-template element ([9c02497](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9c02497))
* **templating:** added more helpful errors for invalid template prop names ([ec598e8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ec598e8))
* **templating:** template properties now auto-register in generateBindables ([5074424](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5074424))
* **templating:** templateProperty now automatically creates a bindable ([3c6b8b6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3c6b8b6))
* **treelist:** added support for multi-templates ([da201d3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/da201d3))
* **value-converters:** wrap kendo functions in value converters ([fa1985b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fa1985b))



<a name="0.2.3"></a>
## [0.2.3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.2.2...v0.2.3) (2016-02-12)


### Bug Fixes

* **all:** lock down jQuery version to 2.1.4 ([bc74e84](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/bc74e84))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.2.1...v0.2.2) (2016-02-11)

### dependencies
updated dependencies


<a name="0.2.1"></a>
## [0.2.1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.2.0...v0.2.1) (2016-02-04)


### Bug Fixes

* **value-binding:** fix sender.value is undefined error ([f7e44a3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f7e44a3))
* **value-binding:** fix sender.value is undefined error ([d99ffeb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d99ffeb))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/compare/0.1.4...v0.2.0) (2016-02-03)


### Bug Fixes

* **calendar:** remove unneeded line ([35ec7d9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/35ec7d9))
* **template-compiler:** only enhance without au-targets ([e40fc66](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e40fc66))

### Features

* **all:** two-way value-binding ([84817b9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/84817b9))
* **bindables:** generate bindables from json ([aa4da77](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/aa4da77))
* **calendar:** calendar wrapper ([b118808](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b118808))
* **colorpicker:** add flatcolorpicker component ([9b469d0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9b469d0))
* **colorpicker:** added kendoColorPalette implementation ([1c047af](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1c047af))
* **datetimepicker:** added datetimepicker wrapper ([47b603a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/47b603a))
* **grid:** allow for value converters ([e4d1d01](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e4d1d01))
* **grid:** pass <require> ViewResources to enhance ([1de0564](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1de0564))
* **maskedtextbox:** add masked textbox wrapper ([05db6c6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/05db6c6))
* **panelbar:** added initial panelbar implementation ([754b3c1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/754b3c1))
* **panelbar:** tweaked call to widgetbase to fix missing event handlers ([05b6ca0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/05b6ca0))
* **rangeslider:** add rangeslider wrapper ([f9bd238](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f9bd238))
* **scheduler:** scheduler ([5f71c62](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5f71c62))
* **timepicker:** add timepicker wrapper ([d09ccf4](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d09ccf4))
* **treelist:** added treelist implementation ([79f8983](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/79f8983))
* **widgetbase:** added "rootElement" to widgetbase.createWidget() options object ([f6af2f3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f6af2f3))



<a name="0.1.2"></a>
## 0.1.2 (2016-01-27)

### fix

* fix(dependencies): remove aurelia-framework dependency ([c9d57e0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c9d57e0))



<a name="0.1.1"></a>
## 0.1.1 (2016-01-27)

### feat

* feat(nav): nav now uses kendo styles for theme support ([a6e3732](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a6e3732))

### refactor

* refactor(au-col): rename to k-col ([42a9ddf](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/42a9ddf))


### BREAKING CHANGE

* * ``<au-col>`` has been renamed to ``<k-col>``


<a name="0.1.0"></a>
# 0.1.0 (2016-01-22)

### feat

* feat(all): add configuration callback defaults ([ab4043f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ab4043f))
* feat(all): added initialized callback ([fe8fca7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fe8fca7))
* feat(all): added markdown + tabstrip initial implementation ([d97c2f8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d97c2f8))
* feat(all): added tabstrip, added code/html previews, added configure callback for selective plug-in  ([4eacdd1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4eacdd1))
* feat(all): added task queueing to kendo event wrapper ([2feb67e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2feb67e))
* feat(all): expose kendo events ([d897146](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d897146))
* feat(all): expose widget ([a2e4a4f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a2e4a4f))
* feat(all): generate bindable properties ([e0415d1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e0415d1))
* feat(all): generate event proxies ([1387e89](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1387e89))
* feat(all): implement dropdownlist, progressbar, slider + samples ([899abd5](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/899abd5))
* feat(all): refactor WidgetBase to use composition over inheritance ([d97a6d4](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d97a6d4))
* feat(all): templating ([d5c6962](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d5c6962))
* feat(all): templating ([709f71e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/709f71e))
* feat(all): update configuration to use callbacks + builder pattern instead of strings ([0afb4dd](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0afb4dd))
* feat(auto-complete): added more samples ([3348f44](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3348f44))
* feat(auto-complete): templates ([cf2bd83](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/cf2bd83))
* feat(autocomplete): add template customization sample ([70e1243](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/70e1243))
* feat(build): added dev build with gitignored build folder ([07e3e9f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/07e3e9f))
* feat(chart): add chart wrapper ([552926e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/552926e))
* feat(charts): added treemap and stock ([54be95b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/54be95b))
* feat(compiler): support jQuery selectors ([e17f857](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e17f857))
* feat(css): add hover contextual styles for collapse-panel ([f42e451](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f42e451))
* feat(dropdownlist): improved implementation ([f784608](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f784608))
* feat(dts-generation): enable dts generation ([141abea](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/141abea))
* feat(grid): allow both use of au-col's and k-columns.bind ([5493342](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5493342))
* feat(grid): batch editing ([7a40a33](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7a40a33))
* feat(grid): binding to remote data ([4ae23ed](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4ae23ed))
* feat(grid): enable pagination ([7aa2295](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7aa2295))
* feat(grid): initialization from existing table ([6450b6b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6450b6b))
* feat(grid): inline editing sample ([84549d6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/84549d6))
* feat(installation): Kendo 2016 instructions for vendors approach ([055c0bd](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/055c0bd))
* feat(installation): linkable pages ([e0bddb0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e0bddb0))
* feat(menu): add menu wrapper ([db8cbb0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/db8cbb0))
* feat(sample): add custom pan and zoom samples ([955b562](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/955b562))
* feat(sample): add wizard ([e383c16](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e383c16))
* feat(sample): basic use ([70c81a2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/70c81a2))
* feat(sample): frozen columns sample ([dde7ac3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/dde7ac3))
* feat(sample): gitter sidecar ([af7953a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/af7953a))
* feat(sample): grid binding to local data ([38fe5fa](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/38fe5fa))
* feat(sample): grid working offline sample ([f54b5fc](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f54b5fc))
* feat(sample): grid working offline sample ([09f335e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/09f335e))
* feat(sample): polar charts ([a448f8c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a448f8c))
* feat(sample): radar samples ([09270a3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/09270a3))
* feat(sample): remote grid virtualization ([4e70179](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4e70179))
* feat(sample): scatter charts ([62de971](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/62de971))
* feat(sample): theme selector ([c70d757](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c70d757))
* feat(sample): waterfall charts ([6f98205](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6f98205))
* feat(samples): added area chart samples ([40fa321](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/40fa321))
* feat(unit-test): add unit test ([e33e574](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e33e574))
* feat(widget): enable kWidget binding from html ([8133549](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8133549))
* feat(wizard): finished installation wizard ([fa1106c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fa1106c))

### fix

* fix(all): fix jQuery import error ([ac45638](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ac45638))
* fix(all): oops, half fixed merge conflicts ([c63949a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c63949a))
* fix(all): remove src/ from showcase useView ([eb78770](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/eb78770))
* fix(autocomplete): update default values ([0b07327](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0b07327))
* fix(bubble-charts): fix chart sample ([e045833](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e045833))
* fix(build): update build to match templating-resources ([f24e344](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f24e344))
* fix(bullet): fix remote sample ([394877c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/394877c))
* fix(chart): allow style attribute ([3ff4085](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3ff4085))
* fix(chart): default values ([1bd5240](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1bd5240))
* fix(config.js): remove css dep from config.js ([c548d00](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c548d00))
* fix(config): fixed package.json to remove refs to old kendo repo ([eb9471c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/eb9471c))
* fix(dep): add jquery dependency ([7d515c6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7d515c6))
* fix(deps): remove kendo-ui dep ([57794e5](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/57794e5))
* fix(dev): fix sample app ([c8e6819](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c8e6819))
* fix(doc): add gulp doc ([0612d06](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0612d06))
* fix(docs): scroll to top after page switch ([5187aa7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5187aa7))
* fix(funnel): fix markup ([c4c0891](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c4c0891))
* fix(grid): default format value ([98cfdfd](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/98cfdfd))
* fix(grid): enable bindable column template ([2efacdb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2efacdb))
* fix(grid): use .bind on width integers ([af0c152](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/af0c152))
* fix(index): remove css import ([3cd20ff](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3cd20ff))
* fix(installation-wizard): fix <require> not showing ([9a79b2c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9a79b2c))
* fix(installation): fix vendor instructions ([6084128](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6084128))
* fix(karma): exit when test fails ([57062db](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/57062db))
* fix(sampe): update button enable api ([349223e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/349223e))
* fix(sample): add dependencies from root package ([762f945](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/762f945))
* fix(sample): fix button ([b115a50](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b115a50))
* fix(sample): fix datasource reference ([2d34aba](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2d34aba))
* fix(sample): fix highlighting ([1fe2c31](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1fe2c31))
* fix(sample): fix markdown in boxplot sample ([31cfe36](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/31cfe36))
* fix(sample): fix pie chart remote data ([9c92d79](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9c92d79))
* fix(sample): fix pie chart title binding ([8b6b110](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8b6b110))
* fix(sample): fix typo's ([6959653](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6959653))
* fix(sample): fix working offline button ([843e099](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/843e099))
* fix(sample): fix working offline sample ([ca04408](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ca04408))
* fix(sample): fixed sample codes ([c640921](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c640921))
* fix(sample): improved path mapping ([56194dd](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/56194dd))
* fix(sample): smooth line ([bf07274](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/bf07274))
* fix(sample): update basic use of button ([7544d20](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7544d20))
* fix(sample): update deps, fix kendo image problem ([f9ce8ba](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f9ce8ba))
* fix(sample): workaround css attribute bug ([6c2d137](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6c2d137))
* fix(samples): fix some sample bugs ([6e555f9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6e555f9))
* fix(samples): progress bar ([44203b9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/44203b9))
* fix(template-compiler): fix stackoverflow ([2f75abb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2f75abb))
* fix(template-compiler): handle potentially empty dataItems ([91fb98a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/91fb98a))
* fix(template-compiler): resolve timing issue ([16f70c2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/16f70c2))
* fix(template-compiler): store $parent on widget not options ([163e89f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/163e89f))
* fix(templating): add overrideContext ([6d82124](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6d82124))

### refactor

* refactor(all): detach in widgetbase ([3e1607f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3e1607f))
* refactor(all): different event prefix ([01b64c0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/01b64c0))
* refactor(all): made imports consistent ([38d8854](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/38d8854))
* refactor(all): move kendo initialization to bind ([ceef52e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ceef52e))
* refactor(all): prefix bindable properties ([11e02fc](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/11e02fc))
* refactor(all): refactor out common code ([90e0200](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/90e0200))
* refactor(all): shorten names ([e851601](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e851601))
* refactor(all): use composition ([d557779](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d557779))
* refactor(charts): move charts samples ([413b486](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/413b486))
* refactor(grid): convert au-col to custom element ([165cd62](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/165cd62))
* refactor(grid): convert au-col to custom element ([a9bc945](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a9bc945))
* refactor(grid): extract child parser ([d321e3f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d321e3f))
* refactor(grid): rename au-col ([5eb3c26](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5eb3c26))
* refactor(grid): rename au-kendo-grid-column to au-col ([b416e96](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b416e96))
* refactor(highlight): remove highlightjs ([da51b01](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/da51b01))
* refactor(markdown): remove md files ([c36d5e8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c36d5e8))
* refactor(menu): move css in basic use sample ([53ab42b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/53ab42b))
* refactor(nav-bar): add charts dropdown ([ccbe02c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ccbe02c))
* refactor(numerictextbox): update to new widgetbase ([47d6ad8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/47d6ad8))
* refactor(rename): rename plugin to bridge ([4a4fd07](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4a4fd07))
* refactor(sample): add console custom element ([8645a4c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8645a4c))
* refactor(sample): move images/styles folders ([597f369](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/597f369))
* refactor(sample): remove html config page ([4b1c1d0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4b1c1d0))
* refactor(samples): k-widget ([343767e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/343767e))
* refactor(templating-compiler): $parent context in widget, not in singleton class ([372d331](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/372d331))

### test

* test(all): testing differences in build between machines ([ba21c65](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ba21c65))

*  fix(autocomplete): update default values ([5899b31](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5899b31))
* About css fix ([6f1d29b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6f1d29b))
* abstract recreate ([de7d671](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/de7d671))
* add 'bridge developers notes' help docs ([ac9a949](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ac9a949))
* add a few help docs pages ([ae8fad1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ae8fad1))
* add bar charts ([3080492](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3080492))
* add beforeInitialize callback ([c3eb695](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c3eb695))
* add box plot charts ([9f97152](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9f97152))
* add bubble chart control ([fb20fb4](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fb20fb4))
* add bullet charts (partial) ([7fe959c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7fe959c))
* add chapter how-to-use-this-app ([53a7055](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/53a7055))
* add code preview for all area charts ([fafffbf](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fafffbf))
* add complete pie charts ([a179653](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a179653))
* Add components and plugins tutorials structure ([31e8cd5](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/31e8cd5))
* add css tab in code preview ([0b7cc16](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0b7cc16))
* add docs ([5d8ed5a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5d8ed5a))
* add donut charts ([d3659db](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d3659db))
* add first draft of app developers tutorials ([7e73f2f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7e73f2f))
* Add first draft of help system ([d778406](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d778406))
* add funnel charts funnel labels ([7894545](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7894545))
* add last portion of funnel charts ([45119e4](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/45119e4))
* add line chart to about page ([33b4b8f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/33b4b8f))
* add line charts ([8f8f37b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8f8f37b))
* add missing exclamation point for css loader ([2b886d7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2b886d7))
* add missing grid column properties ([396f79a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/396f79a))
* add more help docs ([42bad25](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/42bad25))
* add more help docs ([404a8ac](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/404a8ac))
* add navigation guide article ([56a5952](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/56a5952))
* add partial implementation of bar chart ([08b606d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/08b606d))
* add partial implementation of pie-chart binding to remote data ([43143ec](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/43143ec))
* add partially finished funnel and pie charts, style selector ([9b4c8b9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9b4c8b9))
* add registry to package.json ([04537f7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/04537f7))
* add remainder of bullet chart ([553d862](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/553d862))
* add sample selector ([efc748b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/efc748b))
* add scroll bars to help ([1c14765](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1c14765))
* add several chart samples details ([b8e3ca6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b8e3ca6))
* add skeleton help page ([5ab81ff](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5ab81ff))
* Add Telerik credentials information ([bff88db](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/bff88db))
* Add test page ([b65bc48](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b65bc48))
* add Thanood suggested fixes to docs ([6c94968](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6c94968))
* add treeview to project status control ([918cf56](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/918cf56))
* Added Area Chart ([700f8aa](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/700f8aa))
* Added datepicker ([a534117](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a534117))
* Added datepicker ([8b111e9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8b111e9))
* added icons to supported controls list ([c951436](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c951436))
* added markdown custom element ([13ba6f0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/13ba6f0))
* added more menu control samples ([9546a29](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9546a29))
* Added NumericTextBox ([1b92ded](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1b92ded))
* added scheduler, toolbar ([8b0e650](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8b0e650))
* added some chart heights ([1edbf1d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1edbf1d))
* Added steps for Kendo PRO ([d22d40e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d22d40e))
* added Tab Position case to Tabstrip ([e530237](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e530237))
* added the grid popup editing sample ([12aab07](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/12aab07))
* added the use of <au-code> everywhere ([0008b94](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0008b94))
* added to button and tabstrip controls ([5a2337a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5a2337a))
* Added treeview ([80d99c2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/80d99c2))
* added two control skeletons ([04955e5](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/04955e5))
* added two more controls ([490e629](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/490e629))
* additional unit test coverage ([60f4456](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/60f4456))
* additional vertical space formatting ([c75a0f8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c75a0f8))
* all about this application help items ([4fa7787](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4fa7787))
* allow linking between doc pages and anchors ([3980e2d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3980e2d))
* aurelia-ize theme selector ([d72f40b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d72f40b))
* aurelia-patch-updates-2015-12-03 ([7e7eb49](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7e7eb49))
* autocomplete style ([a21088f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a21088f))
* bootstrap menu to kendo menu ([318591c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/318591c))
* bridge developers tutorials skeleton with all code ([c149820](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c149820))
* build ([af98252](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/af98252))
* build ([14ec700](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/14ec700))
* build ([ece6962](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ece6962))
* build ([812ed13](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/812ed13))
* build ([dcaff7f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/dcaff7f))
* build ([2cc35d1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2cc35d1))
* build ([71240aa](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/71240aa))
* build ([d9d2126](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d9d2126))
* build ([451e417](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/451e417))
* build ([ac44bcd](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ac44bcd))
* build ([a68263b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a68263b))
* build ([f2ae071](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f2ae071))
* build ([924b8fa](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/924b8fa))
* build ([8fae7bb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8fae7bb))
* build ([b631f3a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b631f3a))
* build ([c9889ff](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c9889ff))
* change order of menubar items ([bfc24eb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/bfc24eb))
* change paths to new category names ([e7ec192](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e7ec192))
* change travis env variable ([39ee4a0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/39ee4a0))
* change vertical spacing ([bec0d95](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/bec0d95))
* chart ([904522e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/904522e))
* charts ([d711b7e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d711b7e))
* chore (all) removed original plugin-skeleton build files ([9177809](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9177809))
* chore (all) removed test files from original plugin-skeleton repo ([deb595d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/deb595d))
* Code Preview for Button ([d7c41ff](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d7c41ff))
* common theme ([a8b3a1c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a8b3a1c))
* correct dependencies ([f03c3d7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f03c3d7))
* corrections for installation pages ([887d482](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/887d482))
* Corrections from documentation review ([f0be4bb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f0be4bb))
* Create .travis.yml ([e077b00](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e077b00))
* Create ci.js ([18de65d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/18de65d))
* Create contributing.md ([2ef2562](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2ef2562))
* Create CONTRIBUTING.md ([9431b35](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9431b35))
* Create default.js ([4e57d39](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4e57d39))
* custom editor ([0752851](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0752851))
* Defined autocomplete using normalized input tag ([f291e9c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f291e9c))
* Delete basic-usage.js ([5cd0a48](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5cd0a48))
* Delete contributing.md ([67a31e1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/67a31e1))
* Delete index.js ([dc16873](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/dc16873))
* disable legend funnel charts ([50d8350](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/50d8350))
* doc panelbar control ([7ce414e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7ce414e))
* docs ([dc3eefc](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/dc3eefc))
* docs ([38fbdc1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/38fbdc1))
* docs ([e0a15f0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e0a15f0))
* docs, initial typescript definitions ([e245612](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e245612))
* documentation fixes ([394b500](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/394b500))
* draft of about page ([e76080e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e76080e))
* dropdown ([e3d2d4a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e3d2d4a))
* enable sample label ([1ea901a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1ea901a))
* eslint ignore signalr ([f226afd](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f226afd))
* feat (all) added collapse panel for sample app ([611960b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/611960b))
* feat (all) added highlight.pack js, implemented auto-complete, added events/options helper modules ([e0c6c3c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e0c6c3c))
* feat (button) completed button API wrapper implementation ([6a4bb66](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6a4bb66))
* final draft of app-developers-tutorial ([7a0bbf5](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7a0bbf5))
* finish autocomplete ([b5d3965](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b5d3965))
* finish button ([eb72f64](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/eb72f64))
* finish charts ([309a04f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/309a04f))
* finish funnel sample ([634ed99](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/634ed99))
* finish grid ([8a6d1e8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8a6d1e8))
* finish grid custom editing sample ([ec56576](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ec56576))
* finish installation wizard ([af90b6f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/af90b6f))
* finish progress bar ([7211bc8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7211bc8))
* finish slider ([3b4a1b2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3b4a1b2))
* finish toolbar structure ([23be794](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/23be794))
* finished how-to-use-this-app first draft ([4f6c0d1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4f6c0d1))
* fix box model ([ec9f73b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ec9f73b))
* fix broken links in doc ([9743e5d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9743e5d))
* fix code preview ([4db0698](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4db0698))
* fix docs route matching ([b28e88c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b28e88c))
* fix donut charts title ([3a0b612](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3a0b612))
* fix dropdownlist ([c6939f2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c6939f2))
* Fix indentation ([5ee3546](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5ee3546))
* fix installation fat arrow ([9baa77f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9baa77f))
* fix line charts stepped line ([4a7fc14](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4a7fc14))
* fix lint errors ([55d8e92](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/55d8e92))
* fix minor bugs in charts section ([a0c0715](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a0c0715))
* fix sample navigation ([24785a6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/24785a6))
* fix slider initialization ([91e9a73](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/91e9a73))
* fix some broken paths after introducing src/samples folder ([03ac0aa](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/03ac0aa))
* fix spacing ([ae76061](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ae76061))
* fix spacing ([fd4ff75](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fd4ff75))
* fix sparkline basic use ([0ff6b68](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0ff6b68))
* fix spelling of funel ([79e1efd](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/79e1efd))
* fix style selector ([5c5d914](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5c5d914))
* fix theme related issues ([d95098f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d95098f))
* fixed au-code sections to match actual code ([84152cc](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/84152cc))
* fixed delegate reference in doc ([5225726](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5225726))
* fixed localhost link ([7377f99](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7377f99))
* fixed scrollbars help ([2a6e4bb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2a6e4bb))
* fixed skeleton ([ddfd12c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ddfd12c))
* fixed typo in button/index.js ([218f049](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/218f049))
* for-of loop is giving issues ([95f0a46](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/95f0a46))
* funnel ([ef9117c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ef9117c))
* funnel basic use ([87d0571](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/87d0571))
* gap and spacing ([5cb368a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5cb368a))
* handle cleanup before compile ([3ca299f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3ca299f))
* hide gitter button ([3b91038](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3b91038))
* implement sparkline remote data ([5c140a1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5c140a1))
* import jquery earlier ([044468a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/044468a))
* Improve the definition of this application ([5a70e76](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5a70e76))
* improved docs layout ([93f9c61](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/93f9c61))
* improved grid a little ([9061923](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9061923))
* increase fontsize of panelbar ([d137440](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d137440))
* initial commit ([5bfdd9a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5bfdd9a))
* Initial commit ([054a727](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/054a727))
* issue 134 for grid wrapper ([6392bfe](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6392bfe))
* jspm-git docs for 2016 ([f9fca0c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f9fca0c))
* keep state of menu ([980d6c7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/980d6c7))
* load filtercell javascript file in grid wrapper ([ef025ec](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ef025ec))
* local data ([1179fe7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1179fe7))
* local data ([96c2603](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/96c2603))
* local data ([a89b2bc](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a89b2bc))
* looking for better names and structure of help section ([781ee11](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/781ee11))
* made all grids same height ([d17176e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d17176e))
* make events bubble, switch to delegate, add tests ([ce98d97](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ce98d97))
* markdown code highlighting ([419bfdb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/419bfdb))
* Merge branch 'common-theme' ([7b28126](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7b28126))
* Merge branch 'composition-without-intercept' ([456e40b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/456e40b))
* Merge branch 'markdown' ([076819a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/076819a))
* Merge branch 'master' into lint ([cd5877b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/cd5877b))
* Merge branch 'master' of github.com:aurelia-ui-toolkits/aurelia-kendoui-plugin ([1cfeef5](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1cfeef5))
* Merge branch 'master' of github.com:aurelia-ui-toolkits/aurelia-kendoui-plugin ([22f8df0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/22f8df0))
* Merge branch 'master' of github.com:aurelia-ui-toolkits/aurelia-kendoui-plugin ([7af8241](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7af8241))
* Merge branch 'master' of github.com:charlespockert/aurelia-kendoui-plugin ([885fc33](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/885fc33))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([7be7409](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7be7409))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([f893d75](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f893d75))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([ae9ff78](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ae9ff78))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([48bba47](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/48bba47))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([801f833](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/801f833))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([f96e523](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f96e523))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([dd707cf](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/dd707cf))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([e20fb35](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e20fb35))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([8d51b06](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8d51b06))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([f9b3779](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f9b3779))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([35a1fa2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/35a1fa2))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([0d18b0e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0d18b0e))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([34de83d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/34de83d))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([22aa684](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/22aa684))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([4c92448](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4c92448))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([c38a1c7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c38a1c7))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([5fd0250](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5fd0250))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([d6d2827](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d6d2827))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([4df7674](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4df7674))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([56f0368](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/56f0368))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([240f039](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/240f039))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([2053a5d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2053a5d))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([bce424f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/bce424f))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([593ca15](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/593ca15))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([928ddf2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/928ddf2))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([7173707](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7173707))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([c077ff9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c077ff9))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([22ec6d0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/22ec6d0))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([f26ca69](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f26ca69))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([d80f0fc](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d80f0fc))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([ee4616e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ee4616e))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([85b86ec](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/85b86ec))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([0c138a1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0c138a1))
* Merge branch 'master' of https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin ([c90f75c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c90f75c))
* Merge branch 'master' of https://github.com/rborosak/aurelia-kendoui-plugin into rborosak-master ([7223d93](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7223d93))
* Merge branch 'master' of https://github.com/rborosak/aurelia-kendoui-plugin into rborosak-master ([45106dc](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/45106dc))
* Merge branch 'navigation' ([a6f8caa](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a6f8caa))
* Merge branch 'rborosak-master' ([769d280](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/769d280))
* Merge branch 'rborosak-master' ([cc3a3e3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/cc3a3e3))
* Merge branch 'refactor' ([386676e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/386676e))
* Merge branch 'sparkles' ([74506d3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/74506d3))
* Merge branch 'templating' ([edd9936](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/edd9936))
* merge master ([3fa7ad1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3fa7ad1))
* Merge navigation ([ad3bbbf](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ad3bbbf))
* Merge pull request #10 from charlespockert/master ([2863f3c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2863f3c))
* Merge pull request #100 from aurelia-ui-toolkits/lint ([b709294](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b709294))
* Merge pull request #104 from aurelia-ui-toolkits/bind ([1fc9d82](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1fc9d82))
* Merge pull request #116 from aurelia-ui-toolkits/templating-global ([2a00f33](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2a00f33))
* Merge pull request #140 from aurelia-ui-toolkits/console_log ([c9f3827](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c9f3827))
* Merge pull request #144 from aurelia-ui-toolkits/charts ([36875f0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/36875f0))
* Merge pull request #16 from aurelia-ui-toolkits/update ([874d77e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/874d77e))
* Merge pull request #175 from aurelia-ui-toolkits/dropdownlist ([6617d70](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6617d70))
* Merge pull request #180 from aurelia-ui-toolkits/charles ([61ca6c8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/61ca6c8))
* Merge pull request #181 from aurelia-ui-toolkits/charles ([f0c0594](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f0c0594))
* Merge pull request #212 from aurelia-ui-toolkits/progressbar ([973a463](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/973a463))
* Merge pull request #254 from rborosak/master ([c12ddd2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c12ddd2))
* Merge pull request #258 from aurelia-ui-toolkits/devbuild ([04c6a53](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/04c6a53))
* Merge pull request #271 from aurelia-ui-toolkits/composition-without-intercept ([670be24](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/670be24))
* Merge pull request #4 from charlespockert/master ([abed593](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/abed593))
* Merge pull request #6 from charlespockert/master ([ffc64fa](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ffc64fa))
* Merge pull request #7 from charlespockert/master ([69b5444](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/69b5444))
* Merge pull request #73 from JeroenVinke/update-dev-env ([756c75f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/756c75f))
* Merge pull request #74 from JeroenVinke/deps-index.html ([91a5ed4](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/91a5ed4))
* Merge pull request #8 from charlespockert/master ([cf8186a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/cf8186a))
* Merge pull request #85 from JeroenVinke/remove-css ([a8085ed](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a8085ed))
* Merge pull request #86 from JeroenVinke/master ([00659b4](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/00659b4))
* Merge pull request #9 from charlespockert/master ([8cf4606](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8cf4606))
* Merge pull request #99 from aurelia-ui-toolkits/dts-generation ([8658832](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8658832))
* minimize dependencies ([3cdc515](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3cdc515))
* mode grid samples ([27c61e6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/27c61e6))
* more docs ([62f1066](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/62f1066))
* more docs ([476eed7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/476eed7))
* more docs improvements ([b4547c4](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b4547c4))
* more text "how to use this app" ([5b30980](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5b30980))
* more work on docs ([d093ebb](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d093ebb))
* move import of pdf Kendo files ([1871a40](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1871a40))
* navigation ([acdb2e7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/acdb2e7))
* new README.md ([625fccf](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/625fccf))
* no  comment ([4cff336](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4cff336))
* no message ([2bc7747](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2bc7747))
* no message ([a27d86b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a27d86b))
* no message ([3a16878](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3a16878))
* no message ([1d830d0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1d830d0))
* no message ([fa935a8](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fa935a8))
* no message ([604101f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/604101f))
* opt-out of globalResources ([7229d7e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7229d7e))
* pie chart ([5570286](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5570286))
* pie chart style ([b49b574](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b49b574))
* pie labels ([eda02be](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/eda02be))
* polish installation section ([3f65b90](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3f65b90))
* progressbar samples ([3b2a0e1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3b2a0e1))
* project status ([2d3a390](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2d3a390))
* range charts ([f7198b6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f7198b6))
* refactor samples into their own folder ([13c9869](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/13c9869))
* reformat all chart view files ([cdb320c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/cdb320c))
* reformat chart views ([826cbbf](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/826cbbf))
* remote data pie chart css ([aa58fc3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/aa58fc3))
* remove debugger statement ([58f2bbe](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/58f2bbe))
* remove description tab on all chart samples ([1aeda67](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1aeda67))
* remove dropdownlist from menu ([b947e4b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b947e4b))
* remove jspm-git ([0ba7076](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0ba7076))
* remove unnecessary properties ([fa1a4f2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fa1a4f2))
* remove unneeded gulp-yuidoc package ([dd64092](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/dd64092))
* remove websocket sample ([59cfcf3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/59cfcf3))
* remove websockets and signalr from grid samples ([9e333f2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9e333f2))
* removed height specification from "pageable" grids ([7b94dd3](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/7b94dd3))
* rename charts folder to chart for consistency ([b2c97ca](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b2c97ca))
* renamed basic-usage to basic-use ([8128469](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8128469))
* replace samples/cart with samples/chart ([e88a8e1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/e88a8e1))
* resize images that are too big for our markdown ([2b41bea](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2b41bea))
* resized image that was too big ([442f564](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/442f564))
* restructure help pages ([6fae046](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6fae046))
* rewrite the router config ([c6d7099](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c6d7099))
* rewrite the router configuration ([5858b0a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5858b0a))
* sample updates ([4f22cfd](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/4f22cfd))
* second page for About ([a2bf85b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/a2bf85b))
* set pagesize to make grids fit on the page ([0450b15](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0450b15))
* shrink font sizes ([199287e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/199287e))
* signalr ([0fcb776](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0fcb776))
* slider samples ([15e3434](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/15e3434))
* sparkles ([c1be0ed](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c1be0ed))
* sparkline ([6b7b4a0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6b7b4a0))
* styles ([c2603a0](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c2603a0))
* swapped button basic-use and images ([5d90f65](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5d90f65))
* temp comit ([1589a41](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1589a41))
* templating ([b46da20](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b46da20))
* test version used for finding the data access failure ([33ff063](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/33ff063))
* The basic-use is already adopted name ([cf2d20d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/cf2d20d))
* treemap ([0dfc24f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0dfc24f))
* Treeview controle ([ad668c2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ad668c2))
* typo ([c58d3d5](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/c58d3d5))
* typos in bundling.md ([76fe72b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/76fe72b))
* unselect nav-bar buttons on route change ([5d1ffae](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5d1ffae))
* Update .gitignore ([285ad23](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/285ad23))
* Update config.js ([3eacbf9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3eacbf9))
* Update CONTRIBUTING.md ([429963f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/429963f))
* update deps ([21665e2](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/21665e2))
* update eslint ([fed2133](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fed2133))
* update event syntax ([195f227](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/195f227))
* Update karma.conf.js ([eb898f9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/eb898f9))
* Update karma.conf.js ([84d5d8f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/84d5d8f))
* Update package.json ([b323990](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b323990))
* update project status ([3fce66d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3fce66d))
* update project status ([2b03f9f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/2b03f9f))
* Update README to reflect new builder configuration ([ced58d1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/ced58d1))
* Update README.md ([efaf91c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/efaf91c))
* Update README.md ([f7b2238](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f7b2238))
* Update README.md ([3f9a940](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3f9a940))
* Update README.md ([b5fb242](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b5fb242))
* Update README.md ([1e70178](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1e70178))
* Update README.md ([d3eec2c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d3eec2c))
* Update README.md ([29d69c9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/29d69c9))
* Update README.md ([30221ea](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/30221ea))
* Update README.md ([940e92a](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/940e92a))
* Update README.md ([47f66e4](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/47f66e4))
* Update README.md ([52b45c9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/52b45c9))
* Update README.md ([0ec9ad9](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0ec9ad9))
* Update README.md ([b1b56cc](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b1b56cc))
* Update README.md ([5c6bc0d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/5c6bc0d))
* Update README.md ([f04bbed](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/f04bbed))
* Update tab-position.js ([3d61d9f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/3d61d9f))
* Update template-compiler.js ([0cfab7e](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0cfab7e))
* Update template-compiler.js ([856bf55](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/856bf55))
* update the sample selector status ([8955b6d](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8955b6d))
* update vendors installation ([b60299b](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/b60299b))
* updated dependencies ([d211a1c](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/d211a1c))
* updated HTML tab of the code preview for Menu basic use ([8a027e5](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/8a027e5))
* Updated project status ([1c1b4d6](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1c1b4d6))
* upgrade to latest aurelia runtime ([0ee056f](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/0ee056f))
* utilities ([adba376](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/adba376))
* vendors and karma ([1608cd1](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/1608cd1))
* wallaby ([9c0ba07](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/9c0ba07))
* web socket ([6a145a7](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/6a145a7))
* wip ([fbd9068](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/commit/fbd9068))
