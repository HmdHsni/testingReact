
import { getGrade } from "./utils"

describe("util test" ,()=>{
    test("returns A for 95",()=>{
    expect(getGrade(95)).toBe("A")
    })
    test("returns A for 80" ,()=>{
        expect(getGrade(80)).toBe("B")
    })
})