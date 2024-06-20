import React from 'react';
import styled from 'styled-components';
import SearchBarButton from './SearchBarButton';

const SearchBarInputForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    height: 40px;
`;

const SearchBarInput = styled.input`
    padding: 0 10px;
    height: 40px;
    font-size: 16px;
    border: 0px solid;
    color: #E7D7AD;
    background-color: #665C54;
    border-radius: 15px 0px 0px 15px;
    width: calc(var(--navbar-side-width) - 60px);
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #E7D7AD;
    }

    &::placeholder {
        padding-left: 10px;
    }
`;

const SearchBar: React.FC = () => {
    return (
        <SearchBarInputForm>
            <SearchBarInput type="text" placeholder="Search..." />
            <SearchBarButton />
        </SearchBarInputForm>
    );
}

export default SearchBar;
