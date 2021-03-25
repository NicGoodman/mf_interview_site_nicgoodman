<template>
  <article id="" class="bg-white rounded-3xl shadow-xl w-full mb-5 p-9 max-w-4xl">
    <h4 class="font-bold text-mf-mid-gray">{{ headline }}</h4>
    <img :src="thumbnail" alt="" class="w-64 h-64 object-cover rounded-full border-red-600 border-4">
  </article>
</template>

<script>
export default {
  name: "LatestCard",
  props: ["headline", "thumbnail", "promo"],
};
</script>