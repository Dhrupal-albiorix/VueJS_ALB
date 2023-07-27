<template>
  <div class="home">
    <p>
      <b>notes : </b>
      <a href="https://www.codingame.com/playgrounds/6661/vuex-tutorial"
        >coding games</a
      >
    </p>
    <p>
      Vuex is a state management pattern + library. It is work as a centralized
      storage of our data for the whole application. The basic concept is
      derived from React's Redux and Flux library
    </p>
    <p>
      If you are using Vuex, then you will have only one Single store for each
      VueJS powered application. Vuex Store is Singleton source of State. Our
      store contains application state. State management in VueJS with Vuex is
      straightforward. You just need to modify the state via dispatching the
      action and not directly because we want to predict the future states. Our
      store contains application state.
    </p>
    <p>
      The only way to change the state in a Vuex store is by committing a
      mutation. We can directly change the state, but we will not do it because
      we need a snap shot for every step of our project. We need to predict the
      next state. For the debugging purpose, we will not mutate the state
      directly, but via mutations.
    </p>
    <p>
      If you want to share the state with the other fellow components then and
      then, you need to use Vuex. Shared state phenomenon uses this kind of
      libraries. So after understanding the project, if a particular state is
      consumed by multiple components then and then you have to use Vuex.
    </p>

    <br />
    <br />
    <br />
    <a href="https://codesource.io/getting-started-with-vuex-a-beginners-guide/"
      >codesource</a
    >
    <p>
      In a typical Vue.js application, components need to access data in the
      store and in other cases need to update the data in the store. In the
      store, there is a state object which holds every stored data.
      <br />
      This is what the state looks like
      <br />
      state:{ // put variables and collections here }
      <br />
      To access data in the store, we use the:
      <br />
      getters:{ //code goes here }
      <br />
      To call the mutations in Vue.js components, we use the:
      <br />
      actions:{ //code goes here }
      <br />
      To update or change the data in the store, we use the:
      <br />
      mutations:{ //code goes here }
    </p>

    <br />
    <br />
    <br />
    <b>state is a property of the store.</b>
    <p>state: { apple: '' }</p>
    <p>
      hear <b>apple:'' </b> can be accessed, changed or updated from any
      component within the app using getters and mutations.
    </p>
    <br /><br />
    <b>Getters </b>
    <p>
      Getters provide a way of retrieving the values we want from the state
      object. A getter’s result is cached based and will only re-evaluate when
      some of its dependencies have changed. They are a lot similar to computed
      properties for stores. Getters expect the state to be passed in as an
      argument like so:
    </p>
    <p>getters: { getApple: state => { return state.apple } }</p>
    <p>
      from the above, the getApple method in the getters can be used to access
      the value of apple in the state object for ex :
    </p>
    <p>mutations: { changeAppleValue(state, apple) { state.apple = apple } }</p>
    <br />
    <p>  
      The mutations object can be called easily in components using :
      <br />
      <b>this.$store.commit('changeAppleValue', value)</b>
    </p>
    <p>
      <b>The commit( ) method:</b>
      Noticed we used the commit method to call the mutation and the respective
      state value. This method accepts the mutation name as the first parameter
      and the payload as the second parameter. The commit method is used to call
      the mutation.
    </p>
    <br />
    <p>
      <b>Actions:</b>
      Actions are functions that don’t change the state themselves. Instead,
      they commit mutations after performing some logic (which is often
      asynchronous).
      <br />
      Actions are similar to mutations, the differences being that: Instead of
      mutating the state, actions commit mutations. Actions can contain
      arbitrary asynchronous operations.
    </p>
    <b>ex : </b>
    <div>
      <p>state: { count: 0 },</p>
      <p>mutations: { increment (state) { state.count++ } },</p>
      <p>actions: { increment (context) { context.commit('increment') } }</p>
      <br />
      <p>The action in our example above can be called like so:</p>
      <p>store.dispatch('increment')</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
