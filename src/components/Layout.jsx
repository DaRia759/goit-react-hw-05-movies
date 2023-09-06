import { NavLink, Outlet } from "react-router-dom";
import { Header, Link } from './App.styled';


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
                <main>
                    <Outlet />
                </main>
            </Header>
        </div>
    )
};

export default Layout;