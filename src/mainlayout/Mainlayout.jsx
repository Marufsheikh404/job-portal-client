import { Outlet } from "react-router-dom";
import Nav from "../pages/sharePage/Nav";
import Footer from "../pages/sharePage/Footer";

const Mainlayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;