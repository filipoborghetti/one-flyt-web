import { c as createComponent } from './astro-component_CXb8KlaZ.mjs';
import 'piccolore';
import { p as maybeRenderHead, u as renderTemplate, j as addAttribute, q as renderComponent } from './entrypoint_CeS0V7Kk.mjs';
import { $ as $$Layout } from './Layout_CbHHOoFR.mjs';
import 'clsx';
import { s as sanityClient, $ as $$Footer } from './Footer_DFYbqndI.mjs';

const $$NavbarStatic = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="navbar-static" data-astro-cid-j3fozgzk> <a href="/" class="navbar-logo" data-astro-cid-j3fozgzk>One Flyt</a> <nav class="navbar-links" data-astro-cid-j3fozgzk> <a href="/#musica" data-astro-cid-j3fozgzk>Música</a> <a href="/#biografia" data-astro-cid-j3fozgzk>Biografía</a> <a href="/#fechas" data-astro-cid-j3fozgzk>Fechas</a> <a href="https://www.submithub.com/link/redes" target="_blank" data-astro-cid-j3fozgzk>Redes</a> </nav> </header>`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/components/NavbarStatic.astro", void 0);

const $$Fechas$1 = createComponent(async ($$result, $$props, $$slots) => {
  const dates = await sanityClient.fetch(`
  *[_type == "fecha"] | order(fecha asc) {
    ciudad,
    venue,
    fecha,
    "flyerUrl": flyer.asset->url,
    url
  }
`);
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  return renderTemplate`${maybeRenderHead()}<section id="fechas" class="fechas" data-astro-cid-f76hwpl6> <h1 class="fechas-title fade-in" data-astro-cid-f76hwpl6>FECHAS</h1> <div class="fechas-grid fade-in" data-astro-cid-f76hwpl6> ${dates.map((date) => renderTemplate`<div class="fecha-card" data-astro-cid-f76hwpl6> <div class="fecha-flyer" data-astro-cid-f76hwpl6> <img${addAttribute(date.flyerUrl, "src")}${addAttribute(`One Flyt en ${date.ciudad}`, "alt")}${addAttribute(1e3, "width")}${addAttribute(1e3, "height")} data-astro-cid-f76hwpl6> </div> <div class="fecha-info" data-astro-cid-f76hwpl6> <h2 class="fecha-ciudad" data-astro-cid-f76hwpl6>${date.ciudad}</h2> <p class="fecha-venue" data-astro-cid-f76hwpl6>${date.venue}</p> <p class="fecha-date" data-astro-cid-f76hwpl6>${formatDate(date.fecha)}</p> <a${addAttribute(date.url, "href")} target="_blank" rel="noopener noreferrer" class="fecha-btn" data-astro-cid-f76hwpl6> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-f76hwpl6> <path d="M15 3h6v6" data-astro-cid-f76hwpl6></path> <path d="M10 14 21 3" data-astro-cid-f76hwpl6></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-f76hwpl6></path> </svg>
Comprar entradas
</a> </div> </div>`)} </div> </section>`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/components/Fechas.astro", void 0);

const $$Fechas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fechas — One Flyt" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarStatic", $$NavbarStatic, {})} ${renderComponent($$result2, "FechasComponent", $$Fechas$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/pages/fechas.astro", void 0);

const $$file = "C:/Users/equipo/Desktop/one-flyt-web/src/pages/fechas.astro";
const $$url = "/fechas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Fechas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
