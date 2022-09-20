import { useEffect } from "react";
import { memo } from "react"
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { todoActions, todosSelectors } from "../../store";

const StyledListBody = styled.div``;

const StyledListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid ${(props) => props.theme.textColor};
`;

const StyledListItemName = styled.h1`
    color: ${(props) => props.theme.textColor};
    margin-bottom: 8px;
`;

const StyledListItemEmail = styled.p`
    color: ${(props) => props.theme.textColor};
`;

const StyledListItemStatus = styled.span`
    padding: 8px;
    border-radius: 4px;
    background-color: ${(props)=> {
        if(props.completed){
            return 'green';
        } else {
            return 'red';
        }
    }};
`;

const List = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(todoActions.getTodoListFromApi());
    },[]);

    const todos = useSelector(todosSelectors.getTodoList);
    const isLoading = useSelector(todosSelectors.getTodoListIsLoading);

    return (
        <StyledListBody>
            {isLoading && <h1>LOADING...</h1>}
            {!isLoading && todos.map(todo => (
                <StyledListItem>
                    <div>
                        <StyledListItemName>{todo.userId}</StyledListItemName>
                        <StyledListItemEmail>{todo.title}</StyledListItemEmail>
                    </div>
                    <StyledListItemStatus completed={todo.completed}>{todo.completed}</StyledListItemStatus>
                </StyledListItem>
            )) }
        </StyledListBody>
    )
}

export default memo(List);