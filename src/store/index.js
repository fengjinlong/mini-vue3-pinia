import { defineStore } from "../mini-pinia";
// import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "666" }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
