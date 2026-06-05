import { createClient } from '@sanity/client';
import { c as createComponent } from './astro-component_CXb8KlaZ.mjs';
import 'piccolore';
import { p as maybeRenderHead, j as addAttribute, u as renderTemplate } from './entrypoint_CeS0V7Kk.mjs';
import 'clsx';

const sanityClient = createClient({
  projectId: "t96hfwcn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01"
});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socials = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/intl-es/artist/2DB4gqzMQy1kvcHWgrNUgp?si=qGatZEy1SvaolXTWvwA1bg",
      icon: "/icons/spotify.svg"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/oneflyt1",
      icon: "/icons/instagram.svg"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@oneflyt149",
      icon: "/icons/tiktok.svg"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@oneflyt",
      icon: "/icons/youtube.svg"
    },
    {
      name: "Discord",
      url: "https://www.discord.gg/yNPaHuZS8R",
      icon: "/icons/discord.svg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <a href="/" class="footer-logo" data-astro-cid-sz7xmlte>One Flyt</a> <div class="footer-socials" data-astro-cid-sz7xmlte> ${socials.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} target="_blank"${addAttribute(social.name, "aria-label")} class="footer-social-link" data-astro-cid-sz7xmlte> <img${addAttribute(social.icon, "src")}${addAttribute(social.name, "alt")} data-astro-cid-sz7xmlte> </a>`)} </div> <div class="footer-credits" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>© 2026 One Flyt</p> <p data-astro-cid-sz7xmlte>
Diseño y desarrollo por <a href="https://www.instagram.com/filiborghetti" target="_blank" class="footer-author" data-astro-cid-sz7xmlte>Filipo Borghetti</a> </p> </div> </footer>`;
}, "C:/Users/equipo/Desktop/one-flyt-web/src/components/Footer.astro", void 0);

export { $$Footer as $, sanityClient as s };
