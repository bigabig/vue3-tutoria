<template>
  <h3>Calculator</h3>
  <form>
    <input type="number" v-model="num1" />
    <input type="number" v-model="num2" />
  </form>
  <p>Result: {{ sum }}</p>
  <strong>{{ fact }}</strong>
</template>

<script lang="ts">
import useAddition from "@/modules/use-addition";
import useNumbersApi from "@/modules/use-api";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { num1, num2, sum } = useAddition();
    const { fact } = useNumbersApi(sum);

    return {
      num1,
      num2,
      sum,
      fact,
    };
  },
});
</script>

<style scoped></style>
