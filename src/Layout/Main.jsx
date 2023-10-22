import { Outlet } from "react-router-dom";

import Footer from "../page/Footer";
import Header from "../page/Header";


const Main = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;