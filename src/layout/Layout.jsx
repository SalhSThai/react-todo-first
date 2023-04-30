import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div className="w-full h-full min-h-full flex flex-col justify-start items-center">
      <Navbar />
      <div className="grow w-full ">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
