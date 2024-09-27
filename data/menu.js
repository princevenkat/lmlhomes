export const menu = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Projects",
    slug: "/projects",
    hasDropDown: false,
  },
  {
    id: "about",
    title: "About",
    slug: "#",
    hasDropDown: true,
    dropdown: [
      {
        title: "About LML Homes",
        slug: "/about",
      },
      {
        title: "Management",
        slug: "/about/management",
      },
      {
        title: "Awards & Recognition",
        slug: "/about/awards",
      },
    ],
  },
  {
    id: "partners",
    title: "Partners",
    slug: "#",
    hasDropDown: true,
    dropdown: [
      {
        title: "Partners",
        slug: "/partners",
      },
      {
        title: "Channel Partners",
        slug: "/partners/channel-partners",
      },
      {
        title: "Joint Ventures",
        slug: "/partners/joint-ventures",
      },
    ],
  },
  {
    title: "Blogs",
    slug: "/blogs",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
  {
    title: "Privacy Policy",
    slug: "/privacy-policy",
  },
];
