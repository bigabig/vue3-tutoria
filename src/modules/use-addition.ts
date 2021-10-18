import { computed, ref } from "vue";

export default function useAddition() {
  const num1 = ref(0);
  const num2 = ref(0);
  const sum = computed(() => {
    return num1.value + num2.value;
  });

  return {
    num1,
    num2,
    sum,
  };
}
