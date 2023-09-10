import { Route, Routes } from "react-router-dom";
import { SITE_MAP } from "../constants/site-map";
import AdminLayout from "../layouts/admin.layout";
import DefaultLayout from "../layouts/default.layout";
import HomePage from "../pages/Home/HomePage";
import BlogPage from "../pages/Blog/BlogPage";

import DetailPage from "../pages/Detail/DetailPage";
import ClassPage from "../pages/Class/ClassPage";
import Detail from "../modules/Class/Detail/Detail";

export const Router = () => {
  return (
    <Routes>
      <Route path={SITE_MAP.HOME.url} element={<DefaultLayout />}>
        <Route path={SITE_MAP.HOME.url} element={<HomePage />} />
        <Route path={SITE_MAP.BLOG.url} element={<BlogPage />} />
        <Route path={SITE_MAP.DETAIL.url} element={<DetailPage />} />
        <Route path={SITE_MAP.CLASS.url} element={<ClassPage />} />
        <Route path={SITE_MAP.DETAIL_CLASS.url} element={<Detail />} />
      </Route>

      {/* <-------------layout admin--------------------> */}
      <Route path={SITE_MAP.ADMIN.url} element={<AdminLayout />}></Route>

      <Route path="*" element={<h1>404 Not Found !</h1>} />
    </Routes>
  );
};
