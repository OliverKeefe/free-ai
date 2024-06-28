import React from 'react';
import styled from 'styled-components';

import attachmentIcon from '../../media/icons/attachment.svg';

const Button = styled.button`
    height: var(--chatbar-height);
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
    margin-right: 10px; /* Add margin to offset it slightly to the left */

    &:hover {
        background-color: #cbb48f;
    }
`;

const Icon = styled.img`
    width: 20px; /* Adjust size as needed */
    height: 20px; /* Adjust size as needed */
`;

const AttachButton: React.FC = () => {
    return (
            <Button>
                <Icon src={attachmentIcon} alt="Attachment Icon" />
            </Button>
    );
}

export default AttachButton;
