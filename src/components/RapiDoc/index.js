import React from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

export function Rapidoc(props) {
  const { api } = props;
  if (ExecutionEnvironment.canUseDOM) {
    /// Make sure we only import the rapidoc web component in case we are on the client side
    import("rapidoc");
    const { colorMode, setColorMode } = useColorMode();
    return (
      <rapi-doc
        header-color={"#004876"}
        nav-text-color={"#004876"}
        nav-bg-color={"#ffffff"}
        id="thedoc"
        allow-search={false}
        render-style={"view"}
        allow-try={true}
        show-header={false}
        allow-authentication={true}
        use-path-in-nav-bar={true}
        theme={useColorMode().colorMode}
        spec-url={useBaseUrl("/openapi/" + api + ".yaml")}
        layout={"column"}
        show-components={true}
        schema-description-expanded={true}
      ></rapi-doc>
    );
  }
  return <div />;
}

export function RapiPdf(props) {
  const { api } = props;
  if (ExecutionEnvironment.canUseDOM) {
    /// Make sure we only import the rapidoc web component in case we are on the client side
    import("rapipdf/dist/rapipdf-min.js");
    const { colorMode, setColorMode } = useColorMode();
    return (
      <rapi-pdf
        spec-url={useBaseUrl("/openapi/" + api + ".yaml")}
        include-api-list={true}
        include-example={true}
      ></rapi-pdf>
    );
  }
  return <div />;
}
