interface Route {
  url: string;
  title: string;
  roles?: string[];
}

interface SiteMap {
  [key: string]: Route;
}

export const SITE_MAP: SiteMap = {
  HOME: {
    url: "/",
    title: "Home",
  },
  ABOUT: {
    url: "/about",
    title: "About",
  },
  CART: {
    url: "/cart",
    title: "Cart",
  },
  BLOG: {
    url: "/blog",
    title: "Blog",

  },
  CLASS: {
    url: "/class",
    title: "Class",
  },
  ADMIN: {
    url: "/admin",
    title: "Admin",
    roles: ["admin"],
  },
};

