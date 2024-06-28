import React from 'react';
import styled from 'styled-components';

const placeHolder: String = "OK";

const Button = styled.button`
    height: var(--navbar-height);
    width: 50px;
    padding: 0; /* Removed side padding */
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    font-size: 14px;
    border: none;
    border-radius: 15px;
    background-color: #E7D7AD;
    color: #171A1A;
    cursor: pointer;
    outline: none;
    margin-right: 40px; /* Add margin to offset it slightly to the left */

    &:hover {
        background-color: #cbb48f;
    }
`;

const Icon = styled.p`
    width: 20px; /* Adjust size as needed */
    height: 20px; /* Adjust size as needed */
`;

const UserButton: React.FC = () => {
    return (
            <Button>
                <Icon>{placeHolder}</Icon>
            </Button>
    );
}

export default UserButton;
