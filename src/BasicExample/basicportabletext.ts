import { toHTML } from "@portabletext/to-html";
import htm from "htm";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

export default function BasicPortableText(element, portableTextBlocks) {
  const htmlM = toHTML(portableTextBlocks);
  console.log(htmlM);

  element.innerHTML = htmlM;
}
// <a href="www.google.com">link to hire</a>
