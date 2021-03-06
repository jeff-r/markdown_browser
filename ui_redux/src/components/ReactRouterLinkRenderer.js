import { createElement } from "react";
import { Link } from "react-router-dom";
import LinkRenderer from "simple-commonmark-react/dist/renderers/LinkRenderer";

export default class ReactRouterLinkRenderer extends LinkRenderer {
  renderNodeWithProps(props) {
    if (props.href.startsWith("http")) return createElement("a", props, []);
    const url = props.href;
    delete props.href;
    props.to = url;
    return createElement(Link, props, []);
  }
}
