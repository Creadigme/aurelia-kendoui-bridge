'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

var _pdfPdf = require('../pdf/pdf');

require('kendo.dataviz.treemap.min');

var TreeMap = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(TreeMap, [{
    key: 'kOptions',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  function TreeMap(element, widgetBase) {
    _classCallCheck(this, _TreeMap);

    _defineDecoratedPropertyDescriptor(this, 'kOptions', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeMap').linkViewModel(this);
  }

  TreeMap.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TreeMap.prototype.attached = function attached() {
    this.recreate();
  };

  TreeMap.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  TreeMap.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TreeMap = TreeMap;
  TreeMap = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(TreeMap) || TreeMap;
  TreeMap = _commonDecorators.generateBindables('kendoTreeMap')(TreeMap) || TreeMap;
  TreeMap = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'treemap')(TreeMap) || TreeMap;
  return TreeMap;
})();

exports.TreeMap = TreeMap;