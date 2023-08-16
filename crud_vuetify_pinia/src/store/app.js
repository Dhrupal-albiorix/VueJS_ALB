import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    searchText: '',
    user_index: null,
    getform: false,
    isEdit: false,
    users_arr: JSON.parse(localStorage.getItem('users')) || [],
    user: {
      Name: '',
      email: '',
      select: null,
      checkbox: false,
    },
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => (v && v.length <= 50) || "Email must be less than 50 characters",
      (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Invalid email format",
    ],
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  actions: {
    async validate(form) {
      const { valid } = await form.validate();
      if (valid) {
        this.users_arr = JSON.parse(localStorage.getItem('users')) || [];
        this.users_arr.push(this.user);
        localStorage.setItem('users', JSON.stringify(this.users_arr));
        this.users_arr = JSON.parse(localStorage.getItem('users')) || [];
        form.reset();
      }
    },

    reset(form) {
      form.reset();
    },

    edit(item, index) {
      this.getform = true;
      this.user = item
      this.isEdit = true
      this.user_index = index
    },

    update(form) {
      this.users_arr = JSON.parse(localStorage.getItem('users')) || [];
      this.users_arr[this.user_index] = this.user;
      localStorage.setItem('users', JSON.stringify(this.users_arr));
      this.users_arr = JSON.parse(localStorage.getItem('users')) || [];
      this.isEdit = false;
      form.reset();
    },

    cancle() {
      this.isEdit = false;
    },

    delete(index) {
      this.users_arr.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.users_arr));
    },

    search() {
      this.users_arr = JSON.parse(localStorage.getItem('users')) || [];
      let searchedUser = this.users_arr.filter((user) =>
        user.Name.toLowerCase().includes(this.searchText.toLowerCase())
      );
      this.users_arr = searchedUser;
    },

    openform() {
      this.getform = true;
    }

  }
})


