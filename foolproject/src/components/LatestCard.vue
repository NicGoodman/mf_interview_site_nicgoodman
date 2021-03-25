<template>
  <article id="" class="bg-white rounded-3xl shadow-xl w-full mb-5">
    <h1>{{ headline }}</h1>
    <img :src="thumbnail" alt="" class="w-64 h-64 object-cover rounded-full border-red-600 border-4">
  </article>
</template>

<script>
export default {
  name: "LatestCard",
  props: ["headline", "thumbnail"],
};
</script>