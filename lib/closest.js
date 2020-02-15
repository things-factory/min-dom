import matches from "./matches";

export default function closest(element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode;

  while (
    parent &&
    parent.nodeType !== document.DOCUMENT_NODE &&
    parent.nodeType !== document.DOCUMENT_FRAGMENT_NODE
  ) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode;
  }
}
