import { NodeRenderer, toHTML } from "@portabletext/to-html";
import htm from "htm";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

const myPortableComponents = {
  block: {
    heading: ({ children, value, ...rest }) => {
      if (rest.node.level == 1) {
        return html`${`<h1 style="font-size: 54px">${children}</h1>`}`;
      }
      return html`${`<h2 style="font-size: 54px">${children}</h2>`}`;
    },
  },
  list: ({ children }) => {
    return html`${`<ul>${children}</ul>`}`;
  },
  listItem: ({ children }) => {
    return html`${`<li style="font-size: 45px">${children}</li>`}`;
  },
};

export default function customPortableText(element, portableTextBlocks) {
  const htmlM = toHTML(portableTextBlocks, {
    components: myPortableComponents,
  });
  element.innerHTML = htmlM;
}
// <a href="www.google.com">link to hire</a>
