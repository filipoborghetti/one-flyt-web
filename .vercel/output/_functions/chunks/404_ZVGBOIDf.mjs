import { c as createComponent } from './astro-component_CXb8KlaZ.mjs';
import 'piccolore';
import { q as renderComponent, u as renderTemplate, p as maybeRenderHead } from './entrypoint_CeS0V7Kk.mjs';
import { $ as $$Layout } from './Layout_CbHHOoFR.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 — One Flyt", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="not-found" data-astro-cid-zetdm5md> <h1 class="not-found-code" data-astro-cid-zetdm5md>404</h1> <p class="not-found-message" data-astro-cid-zetdm5md>Esta página no existe.</p> <a href="/" class="not-found-btn" data-astro-cid-zetdm5md>Volver al inicio</a> </div> ` })}`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/pages/404.astro", void 0);

const $$file = "C:/Users/equipo/Desktop/one-flyt-web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
