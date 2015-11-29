System.register(['aurelia-framework', '../common/events', '../common/options', 'jquery', 'kendo-ui/js/kendo.autocomplete.min'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, fireEvent, pruneOptions, $, AuKendoAutoComplete;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }, function (_commonOptions) {
      pruneOptions = _commonOptions.pruneOptions;
    }, function (_jquery) {
      $ = _jquery;
    }, function (_kendoUiJsKendoAutocompleteMin) {}],
    execute: function () {
      AuKendoAutoComplete = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(AuKendoAutoComplete, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }, {
          key: 'animation',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'dataSource',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'dataTextField',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'delay',
          decorators: [bindable],
          initializer: function initializer() {
            return 200;
          },
          enumerable: true
        }, {
          key: 'enable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'filter',
          decorators: [bindable],
          initializer: function initializer() {
            return 'startswith';
          },
          enumerable: true
        }, {
          key: 'fixedGroupTemplate',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'groupTemplate',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'height',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'highlightFirst',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'ignoreCase',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'minLength',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'placeholder',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'popup',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'separator',
          decorators: [bindable],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }, {
          key: 'suggest',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'headerTemplate',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'template',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'valuePrimitive',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'virtual',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function AuKendoAutoComplete(element) {
          _classCallCheck(this, _AuKendoAutoComplete);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'dataTextField', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'delay', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'enable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'filter', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'fixedGroupTemplate', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'groupTemplate', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'height', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'highlightFirst', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'ignoreCase', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'minLength', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'placeholder', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'popup', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'separator', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'suggest', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'headerTemplate', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'valuePrimitive', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'virtual', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          this.element = element;
        }

        AuKendoAutoComplete.prototype.attached = function attached() {
          var _this = this;

          this._component = $(this.element).kendoAutoComplete(this.getOptions()).data('kendoAutoComplete');

          this._component.bind('change', function (event) {
            _this.value = event.sender.value();

            fireEvent(_this.element, 'input');
          });

          this._component.bind('select', function (event) {
            _this.value = event.sender.value();

            fireEvent(_this.element, 'input');
          });
        };

        AuKendoAutoComplete.prototype.detached = function detached() {
          if (this._component) {
            this._component.destroy();
          }
        };

        AuKendoAutoComplete.prototype.getOptions = function getOptions() {
          var options = pruneOptions({
            animation: this.animation,
            dataSource: this.dataSource,
            dataTextField: this.dataTextField,
            delay: this.delay,
            enable: this.enable,
            filter: this.filter,
            fixedGroupTemplate: this.fixedGroupTemplate,
            groupTemplate: this.groupTemplate,
            height: this.height,
            highlightFirst: this.highlightFirst,
            ignoreCase: this.ignoreCase,
            minLength: this.minLength,
            placeholder: this.placeholder,
            popup: this.popup,
            separator: this.separator,
            suggest: this.suggest,
            headerTemplate: this.headerTemplate,
            template: this.template,
            valuePrimitive: this.valuePrimitive,
            virtual: this.virtual
          });

          return Object.assign({}, this.options, options);
        };

        AuKendoAutoComplete.prototype.enableChanged = function enableChanged(newValue) {
          if (this._component) {
            this._component.enable(newValue);
          }
        };

        var _AuKendoAutoComplete = AuKendoAutoComplete;
        AuKendoAutoComplete = inject(Element)(AuKendoAutoComplete) || AuKendoAutoComplete;
        AuKendoAutoComplete = customAttribute('au-kendo-autocomplete')(AuKendoAutoComplete) || AuKendoAutoComplete;
        return AuKendoAutoComplete;
      })();

      _export('AuKendoAutoComplete', AuKendoAutoComplete);
    }
  };
});