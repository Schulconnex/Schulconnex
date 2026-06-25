import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "generated/openapi/dienste/schulconnex",
    },
    {
      type: "category",
      label: "Organisationen",
      items: [
        {
          type: "doc",
          id: "generated/openapi/dienste/read-organisationen-info",
          label: "Organisationen auflisten",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Personen",
      items: [
        {
          type: "doc",
          id: "generated/openapi/dienste/read-person-info",
          label: "Informationen der angemeldeten Person",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/dienste/read-personen-info",
          label: "Liste bekannter Personenkontexte",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
