import { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 150px;
`;

const StyledInput = styled.div`
    width: 100%;
    padding: 15px;
    background-color: white;
    color: black;
    cursor: pointer;
    user-select: none;
`;

const StyledMenu = styled.div`
    width: 100%;
    margin-top: 10px;
    background-color: grey;
    height: ${(props) => props.isOpen ? 'fit-content' : '0px'};
    overflow: hidden;
`;

const StyledMenuItem = styled.p`
    user-select: none;
    cursor: pointer;
    padding: 10px;
    border: 1px solid red;

    & > span {
        width: 5px;
        height: 5px;
        background-color: red;
        display: block;
    }
`;

const DropdownMenu = ({options, currentValue, changeValue}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        console.log('Toggle');
        setIsOpen(prev => !prev);
    }

    const renderOptions = () => {
        return options.map((option) => (
            <StyledMenuItem key={option} onClick={() => {
                changeValue(option);
                toggleIsOpen();
            }}>{option} <span/> </StyledMenuItem>
        ))
    }

    return (
        <StyledWrapper>
            <StyledInput onClick={toggleIsOpen}>{currentValue}</StyledInput>
            <StyledMenu isOpen={isOpen}>
                { renderOptions() }
            </StyledMenu>
        </StyledWrapper>
    )
}

export default DropdownMenu;