import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';

let placeholder: string = "Java 21 Array Syntax";

const SideNav = styled.div`
    width: var(--navbar-side-width);
    height: 100%;
    height: calc(99vh - var(--navbar-top-height)); 
    position: fixed;
    top: 70px; /* var(--navbar-top-height) */
    left: 0;
    background-color: #1D2021;
    color: white;
    overflow-y: auto; /* Add scroll if content overflows */
    border-top-right-radius: 25px;
    padding-top: 10px; /* padding-top: calc(var(--navbar-top-height) + 10);*/
    text-align: center;

    p {
        padding: 2%;
        color: #DEDEDE;
    }
`;

const SideNavUnorderedList = styled.ul`
    color: white;
    margin: 0 10px;
    padding: 0; /* Reset padding to 0 */
    list-style: none; /* Remove default list styling */
    border-radius: 25px;

    li {
        padding: 5px; /* Add padding for list items */
        transition: background-color 0.3s ease; 
        border-radius: 25px;

        &:hover {
            background-color: #495057;
            color: white;
        }
    }

    a {
        color: white;
    }
`;

// TODO: Implement Chat search bar, New chat button.
const SideNavbar: React.FC = () => {
    return (
        <SideNav>
            <div>
            <SearchBar />
            <p>Today</p>
            <SideNavUnorderedList>
                <li><a>{placeholder}</a></li>
                <li><a>Fix CSS Class Assignment</a></li>
                <li><a>Make my CV more concise</a></li>
            </SideNavUnorderedList>
            <p>Yesterday</p>
            <SideNavUnorderedList>
                <li><a>Capital of Spain</a></li>
                <li><a>Why is my C++ header fi...</a></li>
            </SideNavUnorderedList>
            </div>
        </SideNav>
    );
}

export default SideNavbar;