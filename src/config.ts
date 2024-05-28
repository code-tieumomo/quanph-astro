import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://quanph.vercel.app/", // replace this with your deployed domain
  author: "quanph",
  desc: "A minimal, responsive and SEO-friendly blog.",
  title: "Doc",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "vi", // html lang code. Set this empty and default will be "en"
  langTag: ["vi-VN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/code-tieumomo",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:code.tieumomo@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  }
];
