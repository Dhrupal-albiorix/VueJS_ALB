<template>
  <div>
    <nav-bar />
    <div class="user_info">
      <img
        :src="`https://api.slingacademy.com/public/sample-photos/${n + 1}.jpeg`"
        alt=""
        class="img"
      />

      <div v-for="(user, index) in users" :key="index">
        <div v-if="index == visite_user">
          <div class="users_continer">
            <div class="user_info">
              <div>
                <h1>
                  {{ user.username }}
                </h1>
              </div>
              <div>
                <h3>
                  {{ user.usermail }}
                </h3>
              </div>
              <div>
                <span>
                  <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                  : {{ user.userpsw }}
                </span>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="mark_continer">
            <div class="marks">
              <div>
                <h4>Score</h4>
              </div>
              <div
                v-for="(user_mark, user_mark_index) in user.marks"
                :key="user_mark_index"
              >
                {{ user_mark_index }}: {{ user_mark }}
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="quiz_continer">
            <div class="quize_info">
              <div>
                <h4>Uploaded quiz</h4>
              </div>
              <div v-for="(quiz, quizIndex) in quizes" :key="quizIndex">
                <span v-if="quiz.uploader === user.username">{{
                  quiz.title
                }}</span>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NavBar from "../page/Navbar/NavBar.vue";
export default {
  beforeRouteEnter(to, from, next) {
    let a = localStorage.getItem("admin");
    const isAuthenticated = localStorage.getItem("duplicate");
    console.log(a);
    if (a != "true" || !isAuthenticated) {
      next("/login");
    } else {
      next();
    }
  },

  components: { NavBar },

  data() {
    return {
      users: JSON.parse(localStorage.getItem("users")) || [],
      quizes: JSON.parse(localStorage.getItem("quizzes")) || [],
      visite_user: localStorage.getItem("visit_user"),
      n: 1,
    };
  },
};
</script>

<style scoped>
.user_info {
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

.mark_continer {
  display: inline-block;
  width: 230px;
}
.marks,
.quize_info,
.quize_info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.852);
}

.quiz_continer,
.users_continer {
  display: inline-block;
  width: 230px;
}
</style>
