import { render, fireEvent, getByTitle, screen } from "@testing-library/svelte";
import ConditionalTest from "../ConditionalTest";
import '@testing-library/jest-dom';


describe("ConditionalTest", () => {
    
    it('Navigates past the first selection', async () => {
        const { getByText, debug } = render(ConditionalTest);
        const button = getByText('test')
        await fireEvent.click(button)
        debug()
        expect(await screen.findByText(/example text?/i)).toBeInTheDocument()
    })
})