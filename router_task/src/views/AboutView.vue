<template>
  <div class="about">
    <header-comp />

    <div class="About-us">
      <h1>About Us</h1>
      <img
        src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1628677506-101156.png"
      />
      <p>
        Our mission is to empower young Students to be the inventors and
        creators.
      </p>
      <hr />
      <p>
        In a world where so much is being done for technology and so little for
        the environment, education is not even a part of most discussions.
      </p>
      <p>
        We at Studytonight believe that by widening the reach of education, by
        making it freely available, so much can be achieved.
      </p>
      <p>
        And this journey started in 2013 when a young boy thought "wouldn't it
        be great, to have a website, with simple tutorials for programming
        languages, just like a friend would teach you!", and Studytonight was
        born.
      </p>
      <h3>follow us on</h3>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-linkedin"></a>
    </div>
    <footer-comp />
  </div>
</template>

<script>
import FooterComp from "../components/FooterComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
export default {
  components: { HeaderComp, FooterComp },

  beforeRouteEnter(to, from, next) {
    console.log(
      "%cThis is beforeRoute Enter",
      "background: red; color: #ffffff"
    );

    console.log(to, "klashdhcfdrgsctrdgshnm");

    next();
  },

  beforeRouteLeave(to, from, next) {
    console.log(
      "%cThis is beforeRoute leave",
      "background: red; color: #ffffff"
    );
    next();
  },

  methods: {
    test() {
      this.$router.replace({
        name: "homepage",
        params: { name: this.credentials.name },
        query: { psw: this.credentials.psw },
      });
    },
  },
};
</script>

<style scoped>
.About-us {
  width: 100%;
  text-align: center;
  background-color: #ccc;
  margin-top: 30px;
  margin-bottom: 30px;
   margin-top: 0px;
}
h1 {
  color: red;
  font-size: 35px;
}
img {
  border-radius: 50%;
}

p {
  font-size: 20px;
}

a {
  padding: 20px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
 
  background: #3b5998;
  color: white;
  border-radius: 8px;
  font-size: 50px;
}
</style>