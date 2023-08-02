import { toHTML } from "@portabletext/to-html";
import myPortableComponents from "./customcomponents";

export default function customPortableText(element, portableTextBlocks) {
  const htmlM = toHTML(portableTextBlocks, {
    components: myPortableComponents,
  });
  element.innerHTML = htmlM;
}
