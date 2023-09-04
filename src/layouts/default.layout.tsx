import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SlideBar from "../modules/SlideBar";


const DefaultLayout = () => {
  return <>
    <header>
      <Header />
    </header>
    <main className="min-h-[800px] flex flex-row">
      <SlideBar />
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
  </>;
}

export default DefaultLayout;
