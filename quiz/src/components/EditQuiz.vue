<template>
  <div>
    <upload-quiz :Userquiz="quiz" />
    <br />
    <button @click="update">update your quiz in existence</button>
  </div>
</template>

<script>
import UploadQuiz from "./UploadQuiz.vue";

export default {
  beforeRouteEnter(to, from, next) {
    const isAuthenticated = localStorage.getItem("duplicate");
    if (!isAuthenticated) {
      next("/login"); // Redirect to login if the user is not authenticated
    } else {
      next(); // Proceed with the route if the user is authenticated
    }
  },

  components: { UploadQuiz },
  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem("duplicate")) || [],
      quiz: JSON.parse(localStorage.getItem("quizzes"))[
        localStorage.getItem("index")
      ],
    };
  },

  methods: {
    update() {
      const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
      quizzes[localStorage.getItem("index")] = this.quiz;
      console.log(quizzes[localStorage.getItem("index")]);
      localStorage.setItem("quizzes", JSON.stringify(quizzes));
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
button {
  background-color: #071426;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 3px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d32f2f;
}
</style>








