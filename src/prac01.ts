/*
let name: string = "TypeScriptのおべんきょー";

// Date型の変数の宣言+初期化
// これが、2025年`11`月2日05:15である。(月、時に関して注意！)
let deadline: Date = new Date(2025, 10, 2, 14, 15)

function date2str(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}年${month}月${day}日 ${hours}時${minutes}分`;
}

let priority: number = 3;
console.log(name, `${date2str(deadline)}`, priority);
*/

const todo = {
    name: "TypeScriptのおべんきょー",
    priority: 3,
};
console.log(`Todo 1 => ${todo.name} (優先度:${todo.priority})`);