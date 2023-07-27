<template>
  <div class="hello">
    <h2>setup()</h2>
    <a href="https://deepgram.com/learn/diving-into-vue-3-setup-function"
      >Must read</a
    >
    <p>
      setup is a function, and it is also referred to as a 'hook' in a general
      sense because it is similar to the lifecycle methods in that timing is
      important. Setup runs before everything else - before all the lifecycle
      methods and the mounting of the component (although not before props are
      resolved, so you will have access to props in the setup function).
    </p>
    <p>
      A big difference from Vue 2 is that we won't be seeing the keyword this
      all over the place to reference data values inside a component. In Vue 3,
      this in the way it was used in the Options API is not available in the
      setup function since setup runs so early.
    </p>
    <p>
      setup must return an object. The object contains everything from within
      the scope of the setup function that you want to make available in the
      template.
    </p>
    <p>
      Variables aren't reactive in the setup function unless you use ref with
      them (or reactive)
    </p>
    <p>setup can take two arguments - props and context</p>
    <p>
      //-------------------------------------------------------------------------------------------------------------------//
    </p>
    <h2>props</h2>
    <props-parent />
    <p>
      //-------------------------------------------------------------------------------------------------------------------//
    </p>
    <h2>ref reactive</h2>
    <ref-reactive />
    <p>
      //-------------------------------------------------------------------------------------------------------------------//
    </p>
    <h2>Example of ref and reactive</h2>
    <ref-reactive-ex />
    <p>
      //-------------------------------------------------------------------------------------------------------------------//
    </p>
    <To_Ref />
    <p>
      //-------------------------------------------------------------------------------------------------------------------//
    </p>
    <function-comp />
    <p>
      //-------------------------------------------------------------------------------------------------------------------//
    </p>
    <computed-comp />
  </div>
</template>

<script>
import ComputedComp from "./ComputedComp.vue";
import FunctionComp from "./FunctionComp.vue";
import PropsParent from "./PropsParent.vue";
import RefReactive from "./RefReactive.vue";
import RefReactiveEx from "./RefReactiveEx.vue";
import To_Ref from "./To_Ref.vue";
export default {
  components: {
    PropsParent,
    RefReactive,
    RefReactiveEx,
    To_Ref,
    FunctionComp,
    ComputedComp,
  },
  name: "HelloWorld",
};
</script>


