import styled from 'styled-components'

export const StyledBlogContainer = styled.div<{theme: 'light' | 'dark'}>`
    background-color: ${({theme}) => theme === "light" ? 'lightgrey' : 'brown'};
    color: ${({theme}) => theme === "light" ? 'black' : 'grey'}
    `