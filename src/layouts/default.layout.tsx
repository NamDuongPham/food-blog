import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SlideBar from "../modules/SlideBar/SlideBar";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="min-h-[800px] flex flex-row justify-evenly">
        <SlideBar />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DefaultLayout;
