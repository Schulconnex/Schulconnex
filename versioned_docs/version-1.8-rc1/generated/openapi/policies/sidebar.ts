import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "generated/openapi/policies/schulconnex",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "generated/openapi/policies/read-policies-info",
          label: "Nutzungsrechte im Kontext",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
