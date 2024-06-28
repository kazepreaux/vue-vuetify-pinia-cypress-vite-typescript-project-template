import { defineStore } from "pinia";

export const useNamesStore = defineStore("names", {
  state: () => ({
    names: [] as string[],
    selected: "" as string,
  }),
  actions: {
    getNames() {
      this.names = ["Bob", "Steve", "Ben"];
    },
    select(name: string) {
      this.selected = name;
    },
  },
  getters: {
    isSelected(state) {
      return (name: string) => state.names.indexOf(name) > -1;
    },
  },
});

export default useNamesStore;
