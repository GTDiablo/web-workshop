import { memo } from "react";
import Card from "../components/Card";
import List from "../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { getThemeName, getTheme } from "../store/ui/ui.selectors";
import { uiActions } from "../store/ui/ui.slice";

const TodoListPage = () => {
    const dispatch = useDispatch();
    const themeName = useSelector(getThemeName);

    const handleThemeToggleButtonPress = () => {
        dispatch(uiActions.toggleTheme());
    }
    return (
        <>
            <div>
              <h1 style={{color: 'blue'}}>Jelenlegi téma: {themeName}</h1>
                <button onClick={handleThemeToggleButtonPress}>Toggle theme</button>
            </div>
            <Card isText>
                Hello from card
            </Card>
            <Card>
                <List/>
            </Card>
        </>
    )
}

export default memo(TodoListPage);