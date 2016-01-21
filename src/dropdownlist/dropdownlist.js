import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {fireEvent} from '../common/events';
import 'kendo-ui/js/kendo.dropdownlist.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customAttribute('k-drop-down-list')
@generateBindables('kendoDropDownList')
@inject(Element, WidgetBase)
export class DropDownList {

  @bindable options = {};
  @bindable kValue;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDropDownList')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: ctx
    });

    this._initialized();
  }

  _initialized() {
	   // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.kValue = event.sender.value();
      this.kText = event.sender.text();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.kValue = event.sender.value();
      this.kText = event.sender.text();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    // Ensure the dropdown has an initial value/text
    this.widget.trigger('change');
  }
}
