import { Outlet } from "react-router-dom";
import Header from "../page/Header";


const Main = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;