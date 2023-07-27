<template>
  <div>
    <div class="header-slot">
      <slot name="header"></slot>
    </div>

    <div>this is body..and body is not slot</div>
    <div class="proped-slot">
      <slot name="Middle_props"></slot>
    </div>
    <div class="footer-slot">
      <slot name="footer">
        <p>may i come in ?</p>
        <!-- <p>
          In the child component template, the content may i come in ? inside
          the slot name="footer" tag is a fallback content. It will only be
          displayed if the parent component does not provide any content for the
          footer slot. If you want the content may i come in ? to always be
          displayed, regardless of whether the parent component provides content
          for the footer slot or not, you can move it outside the slot element,
          like this: -->
        <!-- <div class="default-slot">
      <p>may i come in ?</p>
    </div> -->
        <!-- </p> -->
      </slot>
    </div>

    <div class="default-slot">
      <p>may i come in ? i am from deafult slot</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots, "slots child component");
    console.log(this.$slots.Middle_props, "slots child component-Middle_props");
    console.log(this.$slots.header, "slots child component header");
  },
};
</script>