<template>
  <div>
    <div>
      <h1>Reactive and ref() 2 in Vue</h1>
    </div>

    <p>
      without the use of reactive or ref we won't be able to show change on
      template
    </p>

    <p>
      reactive is another Composition API method used for declaring reactive
      data. Unlike ref, reactive can only be initialized with an object. Each
      property of the object can be a different reactive variable, however.
    </p>

    <p>{{ data2.name }}</p>

  </div>
</template>

<script setup>


const data2 = {
  count: 0,
  name: "Peter Griffin",
  flag: false,
};

data2.name = "dljksfiy";
console.log(data2, "dsjkfdtfygr6u");

setTimeout(() => {
  data2.name = "LOl_jbsdh_Lol";
  console.log(data2, "LOl_jbsdh_Lol>>>>>>>>>");
}, 2000);


</script>