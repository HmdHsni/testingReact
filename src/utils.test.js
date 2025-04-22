
import { getGrade } from "./utils"

describe("util test" ,()=>{
    test("returns A for 95",()=>{
    expect(getGrade(95)).toBe("A")
    })
    test("returns B for 80" ,()=>{
        expect(getGrade(80)).toBe("B")
    })
    test("return C for 71" ,()=>{
        expect(getGrade("71")).toBe("C")
    })
    test("return D for 61" ,()=>{
        expect(getGrade("61")).toBe("D")
    })
    test("return F for 50" ,()=>{
        expect(getGrade("50")).toBe("F")
    })
})