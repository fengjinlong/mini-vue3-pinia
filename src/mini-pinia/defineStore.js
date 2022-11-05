import { reactive, toRef, computed, inject } from "vue";
const defineStore = (name, { state, getters, actions }) => {
  const store = {};
  if (state && typeof state === "function") {
    const stateResult = state();
    // stateResult {
    //   a:1,
    //   b:2
    // }
    store.$state = reactive(stateResult);
    // 把 stateResult 的属性挂载到 store
    for (const key in stateResult) {
      store[key] = toRef(store.$state, key);
    }
  }

  // 所有的 actions 挂载到 store
  if (actions && Object.keys(actions).length > 0) {
    for (const method in actions) {
      store[method] = actions[method];
    }
  }
  // 所有 getters
  if (getters && Object.keys(getters).length > 0) {
    for (const method in getters) {
      store[method] = computed(
        getters[method].bind(store.$state, store.$state)
      );
      // $xx 为了 直接用 this 调用相关属性
      store.$state[method] = store[method];
    }
  }
  return () => {
    const setSubStore = inject("setSubStore");
    const piniaStore = setSubStore(name, reactive(store));
    return piniaStore[name];
  };
};
export { defineStore };
