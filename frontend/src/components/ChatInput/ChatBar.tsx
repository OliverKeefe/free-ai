import React from 'react';
import styled from 'styled-components';
import AttachButton from './AttachButton';

const Container = styled.div`
    position: fixed;
    bottom: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
`;

const ChatInputForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--chatbar-heigh);
    width: 100%;
    max-width: 600px; /* Adjust the max-width as needed */
    font-size: 12px;
`;

const ChatInput = styled.input`
    padding: 0 10px;
    height: 44px;
    font-size: 16px;
    border: none;
    color: #E7D7AD;
    background-color: #665C54;
    border-radius: 15px 0px 0px 15px;
    flex: 1;
    outline: none;
    transition: border-color 0.3s ease;
    font-size: 12px;

    &:focus {
        border-color: #E7D7AD;
    }

    &::placeholder {
        padding-left: 10px;
    }
`;

const Button = styled.button`
    height: var(--chatbar-height);
    width: 50px;
    padding: 0 16px;
    font-size: 14px;
    border: none;
    border-radius: 0 15px 15px 0;
    background-color: #E7D7AD;
    color: #171A1A;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #cbb48f;
    }
`;

const ChatBar: React.FC = () => {
    return (
        //TODO: Fix the attachment button, add the attachment icon also.
        <Container>
            <ChatInputForm>
                <AttachButton/>
                <ChatInput type="text" placeholder="Type a message..." />
                <Button type="submit">Go</Button>
            </ChatInputForm>
        </Container>
    );
}

export default ChatBar;