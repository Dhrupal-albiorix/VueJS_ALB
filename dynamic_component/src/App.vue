<template>
  <div id="app">
    <HelloWorld />
    <DaynamicComp1 />
    <daynamic-comp-2 />

    <div>
      <component :is="currentComponent" :props="componentProps" />
      <button @click="toggle">Toggle</button>
    </div>

    <div>
      <KeepAlive>
        <component :is="currentComponent2" />
      </KeepAlive>
      <button @click="toggle2">Toggle2</button>
    </div>
  </div>
</template>

<script>
import DaynamicComp1 from "./components/DaynamicComp1.vue";
import DaynamicComp2 from "./components/DaynamicComp2.vue";
import HelloWorld from "./components/HelloWorld.vue";
import KeepAlive1 from "./components/KeepAlive1.vue";
import KeepAlive2 from "./components/KeepAlive2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    DaynamicComp1,
    DaynamicComp2,
    KeepAlive1,
    KeepAlive2,
  },

  data() {
    return {
      currentComponent: "DaynamicComp1",
      currentComponent2: "KeepAlive1",
      componentProps: {
        female: (color = "red"),
        male: ["black"],
        child: ["mix"],
      },
    };
  },

  methods: {
    toggle() {
      this.currentComponent =
        this.currentComponent === "DaynamicComp1"
          ? "DaynamicComp2"
          : "DaynamicComp1";
    },

    toggle2() {
      this.currentComponent2 =
        this.currentComponent2 === "KeepAlive1" ? "KeepAlive2" : "KeepAlive1";
    },
  },
};
</script>

