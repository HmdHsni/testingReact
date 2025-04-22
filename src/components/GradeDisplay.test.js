// import { screen } from "@testing-library/dom"
import { render ,screen} from "@testing-library/react"
import GradeDisplay, { getGrade } from "./GradeDisplay"


describe("test rtl in gradedisplay",()=>{
    test("90 grade:A",()=>{
        render(<GradeDisplay score={90}/>)
        const element=screen.getByText(/رتبه:/)
        expect(element).toHaveTextContent("A")
        
    })
    test("80 grade b" ,()=>{
        render(<GradeDisplay score={80}/>)
        const elemet=screen.getByText(/رتبه:/)
        expect(elemet).toHaveTextContent("B")
    })
    test("70 grade c" ,()=>{
        render(<GradeDisplay score={70}/>)
        const elemet=screen.getByText(/رتبه:/)
        expect(elemet).toHaveTextContent("C")
    })
    test("60 grade d" ,()=>{
        render(<GradeDisplay score={60}/>)
        const elemet=screen.getByText(/رتبه:/)
        expect(elemet).toHaveTextContent("D")
    })
    test("50 grade f" ,()=>{
        render(<GradeDisplay score={50}/>)
        const elemet=screen.getByText(/رتبه:/)
        expect(elemet).toHaveTextContent("F")
    })
})