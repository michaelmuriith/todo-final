import { defineStore } from "pinia";
export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    enabled: true,
    todo: [
      { id: 0, task: "Play piano", done: false },
      { id: 1, task: "Wash utensils", done: false },
      { id: 2, task: "go for a run", done: false },
    ],
    dragable: false,
  }),
});
