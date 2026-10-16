/*
const func = (prioritie: number): string => {
    let result: string = ``;
    for(let i = 0;i < prioritie; i++){
        result += `★`;
    }
    return result;
}

const priorities = [3, 1, 2, 1]; // 1〜3の値が格納された配列

const formattedPriorities = priorities.map(func);
*/

const priorities = [3,1,2,1];
const formattedPriorities = priorities.map(prioritie => {
    let result = ``;
    for(let i = 0;i < prioritie; i++)result += `★`;
    return result;
})

console.log(priorities);
console.log(formattedPriorities);