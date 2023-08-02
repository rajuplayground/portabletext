import "./style.css";
import BasicPortableText from "./BasicExample/basicportabletext.ts";
import sampleBasictext from "./BasicExample/sampletext.ts";
import customPortableText from "./CustomExample/customportabletext.ts";
import customsampletext from "./CustomExample/customsampletext.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
      <div id="portabletext"></div>
    </div>
  </div>
`;

customPortableText(
  document.querySelector<HTMLButtonElement>("#portabletext")!,
  customsampletext
);
