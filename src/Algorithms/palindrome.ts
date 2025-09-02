export function palindrome (string:string){
    // clear spaces
    const cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    // reverse string
    const reverse = cleaned.split("").reverse().join("")
    
    return cleaned=== reverse
}