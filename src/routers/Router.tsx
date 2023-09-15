import { Route, Routes } from "react-router-dom";
import { SITE_MAP } from "../constants/site-map";
import AdminLayout from "../layouts/admin.layout";
import DefaultLayout from "../layouts/default.layout";
import BlogPage from "../pages/Blog/BlogPage";
import HomePage from "../pages/Home/HomePage";

import DetailClass from "../modules/Class/Detail/DetailClass";
import ClassPage from "../pages/Class/ClassPage";
import DetailPage from "../pages/Detail/DetailPage";

import LiveStreamPage from "../pages/LiveStream/LiveStreamPage";
import DetailLiveStream from "../modules/LiveStream/components/DetailLiveStream/DetailLiveStream";

import MarketPage from "../pages/Market/MarketPage";




export const Router = () => {
  return (
    <Routes>
      <Route path={SITE_MAP.HOME.url} element={<DefaultLayout />}>
        <Route path={SITE_MAP.HOME.url} element={<HomePage />} />
        <Route path={SITE_MAP.BLOG.url} element={<BlogPage />} />
        <Route path={SITE_MAP.DETAIL.url} element={<DetailPage />} />
        <Route path={SITE_MAP.CLASS.url} element={<ClassPage />} />
        <Route path={SITE_MAP.DETAIL_CLASS.url} element={<DetailClass />} />

        <Route path={SITE_MAP.LIVE.url} element={<LiveStreamPage />} />
        <Route path={SITE_MAP.DETAILLIVE.url} element={<DetailLiveStream />} />

        <Route path={SITE_MAP.MARKET.url} element={<MarketPage />} />

      </Route>

      {/* <-------------layout admin--------------------> */}
      <Route path={SITE_MAP.ADMIN.url} element={<AdminLayout />}></Route>

      <Route path="*" element={<h1>404 Not Found !</h1>} />
    </Routes>
  );
};
