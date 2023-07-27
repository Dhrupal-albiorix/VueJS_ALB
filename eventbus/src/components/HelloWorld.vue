<template>
  <button @click="emitGlobalClickEvent()">{{ clickCount }}</button>
</template>

<script>
import { EventBus } from '@/eventbus';

export default {
  data() {
    return {
      clickCount: 0
    }
  },

  methods: {
    emitGlobalClickEvent() {
      this.clickCount++;
      EventBus.$emit('clicked', this.clickCount);
    }
  }
}
</script>