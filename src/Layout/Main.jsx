import { Outlet } from "react-router-dom";
import Header from "../page/Header";
import Footer from "../page/Footer";


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