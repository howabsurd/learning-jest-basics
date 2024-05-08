// const sum = require("./sum");

// test("adds 1+ 2", ()=>{
//     expect(sum(1,2)).toBe(3);
// })


// test("object assignment", ()=>{
//     const data = {one : 1};
//     data["two"] = 2;
//     expect(data).toEqual({one:1 , two : 2});
// })

test("n is null", ()=>{
    const n = null;
    expect(n).toBeFalsy();
})