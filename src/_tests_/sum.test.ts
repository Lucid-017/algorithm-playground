// import our function
import { sum } from "../Algorithms/sum"

describe('sum',()=>{
    it('adds two numbers',()=>{
        expect(sum(2,3)).toBe(5)
    })
})