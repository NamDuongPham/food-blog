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
  DETAIL: {
    url: "/detail/recipe/:id",
    title: "Detail",
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
    url: "/Blog",
    title: "Blog",

  },
  LIVE: {
    url: "/Live",
    title: "Live",
  },
  DETAILLIVE: {
    url: "/Live/Detail",
    title: "Detail Live",
  },
  CLASS: {
    url: "/class",
    title: "Class",
  },
  DETAIL_CLASS: {
    url: "/detail-class/:classname",
    title: "Detail Class",
  },

  

  MARKET: {
    url: "/market",
    title: "Market",
  },

  ADMIN: {
    url: "/admin",
    title: "Admin",
    roles: ["admin"],
  },
};

