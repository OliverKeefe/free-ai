import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../media/icons/search.svg';

const SearchBarBtn = styled.button`
    padding: 10px;
    height: 35px;
    font-size: 16px;
    border: none;
    border-radius: 0 10px 10px 0;
    background-color: #E7D7AD;
    color: #171A1A;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #cbb48f;
    }

    svg {
        font-size: 12px;
    }
`;

const SearchBarButton: React.FC = () => {
    return (
        <SearchBarBtn type="submit">
            <img src={searchIcon} alt="Q" />
        </SearchBarBtn>
    );
}

export default SearchBarButton;
