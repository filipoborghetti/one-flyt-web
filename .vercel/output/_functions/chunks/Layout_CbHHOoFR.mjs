import { c as createComponent } from './astro-component_CXb8KlaZ.mjs';
import 'piccolore';
import { k as createRenderInstruction, q as renderComponent, u as renderTemplate, p as maybeRenderHead, s as renderHead, t as renderSlot } from './entrypoint_CeS0V7Kk.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/equipo/Desktop/one-flyt-web/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/equipo/Desktop/one-flyt-web/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="navbar" style="display: none;" data-astro-cid-5blmo7yk> <a href="/" class="navbar-logo" data-astro-cid-5blmo7yk>One Flyt</a> <nav class="navbar-links" data-astro-cid-5blmo7yk> <a href="/#musica" data-astro-cid-5blmo7yk>Música</a> <a href="/#biografia" data-astro-cid-5blmo7yk>Biografía</a> <a href="/#fechas" data-astro-cid-5blmo7yk>Fechas</a> <a href="https://www.submithub.com/link/redes" target="_blank" data-astro-cid-5blmo7yk>Redes</a> </nav> </header> ${renderScript($$result, "C:/Users/equipo/Desktop/one-flyt-web/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/components/Navbar.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, alwaysVisible = false } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><link rel="preload" href="/fonts/UncialAntiqua-Regular.ttf" as="font" type="font/ttf" crossorigin><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title><meta name="description" content="Web oficial de One Flyt — Es el uno, wacho."><meta name="keywords" content="One Flyt, trap melódico, reggaetón alternativo, música independiente, Argentina, under argentino"><meta name="author" content="One Flyt"><meta name="robots" content="index, follow"><meta property="og:type" content="website"><meta property="og:url" content="https://oneflyt.vercel.app/"><meta property="og:title" content="One Flyt - Web Oficial"><meta property="og:description" content="Es el uno, wacho."><meta property="og:image" content="https://oneflyt.vercel.app/images/og_image.jpg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="One Flyt — Web Oficial"><meta name="twitter:description" content="Es el uno, wacho."><meta name="twitter:image" content="https://oneflyt.vercel.app/images/og_image.jpg"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;600;700&family=Gabarito:wght@400;700&family=Fjalla+One&family=Inter:wght@400;500&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "SpeedInsights", $$Index, {})} ${renderComponent($$result, "Navbar", $$Navbar, { "alwaysVisible": alwaysVisible })} ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "C:/Users/equipo/Desktop/one-flyt-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Navbar as a, renderScript as r };
