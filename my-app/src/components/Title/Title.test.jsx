import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Title from './Title';

describe("Title component", ()=>{
    test("Render custom class", () =>{
        const customClass = 'custom-title'
        const text = "Test"
        render (<Title customClass={customClass}>{text}</Title>)
        
        const title = screen.getByText(text);
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass(customClass)
    })
})