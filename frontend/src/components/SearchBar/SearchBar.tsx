import React from 'react';
import styled from 'styled-components';
import SearchBarButton from './SearchBarButton';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-top: 30px;
`;

const SearchBarInputForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    max-width: 100%;
`;

const SearchBarInput = styled.input`
    padding: 0 10px;
    height: 35px;
    font-size: 16px;
    border: 0px solid;
    color: #E7D7AD;
    background-color: #665C54;
    border-radius: 10px 0px 0px 10px;
    width: calc(100% - 60px);
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
        <Container>
            <SearchBarInputForm>
                <SearchBarInput type="text" placeholder="Search..." />
                <SearchBarButton />
            </SearchBarInputForm>
        </Container>
    );
}

export default SearchBar;
