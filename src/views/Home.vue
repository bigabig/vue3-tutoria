<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Calculator />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Calculator from "@/components/CalculatorNEW.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Calculator,
  },
});
</script>
