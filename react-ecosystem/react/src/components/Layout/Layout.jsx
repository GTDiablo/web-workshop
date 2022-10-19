import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { authSelectors } from "../../store";
import LangSelector from "../LangSelector/LangSelector";
//
import Navbar from "../Navbar/Navbar";
import { TopBar } from "../TopBar";
import { LayoutContent, LayoutOuterWrapper, LayoutWrapper, LayoutUsername } from "./Layout.elements";

const Layout = ({children}) => {
    const {t} = useTranslation();

    const username = useSelector(authSelectors.getUserName);

    return (
        <LayoutOuterWrapper>
            <TopBar>
                <LayoutUsername>{t('topBar.loggedInAs', {name: username})}</LayoutUsername>
                <LangSelector />
            </TopBar>
            <LayoutWrapper>
                <Navbar />
                <LayoutContent>
                    {children}
                </LayoutContent>
            </LayoutWrapper>
        </LayoutOuterWrapper>
    )
};

export default memo(Layout);