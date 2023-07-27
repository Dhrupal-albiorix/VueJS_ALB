import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userArr: [],
    userinfo: {
      username: '',
      usermail: '',
      userpsw: '',
    },
    quizzes: [],
    filterQuize: [],
    searchQuize: [],
    storedmark: 0,
    questionindex: 0,
  },
  getters: {
    get_userinfo(state) {
      return state.userinfo;
    },
    get_userArr(state) {
      return state.userinfo;
    },
    get_quizzes(state) {
      return state.quizzes;
    },
    get_storedmark(state) {
      return state.storedmark
    },
    get_questionindex(state) {
      return state.questionindex
    },
    get_a(state) {
      return state.a
    },
    get_filterQuize(state) {
      return state.filterQuize
    },
    get_searchQuize(state) {
      return state.searchQuize
    }
  },
  mutations: {
    add_user(state, userinfo) {
      state.userinfo = userinfo;
    },
    signup(state) {
      state.userArr = JSON.parse(localStorage.getItem('users')) || [];
      state.userArr.push(state.userinfo);
      localStorage.setItem('users', JSON.stringify(state.userArr));
    },
    createQuiz(state, quiz) {
      state.quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
      state.quizzes.push(quiz);
      localStorage.setItem('quizzes', JSON.stringify(state.quizzes));
    },

    calculate_mark_one(state) {
      state.storedmark = state.storedmark + 1;
    },

    increment_questionindex(state) {
      state.questionindex = state.questionindex + 1;
    },

    store_marks(state, { currentUser, user_records, a }) {

      const userIndex = user_records.findIndex((user) => {
        return (
          user.usermail === currentUser.usermail &&
          user.userpsw === currentUser.userpsw
        );
      });

      if (userIndex !== -1) {
        const user = user_records[userIndex];
        if (!Object.prototype.hasOwnProperty.call(user, "marks")) {
          // Use Object.prototype.hasOwnProperty.call() to check for property existence
          user.marks = {};
        }

        user.marks[a] = state.storedmark;
      }
      localStorage.setItem("users", JSON.stringify(user_records));
      state.questionindex = 0
      state.storedmark = 0
    },
    filter_level(state, { quizzes, selected_level }) {

      if (selected_level == 0) {
        state.filterQuize = quizzes;
      } else {
        state.filterQuize = quizzes.filter((item) => item.level === selected_level);
      }
    },
    search(state, { quizzes, searchText }) {

      if (state.filterQuize.length == 0) {
        state.searchQuize = quizzes
      }
      else {
        state.searchQuize = state.filterQuize
      }

      let searchedQuizzes = state.searchQuize.filter((quiz) =>
        quiz.title.toLowerCase().includes(searchText.toLowerCase())
      );

      state.searchQuize = searchedQuizzes;
    }

  },
  actions: {
    signup(context) {
      context.commit('signup');
    },
    add_user(context, userinfo) {
      context.commit('add_user', userinfo);
    },
    createQuiz(context, quiz) {
      context.commit('createQuiz', quiz);
    },

    calculate_mark_one(context) {
      context.commit('calculate_mark_one')
    },

    increment_questionindex(context) {
      context.commit('increment_questionindex')
    },

    store_marks(context, currentUser, user_records, a) {
      context.commit('store_marks', currentUser, user_records, a)
    },

    show_all_users(context) {
      context.commit('show_all_users')
    },

    filter_level(context, quizzes, selected_level) {
      context.commit("filter_level", quizzes, selected_level);
    },

    search(context, searchText, quizzes) {
      context.commit("search", searchText, quizzes);
    },

  },
  modules: {},
});
