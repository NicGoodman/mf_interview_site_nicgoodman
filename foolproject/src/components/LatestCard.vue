<template>
  <article id="" class="bg-white rounded-3xl shadow-xl w-full mb-5">
    <h1>{{ headline }}</h1>
  </article>
</template>

<script>
export default {
  name: "LatestCard",
  props: ["headline"],
};
</script>