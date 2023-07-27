<template>
  <div class="home">
    <nav-bar />
    <br />
    <br />
    <div class="actions-container">
      <div class="action-link">
        <router-link to="/upload-quiz" class="link"
          ><i class="fa fa-upload" aria-hidden="true"></i> Post your
          quiz</router-link
        >
      </div>
      <div class="action-link">
        <router-link to="/profile" class="link"
          ><i class="fa fa-user" aria-hidden="true"></i> Profile</router-link
        >
      </div>
    </div>
    <div class="search-container">
      <input
        type="text"
        v-model="searchText"
        placeholder="Search quiz"
        @keyup="search"
        class="search-input"
      />
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>

    <br />
    <br />
    <label for="level">Choose a level:</label>

    <select
      name="level"
      id="cards"
      v-model="selected_level"
      @change="filter_level"
    >
      <option value="">All Levels</option>
      <option value="1">Level 1</option>
      <option value="2">Level 2</option>
      <option value="3">Level 3</option>
    </select>
    <br />
    <br />
    <div class="quizzes-container">
      <div v-for="(quiz, index) in quizzes" :key="index" class="quiz-card">
        <h2>{{ quiz.title }}</h2>
        <div class="quiz-details">
          <div class="uploader">Uploaded by: {{ quiz.uploader }}</div>
          <div class="topics">Topics: {{ quiz.related }}</div>
        </div>
        <div class="quiz-actions">
          <button class="try-quiz-button" @click="go_to_quiz(index)">
            Try this quiz
          </button>
          <button
            v-if="
              quiz.uploader === currentUser.username ||
              currentUser.username === 'admin'
            "
            class="edit-quiz-button"
            @click="edit(index)"
          >
            Edit
          </button>
          <button
            v-if="
              quiz.uploader === currentUser.username ||
              currentUser.username === 'admin'
            "
            class="delete-quiz-button"
            @click="deleteQuiz(index)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../page/Navbar/NavBar.vue";
export default {
  components: { NavBar },

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
      quizzes: JSON.parse(localStorage.getItem("quizzes")),
      currentUser: JSON.parse(localStorage.getItem("duplicate")) || [],
      selected_level: "",
      searchText: "",
    };
  },

  methods: {
    go_to_quiz(index) {
      localStorage.setItem("index", index);
      this.$router.push("/try-quiz");
    },

    edit(index) {
      localStorage.setItem("index", index);
      this.$router.push("/edit-quiz");
    },

    filter_level() {
      this.quizzes = JSON.parse(localStorage.getItem("quizzes"));
      this.$store.dispatch("filter_level", {
        quizzes: this.quizzes,
        selected_level: this.selected_level,
      });
      this.quizzes = this.$store.getters.get_filterQuize;
    },

    deleteQuiz(index) {
      this.quizzes.splice(index, 1); // Remove the quiz from the array

      // Update local storage with the modified quizzes array
      localStorage.setItem("quizzes", JSON.stringify(this.quizzes));
    },

    search() {
      this.quizzes = JSON.parse(localStorage.getItem("quizzes"));
      this.$store.dispatch("search", {
        searchText: this.searchText,
        quizzes: this.quizzes,
      });
      this.quizzes = this.$store.getters.get_searchQuize;
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.link {
  text-decoration: none;
  color: #666;
}
.actions-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.action-link {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-left: 10px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.action-link:hover {
  background-color: #e0e0e0;
}

.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
}

.search-icon {
  margin-left: 10px;
  color: #999;
  cursor: pointer;
}

.quizzes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.quiz-card {
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.quiz-card h2 {
  margin-top: 0;
  font-size: 20px;
  color: #333;
}

.quiz-details {
  margin-bottom: 10px;
}

.uploader,
.topics {
  font-size: 14px;
  color: #666;
}

.quiz-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.try-quiz-button,
.edit-quiz-button,
.delete-quiz-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-quiz-button,
.delete-quiz-button {
  background-color: #dc3545;
}

.edit-quiz-button:hover,
.delete-quiz-button:hover {
  background-color: darken(#dc3545, 10%);
}

/* Animation */
.quiz-card {
  opacity: 0;
  animation: fade-in 0.5s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
