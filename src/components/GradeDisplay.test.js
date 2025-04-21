// import { screen } from "@testing-library/dom"
import { render ,screen} from "@testing-library/react"
import GradeDisplay, { getGrade } from "./GradeDisplay"


describe("test rtl in gradedisplay",()=>{
    test("90 grade:A",()=>{
        render(<GradeDisplay score={95}/>)
        const element=screen.getByText(/رتبه:/)
        expect(element).toHaveTextContent("A")
        
    })
    test("80 grade b" ,()=>{
        render(<GradeDisplay score={80}/>)
        const elemet=screen.getByText(/رتبه:/)
        expect(elemet).toHaveTextContent("B")
    })
})