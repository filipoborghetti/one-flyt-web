import { c as createComponent } from './astro-component_CXb8KlaZ.mjs';
import 'piccolore';
import { p as maybeRenderHead, q as renderComponent, u as renderTemplate, j as addAttribute } from './entrypoint_CeS0V7Kk.mjs';
import { r as renderScript, $ as $$Layout, a as $$Navbar } from './Layout_CbHHOoFR.mjs';
import { $ as $$Image } from './_astro_assets_CUyWygAZ.mjs';
import 'clsx';
import { s as sanityClient, $ as $$Footer } from './Footer_DFYbqndI.mjs';

const heroImg = new Proxy({"src":"/_astro/background_hero.BpsFg32r.jpg","width":2560,"height":1580,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/equipo/Desktop/one-flyt-web/src/assets/images/background_hero.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero-bg" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Image", $$Image, { "src": heroImg, "alt": "", "loading": "eager", "data-astro-cid-bbe6dxrz": true })} </div> <div class="hero-content" data-astro-cid-bbe6dxrz> <div class="hero-top" data-astro-cid-bbe6dxrz> <h1 class="hero-title fade-in" data-astro-cid-bbe6dxrz>ONE FLYT</h1> <div class="hero-socials fade-in" data-astro-cid-bbe6dxrz> <a href="https://open.spotify.com/intl-es/artist/2DB4gqzMQy1kvcHWgrNUgp" target="_blank" aria-label="Spotify" data-astro-cid-bbe6dxrz> <img src="/icons/spotify.svg" alt="Spotify" data-astro-cid-bbe6dxrz> </a> <a href="https://www.instagram.com/oneflyt1" target="_blank" aria-label="Instagram" data-astro-cid-bbe6dxrz> <img src="/icons/instagram.svg" alt="Instagram" data-astro-cid-bbe6dxrz> </a> <a href="https://tiktok.com/@oneflyt149" target="_blank" aria-label="TikTok" data-astro-cid-bbe6dxrz> <img src="/icons/tiktok.svg" alt="TikTok" data-astro-cid-bbe6dxrz> </a> </div> </div> <nav class="hero-nav fade-in" data-astro-cid-bbe6dxrz> <a href="#musica" data-astro-cid-bbe6dxrz>Música</a> <a href="#biografia" data-astro-cid-bbe6dxrz>Biografía</a> <a href="#fechas" data-astro-cid-bbe6dxrz>Fechas</a> <a href="https://www.submithub.com/link/redes" target="_blank" data-astro-cid-bbe6dxrz>Redes</a> </nav> </div> </section>`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/components/Hero.astro", void 0);

const $$Music = createComponent(async ($$result, $$props, $$slots) => {
  const releases = await sanityClient.fetch(`
  *[_type == "lanzamiento"] | order(orden asc) {
    titulo,
    tipo,
    "coverUrl": cover.asset->url,
    url
  }
`);
  return renderTemplate`${maybeRenderHead()}<section id="musica" class="music" data-astro-cid-q7a5pyro> <h2 class="music-title fade-in" data-astro-cid-q7a5pyro>NUEVA MÚSICA</h2> <div class="music-list" data-astro-cid-q7a5pyro> ${releases.map((release, index) => renderTemplate`<div class="music-item fade-in"${addAttribute(`transition-delay: ${index * 0.2}s`, "style")} data-astro-cid-q7a5pyro> <img${addAttribute(release.coverUrl, "src")}${addAttribute(release.titulo, "alt")} class="music-cover" data-astro-cid-q7a5pyro> <div class="music-info" data-astro-cid-q7a5pyro> <div class="music-name" data-astro-cid-q7a5pyro> <span class="music-track" data-astro-cid-q7a5pyro>${release.titulo}</span> <span${addAttribute(`music-badge ${release.tipo === "Single" ? "badge-single" : "badge-album"}`, "class")} data-astro-cid-q7a5pyro> ${release.tipo} </span> </div> <a${addAttribute(release.url, "href")} target="_blank" class="music-btn" data-astro-cid-q7a5pyro> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-q7a5pyro> <path d="M15 3h6v6" data-astro-cid-q7a5pyro></path> <path d="M10 14 21 3" data-astro-cid-q7a5pyro></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-q7a5pyro></path> </svg>
escuchar ahora
</a> </div> </div>`)} </div> </section>`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/components/Music.astro", void 0);

const oneflytPhoto = new Proxy({"src":"/_astro/oneflyt.15ZBsTIc.jpg","width":790,"height":1238,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/equipo/Desktop/one-flyt-web/src/assets/images/oneflyt.jpg";
							}
							
							return target[name];
						}
					});

const $$Bio = createComponent(async ($$result, $$props, $$slots) => {
  const data = await sanityClient.fetch(`*[_type == "biografia"][0]`);
  const paragraphs = data?.parrafos ?? [];
  return renderTemplate`${maybeRenderHead()}<section id="biografia" class="bio" data-astro-cid-2jiluk5e> <div class="bio-bg" data-astro-cid-2jiluk5e></div> <div class="bio-content" data-astro-cid-2jiluk5e> <h2 class="bio-title fade-in" data-astro-cid-2jiluk5e>BIOGRAFÍA</h2> <div class="bio-grid fade-in" data-astro-cid-2jiluk5e> <div data-astro-cid-2jiluk5e> ${renderComponent($$result, "Image", $$Image, { "src": oneflytPhoto, "alt": "One Flyt", "class": "bio-photo", "data-astro-cid-2jiluk5e": true })} </div> <div class="bio-text" data-astro-cid-2jiluk5e> ${paragraphs.map((p) => renderTemplate`<p data-astro-cid-2jiluk5e>${p}</p>`)} </div> </div> </div> </section>`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/components/Bio.astro", void 0);

const $$Tour = createComponent(async ($$result, $$props, $$slots) => {
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
      day: "numeric",
      month: "long"
    });
  }
  return renderTemplate`${maybeRenderHead()}<section id="fechas" class="tour" data-astro-cid-e4vi5n5w> <div class="tour-bg" data-astro-cid-e4vi5n5w></div> <div class="tour-content" data-astro-cid-e4vi5n5w> <h2 class="tour-title fade-in" data-astro-cid-e4vi5n5w>FECHAS</h2> <div class="carousel-wrapper fade-in" data-astro-cid-e4vi5n5w> <button class="carousel-btn prev" aria-label="Anterior" data-astro-cid-e4vi5n5w> <svg width="30" height="30" viewBox="0 0 24 24" fill="none" data-astro-cid-e4vi5n5w> <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-e4vi5n5w></path> </svg> </button> <div class="swiper tour-swiper" data-astro-cid-e4vi5n5w> <div class="swiper-wrapper" data-astro-cid-e4vi5n5w> ${dates.map((date) => renderTemplate`<div class="swiper-slide" data-astro-cid-e4vi5n5w> <div class="fecha-card" data-astro-cid-e4vi5n5w> <div class="fecha-flyer" data-astro-cid-e4vi5n5w> <img${addAttribute(date.flyerUrl, "src")}${addAttribute(`One Flyt en ${date.ciudad}`, "alt")}${addAttribute(1e3, "width")}${addAttribute(1e3, "height")} data-astro-cid-e4vi5n5w> </div> <div class="fecha-info" data-astro-cid-e4vi5n5w> <h2 class="fecha-ciudad" data-astro-cid-e4vi5n5w>${date.ciudad}</h2> <p class="fecha-venue" data-astro-cid-e4vi5n5w>${date.venue}</p> <p class="fecha-date" data-astro-cid-e4vi5n5w>${formatDate(date.fecha)}</p> <a${addAttribute(date.url, "href")} target="_blank" rel="noopener noreferrer" class="fecha-btn" data-astro-cid-e4vi5n5w> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-e4vi5n5w> <path d="M15 3h6v6" data-astro-cid-e4vi5n5w></path> <path d="M10 14 21 3" data-astro-cid-e4vi5n5w></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-e4vi5n5w></path> </svg>
Comprar entradas
</a> </div> </div> </div>`)} </div> </div> <button class="carousel-btn next" aria-label="Siguiente" data-astro-cid-e4vi5n5w> <svg width="30" height="30" viewBox="0 0 24 24" fill="none" data-astro-cid-e4vi5n5w> <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-e4vi5n5w></path> </svg> </button> </div> <div class="tour-footer fade-in" data-astro-cid-e4vi5n5w> <a href="/fechas" class="ver-todo-btn" data-astro-cid-e4vi5n5w>Ver todas las fechas</a> </div> </div> </section> ${renderScript($$result, "C:/Users/equipo/Desktop/one-flyt-web/src/components/Tour.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/components/Tour.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "One Flyt" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Music", $$Music, {})} ${renderComponent($$result2, "Bio", $$Bio, {})} ${renderComponent($$result2, "Tour", $$Tour, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/equipo/Desktop/one-flyt-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
