import { memo, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavbarContainer, NavbarItem, NavbarList, NavbarToggler } from "./Navbar.elements";
import { uiActions, uiSelectors } from "../../store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const activeElement = 'element1';

    const isOpen = useSelector(uiSelectors.getIsNavbarOpen);
    const items = useSelector(uiSelectors.getNavbarItems);

    const handleTogglerClick = () => {
        dispatch(uiActions.toggleNavbar());
    }

    return (
        <NavbarContainer isOpen={isOpen}>
            <NavbarToggler  onClick={handleTogglerClick}/>
            <NavbarList>
                {items.map((item) => (
                    <Link to={item.path} key={item.path} style={{textDecoration: 'none'}}>
                        <NavbarItem isActive={false}>
                            { item.title }
                        </NavbarItem>
                    </Link>
                ))}
            </NavbarList>
        </NavbarContainer>
    )
}

export default memo(Navbar);