<template>
  <!-- <div>Welcome to Vue</div> -->
  <!-- 3: use the component in the template -->
  <!-- <HelloWorld />
  <Counter :max="20"/>
  <Counter :max="10"/> -->
  <Bank />
</template>

<script>
// 1: import the component
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import Bank from "./components/Bank.vue";
export default {
  // 2: register the component
  components: {
    HelloWorld,
    Counter,
    Bank,
  },
};
</script>
