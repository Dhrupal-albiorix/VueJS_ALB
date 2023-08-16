
import { defineStore } from 'pinia'
import router from "@/router";
export const useAppStore = defineStore('app', {
  state: () => ({
    editable_index: localStorage.getItem("editable_index"),
    for_update: localStorage.getItem("for_update"),
    all_info: JSON.parse(localStorage.getItem('users')) || [],
    error: "",
    valid: false,
    user: {
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      mobile: '',
      img: '',
      dob: '',
      adress: '',
      copy_adress: '',
      box_val: false
    },

    bank: {
      bank_name: "",
      bank_acc_name: "",
      bank_acc_no: "",
      bank_ifsc: "",
      bank_ifsc: "",
      aadhaar: "",
      pan: ""
    },

    profession: {
      designation: "",
      department: '',
      location: '',
      selected_skill: [],
      months: '',
      years: '',
      resume: ''
    },

    education_arr: [],

    experience_arr: [],

    current_org: {
      join_date: '',
      next_date: '',
      current_ctc: ''
    }
  }),

  actions: {
    async validate(form, page) {
      const { valid } = await form.validate();
      if (valid) {
        router.push(page);
      }
    },
    async submitAll(form, page) {
      const { valid } = await form.validate();
      if (valid) {
        this.all_info = JSON.parse(localStorage.getItem('users')) || [];
        this.all_info.push([this.user, this.bank, this.profession, this.education_arr, this.experience_arr, this.current_org]);
        localStorage.setItem('users', JSON.stringify(this.all_info));
        this.all_info = JSON.parse(localStorage.getItem('users')) || [];
        router.push(page);
      }
    },
    chaeck_val() {
      if (this.user.box_val) {
        this.user.copy_adress = this.user.adress
      }
    },
    back(back) {
      router.push(back);
    },
    go_to_List() {
      router.push("/");
    },


    edit_user(index) {
      this.for_update = true
      localStorage.setItem('for_update', this.for_update)
      localStorage.setItem('editable_index', index)
      this.edit_user_in_local()
      router.push("/AddEmp");
    },

    edit_user_in_local() {
      if (localStorage.getItem("for_update")) {
        this.editable_index = localStorage.getItem("editable_index")
        this.user = this.all_info[this.editable_index][0]
        this.bank = this.all_info[this.editable_index][1]
        this.profession = this.all_info[this.editable_index][2]
        this.education_arr = this.all_info[this.editable_index][3]
        this.experience_arr = this.all_info[this.editable_index][4]
        this.current_org = this.all_info[this.editable_index][5]
      }
    },

    updateAll() {
      this.all_info[localStorage.getItem("editable_index")][0] = this.user
      this.all_info[localStorage.getItem("editable_index")][1] = this.bank
      this.all_info[localStorage.getItem("editable_index")][2] = this.profession
      this.all_info[localStorage.getItem("editable_index")][3] = this.education_arr
      this.all_info[localStorage.getItem("editable_index")][4] = this.experience_arr
      this.all_info[localStorage.getItem("editable_index")][5] = this.current_org
      localStorage.setItem('users', JSON.stringify(this.all_info));
      localStorage.removeItem("for_update");
      router.push("/")

    },

    delete_user(index) {
      this.all_info.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.all_info));
    }

  },


})
