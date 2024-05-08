// const sum = require("./sum");
const myFunction = require("./sum");
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

test("Invalid Input", ()=>{
    expect(()=>myFunction("Krish"))
    .toThrow();
})