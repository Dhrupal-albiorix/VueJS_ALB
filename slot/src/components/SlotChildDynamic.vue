<template>
  <div>
    <div>
      <div class="slot-content">
        <slot :name="slotName"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slotName"],
};
</script>