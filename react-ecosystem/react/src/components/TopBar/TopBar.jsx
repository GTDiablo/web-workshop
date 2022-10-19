import { memo } from "react"
import { TopBarContainer } from "./TopBar.elements";

const TopBar = ({children}) => {
    return (
        <TopBarContainer>
            {children}
        </TopBarContainer>
    )
}

export default memo(TopBar);