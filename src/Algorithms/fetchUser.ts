export async function fetchUser(id:number){
    return new Promise<{id:number;name:string}>((resolve)=>{
        setTimeout(() => {
            resolve({id,name:"Uche"})
        }, 100);
    })
}