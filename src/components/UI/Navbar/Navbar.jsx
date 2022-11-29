import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import cl from "./Navbar.module.css";

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className={cl.navbar}>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className={cl.navbar__links}>
                <MyButton><Link className={cl.navbar__link} to="/about">О сайте</Link></MyButton>
                <MyButton><Link className={cl.navbar__link} to="/posts">Посты</Link></MyButton>
            </div>
        </div >
    )
}

export default Navbar;