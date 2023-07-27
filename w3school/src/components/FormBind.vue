<template>
  <div>
    <p>
      ////////////////////////////////////////////////////////////////////////////////////////////
    </p>

    <div>
      <h1>V-Modle</h1>
    </div>

    <div>v-bind : one way binding</div>
    <div>v-model : two way binding</div>

    <div>
      <p>
        <!-- <input type="text" name="" id="" v-bind="namebind" /> :
      <p>{{ namebind }}</p> -->
      </p>

      <p>
        this will not change p with change in input value while typing
        input...it will be fied as given in data property...i.e data will not
        chage with change in input..
        <br />
        but input will change as change in data ----One way binding
      </p>
    </div>

    <div>
      <p>
        <!-- <input type="text" name="" id="" v-model="namebind" /> :
      <p>{{ namebind }}</p> -->
      </p>
      <p>
        p will change with chnage in input filed ..data will be bind to input
        and input will be bind to data ---both will change according to each
        other
      </p>
    </div>

    <form action="">
      <label for="name">name</label>
      <br />
      <input type="text" name="" id="" v-model="namebind" /> :
      <p>{{ namebind }}</p>

      <!-- <input type="text" name="" id="" v-bind="namebind" /> :
      <p>{{ namebind }}</p> -->

      <br />
      <br />

      <label for="languge">languge</label>
      <br />
      <select v-model="dropValue">
        <option>Please select one</option>
        <option>Java</option>
        <option>Javascript</option>
        <option>Php</option>
        <option>C</option>
        <option>C++</option>
      </select>
      :
      <p>{{ dropValue }}</p>

      <br />
      <br />
      <label for="color">color</label>
      <br />
      <input type="radio" id="black" value="Black" v-model="picked" />black
      <input type="radio" id="white" value="White" v-model="picked" />white :
      <p>{{ picked }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namebind: "binded with name",
      dropValue: "Java",
      picked: "Black",
    };
  },
};
</script>