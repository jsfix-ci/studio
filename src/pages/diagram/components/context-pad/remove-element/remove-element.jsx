export default class RemoveElement {
  constructor(contextPad, modeling, rules, translate) {
    this.modeling = modeling;
    this.rules = rules;
    this.translate = translate;

    contextPad.registerProvider(this);
  }

  getContextPadEntries(element) {
    const { modeling, rules, translate } = this;

    let deleteAllowed = rules.allowed("elements.delete", {
      elements: [element],
    });

    if (Array.isArray(deleteAllowed)) {
      deleteAllowed = deleteAllowed[0] === element;
    }

    function removeElement(event) {
      modeling.removeElements([element]);
    }

    if (deleteAllowed) {
      return {
        "delete.element": {
          group: "actions",
          className: "bpmn-icon-trash",
          title: translate("Remove"),
          action: {
            click: removeElement,
          },
        },
      };
    }

    return {};
  }
}

RemoveElement.$inject = ["contextPad", "modeling", "rules", "translate"];
