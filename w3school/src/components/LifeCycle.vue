<template>
  <div>
    <div>
      <h1>Introduction to Life cycle in Vue2</h1>
    </div>

    <div>
      <a
        href="https://javascript.plainenglish.io/vue-lifecycle-hooks-75d296e7ef8"
        >javascript-plainenglish-io/</a
      >

      beforeCreate : The beforeCreate hook runs at the initialization of your
      component - data has not been made reactive, and events have not been set
      up yet:
      <br />
      created : The created hook runs before the templates and Virtual DOM have
      been mounted or rendered - you are able to access reactive data and events
      that are active
      <br />
      <p>
        Mounting hooks are often the most used hooks. They allow you to access
        your component immediately before and after the first render. They do
        not, however, run during server-side rendering.
      </p>
      <br />
      <p>
        Use mounting hooks if you need to access or modify the DOM of your
        component immediately before or after the initial render.
        <b
          >Do not use mounting hooks if you need to fetch some data for your
          component on initialization.</b
        >
      </p>
      <h3>
        Note: Use created (or created and activated for keep-alive components)
        for this instead. Especially if you need that data during server-side
        rendering.
      </h3>
      <br />
      beforeMount : The beforeMount hook runs right before the initial render
      happens and after the template or render functions have been compiled

      <br />
      <a
        href="https://stackoverflow.com/questions/57077104/when-to-use-the-lifecycle-method-beforemount-in-vue-js"
        >usecase</a
      >
      beforeMount hook is starting to compile and render the HTML template. Vue
      creates a template based on our HTML code combine with the data properties
      and uses this template to create the real HTML code which then is rendered
      as the DOM in the mounted hook.
      <br />
      mounted : In the mounted hook, you will have full access to the reactive
      component, templates, and rendered DOM (via this.$el). Use mounted for
      modifying the DOM—particularly when integrating non-Vue libraries
      <br />
      <p>
        Updating hooks are called whenever a reactive property used by your
        component changes or something else causes it to re-render. They allow
        you to hook into the watch-compute-render cycle for your component.
      </p>
      <br />
      Use updating hooks if you need to know when your component re-renders,
      perhaps for debugging or profiling.
      <br />

      <br />

      <b
        >Do not use updating hooks if you need to know when a reactive property
        on your component changes. Use computed properties or watchers for that
        instead.</b
      >

      beforeUpdate : The beforeUpdate hook runs after data changes on your
      component and the update cycle begins, right before the DOM is patched and
      re-rendered. Use beforeUpdate if you need to get the new state of any
      reactive data on your component before it gets rendered:
      <br />

      updated : The updated hook runs after data changes on your component and
      the DOM re-renders. Use updated if you need to access the DOM after a
      property change:

      <br />
      beforeUnmount<br />
      unmounted<br />
      errorCaptured<br />
      renderTracked<br />
      renderTriggered<br />
      activated<br />
      deactivated<br />
      serverPrefetch
    </div>

    <div>
      <div ref="example-element">{{ propertyComputed }}</div>
      <div ref="example-element2">{{ counter }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      property: "Example property",
      counter: 0,
    };
  },

  computed: {
    propertyComputed() {
      return this.property;
    },
  },

  beforeCreate() {
    console.log("beforeCreate hook");
    console.log("At this point, events and lifecycle have been initialized.");
    // Perform any necessary setup or initialization tasks
  },
  created() {
    console.log("created hook");
    this.property = "Example property updated.";
    console.log(
      "At this point, this.property is now reactive and propertyComputed will update."
      );
    console.log(this.property);
    console.log(
      "Later in the lifecycles,{{ propertyComputed }} will appear as Example property updated instead of Example property."
    );

    // setInterval(() => {
    //   this.counter++;
    // }, 1000);
    // Fetch data from an API or perform asynchronous initialization
  },
  beforeMount() {
    console.log("beforeMount hook");
    // Manipulate the DOM, set up third-party libraries, or register event listeners
    console.log(`At this point, vm.$el has not been created yet.`);
  },
  mounted() {
    console.log("mounted hook");
    console.log(
      `At this point, vm.$el has been created and el has been replaced.`
    );
    console.log(this.$el.textContent); // Example component.
    // Interact with the component's rendered DOM, start animations, or initialize plugins
  },
  beforeUpdate() {
    console.log("beforeUpdate hook");
    // Perform actions or cleanup before the component's DOM is updated
    console.log(
      `At this point, Virtual DOM has not re-rendered or patched yet.`
    );
    // Logs the counter value every second, before the DOM updates.
    // console.log(this.counter);
  },
  updated() {
    console.log("updated hook");
    // Interact with the updated DOM, perform calculations, or trigger animations
    console.log(`At this point, Virtual DOM has re-rendered and patched.`);
    // Fired every second, should always be true
    // console.log(+this.$refs["example-element2"].textContent === this.counter);
  },
  // beforeDestroy() {
  //     console.log("beforeDestroy hook");
  //     // Clean up event listeners, timers, or subscriptions
  // },
  // destroyed() {
  //     console.log("destroyed hook");
  //     // Perform final cleanup tasks or release resources
  // }
};
</script>