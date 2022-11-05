import { reactive } from "vue";

const createPinia = function () {
  const piniaStore = reactive({});
  /**
   * setSubStore
   * @param {子 store 的id，defineStore 的第一个参数} name
   * @param {子 store} store
   * @returns 父 store，piniaStore
   */
  function setSubStore(name, store) {
    if (!piniaStore[name]) {
      piniaStore[name] = store;
    }
    return piniaStore;
  }
  function install(app) {
    app.provide("setSubStore", setSubStore);
  }

  return {
    install,
  };
};
export { createPinia };

// piniaStore : {
//   child1Store: {}
//   child2Store: {}
// }
