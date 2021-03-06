declare module 'aurelia-kendoui-bridge' {
  import 'jquery';
  import { inject, Container, transient }  from 'aurelia-dependency-injection';
  import { customElement, bindable, children, ViewResources, customAttribute, BindableProperty, HtmlBehaviorResource, TemplatingEngine, noView, processContent, TargetInstruction }  from 'aurelia-templating';
  import { metadata }  from 'aurelia-metadata';
  import { bindingMode }  from 'aurelia-binding';
  import { TaskQueue }  from 'aurelia-task-queue';
  import 'kendo.autocomplete.min';
  import 'kendo.virtuallist.min';
  import 'kendo.dataviz.barcode.min';
  import 'kendo.button.min';
  import 'kendo.mobile.buttongroup.min';
  import 'kendo.calendar.min';
  import 'kendo.colorpicker.min';
  
  // eslint-disable-line no-unused-vars
  import 'kendo.dataviz.chart.min';
  import 'kendo.dataviz.chart.polar.min';
  import 'kendo.dataviz.chart.funnel.min';
  
  // eslint-disable-line no-unused-vars
  import 'kendo.dataviz.sparkline.min';
  
  // eslint-disable-line no-unused-vars
  import 'kendo.dataviz.stock.min';
  
  // eslint-disable-line no-unused-vars
  import 'kendo.dataviz.treemap.min';
  import 'kendo.colorpicker.min';
  import 'kendo.combobox.min';
  import 'kendo.virtuallist.min';
  import 'kendo.menu.min';
  import 'kendo.datepicker.min';
  import 'kendo.datetimepicker.min';
  import 'kendo.dataviz.diagram.min';
  import 'kendo.draganddrop.min';
  import 'kendo.draganddrop.min';
  import 'kendo.draganddrop.min';
  import 'kendo.dropdownlist.min';
  import 'kendo.virtuallist.min';
  import 'kendo.editor.min';
  import 'kendo.colorpicker.min';
  
  // eslint-disable-line no-unused-vars
  import 'kendo.gantt.min';
  import 'kendo.dataviz.gauge.min';
  import 'kendo.dataviz.gauge.min';
  
  // eslint-disable-line no-unused-vars
  import 'kendo.data.signalr.min';
  import 'kendo.filtercell.min';
  import 'kendo.grid.min';
  import 'kendo.listview.min';
  import 'kendo.dataviz.map.min';
  import 'kendo.maskedtextbox.min';
  import 'kendo.menu.min';
  import 'kendo.multiselect.min';
  import 'kendo.virtuallist.min';
  import 'kendo.notification.min';
  import 'kendo.numerictextbox.min';
  import 'kendo.panelbar.min';
  import 'kendo.pdf.min';
  import 'kendo.excel.min';
  import 'kendo.pivot.configurator.min';
  
  // eslint-disable-line no-unused-vars
  import 'kendo.pivotgrid.min';
  import 'kendo.pivot.fieldmenu.min';
  import 'kendo.progressbar.min';
  import 'kendo.dataviz.qrcode.min';
  import 'kendo.slider.min';
  import 'kendo.responsivepanel.min';
  
  // eslint-disable-line no-unused-vars
  import 'kendo.scheduler.min';
  import 'kendo.scheduler.agendaview.min';
  import 'kendo.scheduler.dayview.min';
  import 'kendo.scheduler.monthview.min';
  import 'kendo.scheduler.recurrence.min';
  import 'kendo.scheduler.timelineview.min';
  import 'kendo.mobile.scrollview.min';
  import 'kendo.slider.min';
  import 'kendo.sortable.min';
  import 'kendo.splitter.min';
  import 'kendo.spreadsheet.min';
  import 'kendo.mobile.switch.min';
  import 'kendo.tabstrip.min';
  import 'kendo.timepicker.min';
  import 'kendo.toolbar.min';
  import 'kendo.tooltip.min';
  
  // eslint-disable-line no-unused-vars
  import 'kendo.data.signalr.min';
  import 'kendo.filtercell.min';
  import 'kendo.treelist.min';
  import 'kendo.treeview.min';
  import 'kendo.upload.min';
  import 'kendo.validator.min';
  import 'kendo.window.min';
  
  /**
  * Configure the Aurelia-KendoUI-bridge
  */
  export class KendoConfigBuilder {
    resources: string[];
    useGlobalResources: boolean;
    
    /**
      * Globally register all Kendo Core wrappers including templating support
      */
    core(): KendoConfigBuilder;
    
    /**
      * Globally register all Kendo Core and Kendo Pro wrappers
      */
    pro(): KendoConfigBuilder;
    
    /**
      * Don't globalize any resources
      * Allows you to import wrappers yourself via <require></require>
      */
    withoutGlobalResources(): KendoConfigBuilder;
    
    /**
      * Registers value converters (wrappers around kendo functions)
      */
    useValueConverters(): KendoConfigBuilder;
    
    /**
      * Adds kendo templating support
      */
    kendoTemplateSupport(): KendoConfigBuilder;
    kendoAutoComplete(): KendoConfigBuilder;
    kendoButton(): KendoConfigBuilder;
    kendoButtonGroup(): KendoConfigBuilder;
    kendoBarcode(): KendoConfigBuilder;
    kendoCalendar(): KendoConfigBuilder;
    kendoChart(): KendoConfigBuilder;
    kendoCombobox(): KendoConfigBuilder;
    kendoContextMenu(): KendoConfigBuilder;
    kendoColorPicker(): KendoConfigBuilder;
    kendoColorPalette(): KendoConfigBuilder;
    kendoDatePicker(): KendoConfigBuilder;
    kendoDateTimePicker(): KendoConfigBuilder;
    kendoDiagram(): KendoConfigBuilder;
    kendoDraggable(): KendoConfigBuilder;
    kendoDropDownList(): KendoConfigBuilder;
    kendoDropTarget(): KendoConfigBuilder;
    kendoEditor(): KendoConfigBuilder;
    kendoFlatColorPicker(): KendoConfigBuilder;
    kendoGantt(): KendoConfigBuilder;
    kendoGrid(): KendoConfigBuilder;
    kendoLinearGauge(): KendoConfigBuilder;
    kendoListView(): KendoConfigBuilder;
    kendoNotification(): KendoConfigBuilder;
    kendoMap(): KendoConfigBuilder;
    kendoMenu(): KendoConfigBuilder;
    kendoMaskedTextBox(): KendoConfigBuilder;
    kendoMultiselect(): KendoConfigBuilder;
    kendoNumericTextBox(): KendoConfigBuilder;
    kendoPanelBar(): KendoConfigBuilder;
    kendoPivotGrid(): KendoConfigBuilder;
    kendoProgressBar(): KendoConfigBuilder;
    kendoQRCode(): KendoConfigBuilder;
    kendoRadialGauge(): KendoConfigBuilder;
    kendoResponsivePanel(): KendoConfigBuilder;
    kendoScrollView(): KendoConfigBuilder;
    kendoScheduler(): KendoConfigBuilder;
    kendoSlider(): KendoConfigBuilder;
    kendoSortable(): KendoConfigBuilder;
    kendoSpreadsheet(): KendoConfigBuilder;
    kendoSplitter(): KendoConfigBuilder;
    kendoSlider(): KendoConfigBuilder;
    kendoSwitch(): KendoConfigBuilder;
    kendoTabStrip(): KendoConfigBuilder;
    kendoTreeList(): KendoConfigBuilder;
    kendoToolbar(): KendoConfigBuilder;
    kendoTreeView(): KendoConfigBuilder;
    kendoTimePicker(): KendoConfigBuilder;
    kendoToolbar(): KendoConfigBuilder;
    kendoTooltip(): KendoConfigBuilder;
    kendoRangeSlider(): KendoConfigBuilder;
    kendoUpload(): KendoConfigBuilder;
    kendoValidator(): KendoConfigBuilder;
    kendoWindow(): KendoConfigBuilder;
  }
  export function configure(aurelia: any, configCallback: any): any;
  export class AutoComplete {
    kOptions: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Barcode {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Button {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class ButtonGroup {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Calendar {
    kOptions: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class ColorPalette {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Chart {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Sparkline {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Stock {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class TreeMap {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class ColorPicker {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class ComboBox {
    kOptions: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export let bindables: any;
  export const constants: any;
  
  /***
  * Available properties (merged together from several locations) are stored here per controlName
  * so that this isn't done for each created wrapper instance
  */
  export class ControlProperties {
    cache: any;
    constructor(util: Util);
    
    /**
      * Merges together available properties for a specific control
      * and stores this in a cache so that this is done only once per control
      * @param controlName the name of the kendo control (kendoGrid, kendoButton)
      * @param extraProperties allows you to provide an extra list of available properties
      */
    getProperties(controlName: string, extraProperties?: any): string[];
    
    /**
      * returns a list of properties of a Kendo control that has been pre-generated (into bindables.js)
      * @param controlName the name of the kendo control (kendoGrid, kendoButton)
      */
    getGeneratedProperties(controlName: string): any;
    
    /*
      * returns the intrinsic list of properties of a kendo control
      * returns an empty array if the control is not loaded
      * @param controlName the name of the kendo control (kendoGrid, kendoButton)
      */
    getWidgetProperties(controlName: string): string[];
    
    /*
      * filters list of properties of a control by template property
      * @param controlName the name of the kendo control (kendoGrid, kendoButton)
      */
    getTemplateProperties(controlName: string): string[];
  }
  
  /**
  * Creates a BindableProperty for every option defined in a Kendo control
  * in the option property of a Kendo control
  * @param controlName The Kendo control of which the options should be converted into bindable properties
  */
  export function generateBindables(controlName: string, extraProperties?: any): any;
  
  /***
  * Converts an object with bindable properties (with k- convention)
  * into an object that can be passed to a Kendo control
  */
  export class OptionsBuilder {
    constructor(controlProperties: ControlProperties, util: Util);
    
    /**
      * converts properties of view-model (with k- convention) to an object
      */
    getOptions(viewModel: any, className: any): any;
  }
  
  /**
  * An adaptor which uses Aurelia's enhance capability to
  * compile any template Kendo wants to have compiled
  */
  export class TemplateCompiler {
    
    /**
      * We don't need to initialize the TemplateCompiler every time a Kendo controls
      * is initialized
      */
    isInitialized: any;
    constructor(templatingEngine: any, util: any);
    
    /**
      * Initialize the template compiler and
      * patch the angular property to retrieve compilation requests
      * from Kendo controls
      * @param $parent The overrideContext to use when a template gets compiled
      */
    initialize(): any;
    
    /**
      * Gets called by Kendo, and filters out compile and cleanup events,
      * then calls the compile or cleanup function with the needed arguments
      * @param _event Events like 'compile' or 'cleanup'
      * @param _args optional array of dataitems
      */
    handleTemplateEvents(widget: any, _event: string, _args?: any): any;
    
    /**
      * loops through each element, and find the matching dataitem
      * and calls enhanceView(element, dataItem) for each element there is
      * @param elements an array of Elements or a jQuery selector
      * @param data optionally an array of dataitems
      */
    compile($parent: any, elements: any, data: any, viewResources: any): any;
    
    /**
      * uses the enhance function of Aurelia's TemplatingEngine
      * to "compile" existing DOM elements
      * @param element The Element to compile
      * @param ctx The dataitem (context) to compile the Element with
      */
    enhanceView($parent: any, element: any, ctx: any, viewResources: any): any;
    
    //  attach it to the DOM
    /**
      * loops through each element kendo asks us to clean up
      * calls cleanupView() for each element
      * @param element An array of elements
      */
    cleanup(elements: any): any;
    
    /**
      * cleans up the view kendo has asked us to clean up
      */
    cleanupView(element: any): any;
  }
  export class TemplateGatherer {
    controlProperties: ControlProperties;
    constructor(controlProperties: ControlProperties, util: Util);
    
    /***
      * parses array of ak-template view-models (@children)
      * <ak-template for='test'>
      * this function sets the property 'test' on the viewmodel to the template
      * @param target the viewModel with template properties
      * @param kendoGrid or GridColumn, properties are retrieved from bindables.js
      * @param templates array of ak-template view-models
      */
    useTemplates(target: any, controlName: any, templates: any): any;
  }
  export class Template {
    template: any;
    for: any;
    kendoTemplate: any;
    constructor(targetInstruction: any);
  }
  
  /**
  * Collection of useful functions used in multiple parts of the plugin
  */
  export class Util {
    
    /**
      * prepends hyphen and lowercases the input char
      * @param char the char to add an hyphen in front for
      */
    addHyphenAndLower(char: string): string;
    
    /**
      * prepends prefix and unhyphenates the resulting string
      * test -> kTest
      */
    getBindablePropertyName(propertyName: string): string;
    
    /**
      * removes prefix and unhyphenates the resulting string
      * kTest -> test
      */
    getKendoPropertyName(propertyName: string): string;
    
    /**
      * converts all attributes found on an element to matching Kendo events
      * returns a list of these Kendo events
      */
    getEventsFromAttributes(element: Element): string[];
    
    /**
      * Implicitly setting options to "undefined" for a kendo control can break things.
      * this function prunes the supplied options object and removes values that
      * aren't set to something explicit (i.e. not null)
      * @param options the options object to prune the properties of
      */
    pruneOptions(options: any): any;
    hasValue(prop: any): any;
    
    /**
      * Fire DOM event on an element
      * @param element The Element which the DOM event will be fired on
      * @param name The Event's name
      * @param data Addition data to attach to an event
      */
    fireEvent(element: Element, name: string, data?: any): any;
    
    /**
      * Fire DOM event on an element with the k-on prefix
      * @param element The Element which the DOM event will be fired on
      * @param name The Event's name, without k-on prefix
      * @param data Addition data to attach to an event
      */
    fireKendoEvent(element: Element, name: string, data?: any): any;
    
    /**
      * detection of template properties
      */
    isTemplateProperty(propertyName: string): any;
    
    /**
      * detection of objects
      */
    isObject(obj: any): any;
  }
  
  /**
  * Abstraction of commonly used code across wrappers
  */
  export class WidgetBase {
    
    /**
      * The element of the custom element, or the element on which a custom attribute
      * is placed. DOM events will be raised on this element
      */
    element: Element;
    
    /**
      * Used to prevent race conditions when events are raised before
      * all bindings have been updated.
      */
    taskQueue: TaskQueue;
    
    /**
      * The element on which a Kendo widget is initialized
      * This is the "element" by default
      */
    target: Element;
    
    /**
      * The Kendo control's name, such as kendoGrid or kendoButton
      */
    controlName: string;
    
    /**
      * The parent context (used for template compilation)
      */
    $parent: any;
    
    /**
      * The widgets parent viewmodel (this is the object instance the user will bind to)
      */
    viewModel: any;
    
    /**
      * The constructor of a Kendo control
      */
    ctor: any;
    constructor(taskQueue: any, templateCompiler: any, optionsBuilder: any, util: any, templateGatherer: any);
    control(controlName: any): any;
    linkViewModel(viewModel: any): any;
    useViewResources(resources: any): any;
    
    /**
      * adds two-way value binding
      * @param valueBindingProperty the property name of the kendo control (value/checked)
      * @param valueFunction the function on the kendo control that gets the value of the above property
      */
    useValueBinding(valueBindingProperty?: any, valueFunction?: any): any;
    
    /**
      * collects all options objects
      * calls all hooks
      * then initialized the Kendo control as "widget"
      */
    createWidget(options: any): any;
    
    /**
      * convert attributes into a list of events a user wants to subscribe to.
      * These events are then subscribed to, which when called
      * calls the fireKendoEvent function to raise a DOM event
      */
    getEventOptions(element: any): any;
    handlePropertyChanged(widget: any, property: any, newValue: any, oldValue: any): any;
    useTemplates(target: any, controlName: any, templates: any): any;
    
    /**
      * destroys the widget
      */
    destroy(widget: any): any;
  }
  export class ContextMenu {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class DatePicker {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class DateTimePicker {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Diagram {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Draggabke {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    beforeInitialize(options: any): any;
    detached(): any;
  }
  export class DropTargetArea {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class DropTarget {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class DropDownList {
    kOptions: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Editor {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class FlatColorPicker {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class GanttCol {
  }
  export class Gantt {
    columns: any;
    templates: any;
    kOptions: any;
    constructor(element: any, widgetBase: any, viewResources: any, optionsBuilder: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class LinearGauge {
    kOptions: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class RadialGauge {
    kOptions: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Col {
    templates: any;
    constructor(templateGatherer: any);
    bind(): any;
  }
  export class Grid {
    columns: any;
    kOptions: any;
    constructor(element: any, widgetBase: any, viewResources: any, optionsBuilder: any);
    bind(ctx: any): any;
    
    //  initialization in bind() is giving issues in some scenarios
    //  so, attached() is used for this control
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class ListView {
    kOptions: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Map {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class MaskedTextBox {
    kDisableDates: any;
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Menu {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Multiselect {
    kOptions: any;
    kNoValueBinding: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class NotificationTemplate {
    template: any;
    type: any;
    constructor(targetInstruction: any);
  }
  export class Notification {
    kOptions: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    beforeInitialize(options: any): any;
    detached(): any;
  }
  export class NumericTextBox {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class PanelBar {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class PDF {
  }
  export class PivotConfigurator {
    kOptions: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class PivotGrid {
    kOptions: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class ProgressBar {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class QRCode {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class RangeSlider {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class ResponsivePanel {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Scheduler {
    kOptions: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Scrollview {
    kOptions: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Slider {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Sortable {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Splitter {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Spreadsheet {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Switch {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class TabStrip {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class TimePicker {
    kDisableDates: any;
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class ToolbarItemButton {
    constructor(optionsBuilder: any);
    getOptions(): any;
  }
  export class ToolbarItem {
    templates: any;
    buttons: any;
    constructor(templateGatherer: any, optionsBuilder: any);
    getOptions(): any;
  }
  export class Toolbar {
    kOptions: any;
    toolbarItems: any;
    constructor(element: any, widgetBase: any, optionsBuilder: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Tooltip {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class TreeCol {
    templates: any;
    constructor(templateGatherer: any);
    bind(): any;
  }
  export class TreeList {
    columns: any;
    kOptions: any;
    constructor(element: any, widgetBase: any, viewResources: any, optionsBuilder: any);
    bind(ctx: any): any;
    
    //  initialization in bind() is giving issues in some scenarios
    //  so, attached() is used for this control
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class TreeView {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Upload {
    kOptions: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Validator {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class kendoToStringValueConverter {
    toView(value: any, format: any, language: any): any;
  }
  export class kendoParseDateValueConverter {
    toView(value: any, format: any, language: any): any;
  }
  export class kendoParseIntValueConverter {
    toView(value: any, language: any): any;
  }
  export class kendoParseFloatValueConverter {
    toView(value: any, language: any): any;
  }
  export class kendoParseColorValueConverter {
    toView(value: any): any;
  }
  export class kendoStringifyValueConverter {
    toView(obj: any): any;
  }
  export class kendoFormatValueConverter {
    toView(value: any, ...params: any[]): any;
  }
  export class Window {
    kOptions: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
}