<template>
  <article id="" class="bg-white rounded-3xl shadow-xl w-1/3">
    <h1>{{ headline }}</h1>
    <img :src="thumbnail" alt="" class="w-64 h-64 object-cover rounded-full border-red-600 border-4">
  </article>
</template>

<script>
export default {
  name: "ArticleCard",
  props: ["headline", "thumbnail"],
};
</script>