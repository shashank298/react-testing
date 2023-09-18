import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockedFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}

describe("TodoFooter",() => {

    test("should render some text passed into the footer",() => {
        render(<MockedFooter numberOfIncompleteTasks={5}/>)
        expect(screen.getByText(/5 tasks left/)).toBeInTheDocument()
    })

    test("should render 'task' when the incomplete task is passed as 1",() => {
        render(<MockedFooter numberOfIncompleteTasks={1}/>)
        expect(screen.getByText(/1 task left/)).toBeInTheDocument()
    })

    test("should have clickable link tag",() => {
        render(<MockedFooter numberOfIncompleteTasks={1}/>)
        expect(screen.getByRole("link",{to:"/followers"})).toBeInTheDocument()
    })
})