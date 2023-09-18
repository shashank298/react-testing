import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render some text passed into title",() => {
    render(<Header title="Testing Todo app"/>)
    expect(screen.getByText(/Testing Todo app/i)).toBeInTheDocument()
})