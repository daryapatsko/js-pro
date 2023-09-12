import styled from 'styled-components'

export const StyledBlogContainer = styled.div<{ theme: 'light' | 'dark' }>`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme === "light" ? 'lightgrey' : 'brown'};
    color: ${({ theme }) => theme === "light" ? 'black' : 'grey'}
    `