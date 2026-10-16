import type { Todo } from "./types.js";
import { initTodos } from "./initTodos.js";

const targetId = "a003";
const newName = "電気電子回路1の課題";
const updatedTodos: Todo[] = [];

console.log(JSON.stringify(updatedTodos, null, 2));