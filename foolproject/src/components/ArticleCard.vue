<template>
  <article id="" class="bg-white rounded-3xl shadow-xl w-1/3">
    <h1>{{ headline }}</h1>
  </article>
</template>

<script>
export default {
  name: "ArticleCard",
  props: ["headline"],
};
</script>