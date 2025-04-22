import { render,screen } from "@testing-library/react"
import { Greet } from "./greet"


describe("GREET DESCRIBE" ,()=>{
    test("greet render",()=>{
        render(<Greet/>)
        const element=screen.getByText("hello")
       expect(element).toBeInTheDocument()
    })
    // test("greet hamideh" , ()=>{
    //     render(<Greet name="hamideh"/>)
    //     const greetElemnet=screen.getByText("hellohamideh")
    //     expect(greetElemnet).toBeInTheDocument()
    // })
})
// npm test -- --coverage