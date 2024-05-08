// const sum = require("./sum");
// const myFunction = require("./sum");
// test("adds 1+ 2", ()=>{
//     expect(sum(1,2)).toBe(3);
// })


// test("object assignment", ()=>{
//     const data = {one : 1};
//     data["two"] = 2;
//     expect(data).toEqual({one:1 , two : 2});
// })

// test("n is null", ()=>{
//     const n = null;
//     expect(n).toBeFalsy();
// })

// test("one is truthy",()=>{
//     const n = 1;
//     expect(n).toBeTruthy();
// })

// test("Invalid Input", ()=>{
//     expect(()=>myFunction("Krish"))
//     .toThrow();
// })

// const fetchData = require("./newtopic");

// test("The data is peanut butter", done =>{
//     function callback(data){
//         try {
//             expect(data).toBe("peanut butter")
//             done()
//         } catch (error) {
//             done(error);
//         }
//     }
//     fetchData(callback);
// })

const fetchPromise = require("./newtopic");

// test("The data is peanut butter", ()=>{
//     return expect(fetchPromise()).resolves.toBe("peanut butter");
// })

// test("The data is rejected", ()=>{
//      return expect(fetchPromise()).rejects.toThrow("error");
// })

test("the data is peanut butter", async()=>{
    const data = await fetchPromise();
    expect(data).toBe("peanut butter");
})