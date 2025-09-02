import { palindrome } from "../Algorithms/palindrome";

describe('palindrome',()=>{
    // indivdual test cases
    it('should return a boolean',()=>{
        expect(palindrome('racecar')).toBeTruthy()
    })
    // 
    it('identifies a non palindrome string',()=>{
        expect(palindrome('dog')).toBeFalsy()
    })
    // works with mixed casing
    it('accepts mixed letter casing',()=>{
        expect(palindrome('RaceCar')).toBeTruthy()
    })
    // works with spaces
    it('works with spaces',()=>{
        expect(palindrome('nurses run')).toBeTruthy()
    })
})