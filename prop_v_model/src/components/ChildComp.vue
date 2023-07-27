<!-- ChildComp.vue -->
<template>
  <div>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <input v-model="localTitle" @input="updateTitle" />
      <textarea v-model="localContent" @input="updateContent"></textarea>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ['title', 'content'], // Corrected: Use strings for props

  setup(props, { emit }) {
    const localTitle = ref(props.title);
    const localContent = ref(props.content);

    const updateTitle = () => {
      emit("update:title", localTitle.value); // Corrected: Use kebab-case
    };

    const updateContent = () => {
      emit("update:content", localContent.value); // Corrected: Use kebab-case
    };

    return {
      localTitle,
      localContent,
      updateTitle,
      updateContent,
    };
  },
};
</script>


