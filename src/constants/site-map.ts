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
    url: "/blog",
    title: "Blog",

  },
  CLASS: {
    url: "/class",
    title: "Class",
  },
  DETAIL_CLASS: {
    url: "/detail-class",
    title: "Detail Class",
  },
  ADMIN: {
    url: "/admin",
    title: "Admin",
    roles: ["admin"],
  },
};

