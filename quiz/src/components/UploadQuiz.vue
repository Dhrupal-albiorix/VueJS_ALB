<template>
  <div class="create-quiz">
    <form @submit.prevent="submitQuiz">
      <div class="quiz-info">
        <label for="title">Quiz Title:</label>
        <input type="text" id="title" v-model="quiz.title" required />
        <br />
        <span class="uploader">Uploader: {{ quiz.uploader }}</span>
      </div>
      <div class="question-section">
        <label for="questions">Add Questions:</label>
        <br />
        <br />

        <div class="level-section">
          <span class="level-label">Decide level:</span>
          <input type="number" v-model="quiz.level" min="0" max="3" required />
        </div>
        <br />

        <div class="related-topic-section">
          <span class="related-label">Related topic:</span>
          <input type="text" v-model="quiz.related" required />
        </div>
        <br />

        <div
          v-for="(question, questionIndex) in quiz.questions"
          :key="questionIndex"
          class="question-container"
        >
          <br />
          <br />
          <br />
          <div class="question-input">
            <span class="question-label">Question:</span>
            <input type="text" v-model="question.questionText" required />
          </div>
          <br />
          <br />
          <div class="correct-answer-input">
            <span class="correct-answer-label">Correct Answer:</span>
            <input type="text" v-model="question.correctAnswer" required />
          </div>
          <br />
          <br />

          <div
            v-for="(option, optionIndex) in question.options"
            :key="optionIndex"
            class="option-container"
          >
            <span class="option-label">Option:</span>
            <input type="text" v-model="option.text" required />
            <button
              type="button"
              @click="removeOption(questionIndex, optionIndex)"
              class="remove-option-button"
            >
              Remove Option
            </button>
          </div>
          <button
            type="button"
            @click="addOption(questionIndex)"
            class="add-option-button"
          >
            Add Option
          </button>
          <button
            type="button"
            @click="removeQuestion(questionIndex)"
            class="remove-question-button"
          >
            Remove Question
          </button>
        </div>
        <br /><br />
        <button type="button" @click="addQuestion" class="add-question-button">
          Add Question
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <button type="submit" class="submit-button">
        Submit Your Quiz as New Quiz
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    Userquiz: {
      type: Object,
      default: () => ({
        title: "",
        questions: [],
        uploader: "",
        level: 0,
        related: "",
      }),
    },
  },
  data() {
    return {
      quiz: this.Userquiz,
    };
  },

  created() {
    let uploderProfile = JSON.parse(localStorage.getItem("duplicate"));
    this.quiz.uploader = uploderProfile.username;
  },

  methods: {
    addOption(questionIndex) {
      this.quiz.questions[questionIndex].options.push({ text: "" });
    },
    removeOption(questionIndex, optionIndex) {
      this.quiz.questions[questionIndex].options.splice(optionIndex, 1);
    },
    addQuestion() {
      this.quiz.questions.push({
        questionText: "",
        correctAnswer: "",
        options: [],
      });
    },
    removeQuestion(questionIndex) {
      this.quiz.questions.splice(questionIndex, 1);
    },
    submitQuiz() {
      // Dispatch an action to Vuex store to handle the quiz submission
      this.$store.dispatch("createQuiz", this.quiz);
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.create-quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h2 {
  text-align: center;
}

.quiz-info {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.uploader {
  display: block;
}

.question-section {
  margin-bottom: 20px;
}

.level-section,
.related-topic-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.level-label,
.related-label {
  font-weight: bold;
  margin-right: 10px;
}

.question-container {
  margin-bottom: 20px;
}

.question-input,
.correct-answer-input,
.option-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.question-label,
.correct-answer-label,
.option-label {
  font-weight: bold;
  margin-right: 10px;
}

.button-group {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.remove-option-button {
  background-color: #071426;
}

.add-option-button {
  background-color: #a01a58;
}

.remove-question-button {
  background-color: #205f8a;
}

.add-question-button {
  background-color: #dd6f48;
}

.submit-button {
  background-color: #1f4068;
}

.remove-option-button,
.add-option-button,
.remove-question-button,
.add-question-button,
.submit-button {
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;
}

.remove-option-button:hover,
.add-option-button:hover,
.remove-question-button:hover,
.add-question-button:hover,
.submit-button:hover {
  background-color: #d32f2f;
}
</style>
