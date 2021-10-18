<template>
  <h3>Calculator</h3>
  <!-- <form v-on:submit.prevent="add"> -->
  <form>
    <input type="number" v-model="state.num1" />
    <input type="number" v-model="state.num2" />
    <!-- <button type="submit">Add</button> -->
  </form>
  <p>Result: {{ sum }}</p>
  <strong>{{ state.fact }}</strong>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  Ref,
  ref,
  computed,
  watchEffect,
} from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      num1: 0,
      num2: 0,
      fact: "",
      // sum: 0,
    });
    // computed properties berechnen sich neu wenn sich abhaengige variablen ändern: num1, num2
    const sum = computed(() => state.num1 + state.num2);

    // watchEffect wird sofort ausgeführt, und immer wenn sich abhängige variablen ändern: sum
    watchEffect(async () => {
      const result = await fetch(`http://numbersapi.com/${sum.value}`);
      state.fact = await result.text();
    });

    // const num1: Ref<number> = ref(0);
    // const num2: Ref<number> = ref(0);
    // const sum: Ref<number> = ref(0);

    // function add(): void {
    // state.sum = state.num1 + state.num2;
    // }

    return {
      state,
      sum,
      // add,
    };
  },
});
</script>

<style scoped></style>
