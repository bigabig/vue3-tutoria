import { Ref, ref, watchEffect } from "vue";

export default function useNumbersApi(sum: Ref<number>) {
  const fact = ref("");

  watchEffect(async () => {
    const res = await fetch(`http://numbersapi.com/${sum.value}`);
    fact.value = await res.text();
  });

  return {
    fact,
  };
}
