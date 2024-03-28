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
        // primary-color={"#ff9e1b"}
        nav-bg-color={"#ffffff"}
        id="thedoc"
        allow-search={false}
        render-style={"view"}
        allow-try={true}
        show-header={false}
        allow-authentication={true}
        // regular-font="Roboto"
        use-path-in-nav-bar={true}
        // style={{ height: "80vh", width: "100%" }}
        // mono-font="monospace"
        theme={useColorMode().colorMode}
        spec-url={useBaseUrl("/openapi/" + api + ".yaml")}
        // theme={"light"}
        // spec-url={useBaseUrl("/openapi/schulconnex.yaml")}
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
        //style={{ width: "700px", height: "40px", fontsize: "18px" }}
        spec-url={useBaseUrl("/openapi/" + api + ".yaml")}
        include-api-list={true}
        include-example={true}
      ></rapi-pdf>
    );
  }
  return <div />;
}