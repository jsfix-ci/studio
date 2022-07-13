import { isAny } from "bpmn-js/lib/features/modeling/util/ModelingUtil";
// import {
//   setPropertiesDrawerItems,
//   toggleDrawer,
// } from "pages/diagram/features/bpmnSlice";
// import { bpmnService } from "pages/diagram/services/bpmnService";

export default class Properties {
  constructor(config, contextPad, create, elementFactory, injector, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    contextPad.registerProvider(this);
  }

  getContextPadEntries(element) {
    async function handleGetProperties(event, element) {
      alert("TODO: Abrir lista de propriedades");
      // try {
      //   store.dispatch(toggleDrawer(true));
      //   const string = element.type.split(":")[1];
      //   const { data } = await store.dispatch(
      //     bpmnService.endpoints.getProperties.initiate(string.toLowerCase())
      //   );
      //   store.dispatch(setPropertiesDrawerItems(data?.items));
      // } catch (e) {
      //   console.error(
      //     `PropertiesControlPad/handleGetProperties => ${e.error}: ${e.message}`
      //   );
      // }
    }

    if (
      isAny(element.businessObject, [
        "bpmn:EndEvent",
        "bpmn:ExclusiveGateway",
        "bpmn:CallActivity",
        "bpmn:ServiceTask",
        "bpmn:SubProcess",
        "bpmn:IntermediateThrowEvent",
        "bpmn:UserTask",
        "",
      ])
    ) {
      return {
        "handle.get-properties": {
          group: "model",
          className: "bpmn-icon-sequential-mi-marker",
          title: this.translate("Get Properties"),
          action: {
            click: handleGetProperties,
          },
        },
      };
    }
  }
}

Properties.$inject = [
  "config",
  "contextPad",
  "create",
  "elementFactory",
  "injector",
  "translate",
];
