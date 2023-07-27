<template>
  <div>
    <div class="card">
      <img
        :src="`https://api.slingacademy.com/public/sample-photos/${n + 1}.jpeg`"
        alt=""
        class="img"
      />
      <div v-for="(user, index) in users" :key="index">
        <div>
          <div>
            <div
              v-if="currentUser.username === user.username"
              class="user-container"
            >
              <div>
                <h1>{{ user.username }}</h1>
              </div>

              <div>
                <div class="mail">{{ user.usermail }}</div>
              </div>

              <div class="score_bord">
                <h3>Quiz Score</h3>
                <div v-for="(mark, mark_index) in user.marks" :key="mark_index">
                  <div class="score">{{ mark_index }} : {{ mark }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="quiz_bord">
        <h3>uploaded quiz</h3>
        <div
          v-for="(quiz, quizIndex) in quizes"
          :key="quizIndex"
          class="quiz-container"
        >
          <div v-if="quiz.uploader === currentUser.username" class="quiz-title">
            {{ quiz.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      users: JSON.parse(localStorage.getItem("users")) || [],
      currentUser: JSON.parse(localStorage.getItem("duplicate")) || [],
      quizes: JSON.parse(localStorage.getItem("quizzes")) || [],
      n: 1,
    };
  },

  created() {
    this.n = Math.floor(Math.random() * 11);
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}
.img {
  width: 80px;
  height: 80px;
  border: 1px solid black;
  border-radius: 50%;
}

.user-container {
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.mail {
  color: grey;
  font-size: 18px;
}

.user-info {
  margin-bottom: 10px;
}

.score_bord {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(88, 85, 85, 0.2);
  padding: 12px;
}

.user-info div {
  margin-bottom: 5px;
}


</style>

