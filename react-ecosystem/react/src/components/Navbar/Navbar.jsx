import { memo, useState } from "react"
import { NavbarContainer, NavbarItem, NavbarList } from "./Navbar.elements";

const Navbar = () => {
    const links = ['element1', 'element2', 'element3'];
    const [isOpen, setIsOpen] = useState(true);
    return (
        <NavbarContainer isOpen={isOpen}>
            <NavbarList>
                {links.map((link) => (
                    <NavbarItem key={link}>
                        {link}
                    </NavbarItem>
                ))}
            </NavbarList>
        </NavbarContainer>
    )
}

export default memo(Navbar);