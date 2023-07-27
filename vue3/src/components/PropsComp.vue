<template>
  <div>
    <p>
      Note that if you destructure the props object, the destructured variables
      will lose reactivity. It is therefore recommended to always access props
      in the form of props.xyz
    </p>
    {{ msg }}

    <p>
      <b>
        If you really need to destructure the props, or need to pass a prop into
        an external function while retaining reactivity, you can do so with the
        toRefs() and toRef() utility APIs:
      </b>
    </p>

    {{ title }}
  </div>
</template>

<script>
import { toRefs, toRef } from "vue";
export default {
  props: ["msg", "title"],

  setup(props) {
    //Note that if you destructure the props object, the destructured variables will lose reactivity.
    //It is therefore recommended to always access props in the form of props.xyz
    console.log(props.msg);

    //
    const { title } = toRefs(props);
    console.log(title.value);

    // OR, turn a single property on `props` into a ref
    const title2 = toRef(props, "title");
    console.log(title2);
  },
};
</script>

<style>
</style>