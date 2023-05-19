//https://vitest.dev/api/expect.html
//{name:"", id:1}
export const createStore = () => {
  let store = [];

  return {
    addItem: (item) => {
      store = [...store, item];
    },
    getStore: () => {
      return store;
    },
    getById: (id) => {
      return store.filter((item) => item.id === id)[0];
    },
  };
};

export const nameList = () => {
  let List = [];

  return {
    addName: (name) => {
      List = [...List, name];
    },
    getList: () => {
      return List;
    },
  };
};
