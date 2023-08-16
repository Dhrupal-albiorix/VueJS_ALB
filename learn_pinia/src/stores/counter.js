import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },

})

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play Gloomhaven1", isFav: true },
      { id: 3, title: "buy some milk 2", isFav: true },
      { id: 4, title: "play Gloomhaven 3", isFav: true },
      { id: 5, title: "buy some milk 4", isFav: false },
      { id: 6, title: "play Gloomhaven 5", isFav: false }
    ],
    name: 'Mario'
  }),

  getters: {
    favourite_task() {
      return this.tasks.filter(t => t.isFav)
    }
  }

})