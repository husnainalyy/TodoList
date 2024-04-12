import { createContext } from "react";
const todoContext = createContext({ allTodo: [], setAllTodo: () => { } });

export default todoContext;