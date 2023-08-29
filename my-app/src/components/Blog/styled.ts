import styled from 'styled-components'

export const StyledBlogContainer = styled.div<{theme: 'light' | 'dark'}>`
    padding: 20px;
    background-color: ${({theme}) => theme === "dark" ? 'lightgrey' : '#352323'};
    color: ${({theme}) => theme === "dark" ? 'black' : '#fff'}
    `