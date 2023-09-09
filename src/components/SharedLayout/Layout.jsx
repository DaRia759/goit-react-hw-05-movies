import { NavLink, Outlet } from "react-router-dom";
import { Header, Link } from '../App.styled';
import { Suspense } from "react";


const Layout = () => {
    return (
        <div>
            <Header>
                <nav>
                    <Link>
                        <NavLink to='/'>Home</NavLink>
                    </Link>
                    <Link>
                        <NavLink to='/movies'>Movies</NavLink>
                    </Link>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
            
        </div>
    )
};

export default Layout;