import { memo } from "react"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { LoginForm } from "../components";
import { authSelectors } from "../store";

export const WelcomePage = () => {
    const isLoggedIn = useSelector(authSelectors.getIsUserLoggedIn);
    const username = useSelector(authSelectors.getUserName);
    const {t} = useTranslation();

    return (
        <>
            {isLoggedIn && <h1>{t('welcomePage.welcomeMessage', {name: username})}</h1>}
            {!isLoggedIn && <LoginForm />}
        </>
    )
}

export default memo(WelcomePage);