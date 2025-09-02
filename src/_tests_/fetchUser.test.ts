import { fetchUser } from "../Algorithms/fetchUser"

// should return a user object
// should return the correct id
describe("fetchUser",()=>{
    it('returns a valid user object',async()=>{
        await expect(fetchUser(1)).resolves.toHaveProperty("name")
    })
    it('returns correct id',async()=>{
        const user = await(fetchUser(42))
        expect(user.id).toBe(42)
    })
})