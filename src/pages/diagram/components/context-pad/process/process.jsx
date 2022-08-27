export default class Process {
  constructor(config, contextPad, create, elementFactory, injector, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    if (config.autoPlace !== false) {
      this.autoPlace = injector.get("autoPlace", false);
    }

    contextPad.registerProvider(this);
  }

  getContextPadEntries(element) {
    const { autoPlace, create, elementFactory, translate } = this;

    function appendProcess(event, element) {
      if (autoPlace) {
        const shape = elementFactory.createShape({ type: "bpmn:CallActivity" });

        autoPlace.append(element, shape);
      } else {
        appendProcessStart(event);
      }
    }

    function appendProcessStart(event) {
      const shape = elementFactory.createShape({ type: "bpmn:CallActivity" });

      create.start(event, shape, element);
    }

    return {
      "append.process": {
        group: "model",
        className: "bpmn-icon-subprocess-collapsed",
        title: translate("Append Process"),
        action: {
          click: appendProcess,
          dragstart: appendProcessStart,
        },
      },
    };
  }
}

Process.$inject = [
  "config",
  "contextPad",
  "create",
  "elementFactory",
  "injector",
  "translate",
];
