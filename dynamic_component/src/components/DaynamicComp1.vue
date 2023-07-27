<template>
  <div>
    <h3>dynamic comp 1</h3>

    <p>
      Vue.js Dynamic Components allows the users to switch over the components
      without updating the route of the Vue.js application itself. It also keeps
      the data in its current state. It is useful when the user is in a tabbed
      interface.
    </p>
    <p>
      we have two components and we have imported them into the App.vue file.
      Now we can toggle between the components without reloading the page.
    </p>
    <p>
      Vue.js Dynamic Components Attribute:
      <br />
      :is - This field accepts a name string for the registered component or an
      actual component.

      <!-- syntex : <component :is="currentComponent" /> -->
      <input
        type="text"
        name=""
        id=""
        placeholder="data will NOT be as it was"
      />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>