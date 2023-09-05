import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <NavLink to='/'></NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies'></NavLink>
                    </li>
                </ul>
                <main>
                    <Outlet />
                </main>
            
            </header>

        </div>
    )
};

export default Layout;