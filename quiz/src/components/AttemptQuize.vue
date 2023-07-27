<template>
  <div class="quiz-container">
    <div>
      {{ quiz.title }}
    </div>

    <h1 v-if="questionindex === quiz.questions.length" class="score-heading">
      Your Score: {{ your_Score }} out of {{ quiz.questions.length }} <br />
      <br />
      <br />
      <router-link to="/" class="home-button">Home</router-link>
    </h1>
    <div
      v-for="(question, index) in quiz.questions"
      :key="index"
      class="question-container"
    >
      <div v-if="index === questionindex" class="question">
        <div class="question-text">
          {{ questionindex + 1 }} : {{ question.questionText }}
        </div>
        <div
          v-for="(opt, optindex) in question.options"
          :key="optindex"
          class="option-container"
        >
          <div class="option">
            <label :for="'option-' + index + '-' + optindex">{{
              opt.text
            }}</label>
            <input
              type="radio"
              :value="opt.text"
              :name="'question-' + index"
              v-model="selectedOption[index]"
              required
            />
          </div>
        </div>

        <button @click="next(question, index)" class="next-button">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    const isAuthenticated = localStorage.getItem("duplicate");
    if (!isAuthenticated) {
      next("/login"); // Redirect to login if the user is not authenticated
    } else {
      next(); // Proceed with the route if the user is authenticated
    }
  },

  data() {
    return {
      your_Score: 0,
      mark: 0,
      questionindex: 0,
      a: JSON.parse(localStorage.getItem("quizzes"))[
        localStorage.getItem("index")
      ].title,
      selectedOption: {},
      quiz: JSON.parse(localStorage.getItem("quizzes"))[
        localStorage.getItem("index")
      ],
      level: localStorage.getItem("level"),
    };
  },

  created() {
    this.questionindex = 0;
  },

  methods: {
    next(question, index) {
      const selectedOption = this.selectedOption[index];

      if (selectedOption == question.correctAnswer) {
        this.$store.dispatch("calculate_mark_one");
      } else {
        this.mark = 0;
      }
      this.mark = this.$store.getters.get_storedmark;

      this.$store.dispatch("increment_questionindex");
      this.questionindex = this.$store.getters.get_questionindex;

      if (this.questionindex === this.quiz.questions.length) {
        console.log("Quiz finished!");

        const currentUser = JSON.parse(localStorage.getItem("duplicate")) || [];
        const user_records = JSON.parse(localStorage.getItem("users")) || [];
        this.$store.dispatch("store_marks", {
          currentUser,
          user_records,
          a: this.a,
        });
        this.your_Score = this.mark;
      }
    },
  },
};
</script>


<style scoped>
.quiz-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.score-heading {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.home-link {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

.question-container {
  margin-bottom: 20px;
}

.question-text {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.option-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.option {
  display: flex;
  align-items: center;
}

.option label {
  margin-right: 10px;
}

.next-button {
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.next-button:hover {
  background-color: #d32f2f;
}

.home-button {
  background-color: #f5f5f5;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #333;
  color: #fff;
}
</style>
