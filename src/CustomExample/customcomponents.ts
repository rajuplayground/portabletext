import htm from "htm";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

const myPortableComponents = {
  block: {
    heading: ({ children, value, ...rest }) => {
      if (rest.node.level == 1) {
        return html`${`<h1 class='heading1'>${children}</h1>`}`;
      }
      return html`${`<h2 class='heading2'>${children}</h2>`}`;
    },
  },
  list: ({ children }) => {
    return html`${`<ul>${children}</ul>`}`;
  },
  listItem: ({ children, value }) => {
    switch (value.level) {
      case 1:
        return html`${`<li style="color: red">${children}</li>`}`;
      case 2:
        return html`${`<li style="color: blue">${children}</li>`}`;
      case 3:
        return html`${`<li style="color: green">${children}</li>`}`;
      default:
        return html`${`<li style="color: yellow">${children}</li>`}`;
    }
  },
};

export default myPortableComponents;
