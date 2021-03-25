<template>
  <article
    id=""
    class="bg-white rounded-3xl shadow-xl w-full max-w-xs m-10 p-4"
  >
    <h5 class="font-bold text-mf-blue">{{ headline }}</h5>
    <section id="author-date-bar" class="text-mf-mid-gray font-medium">
      <p>
        {{
          publishedDate
            | dateParse("YYYY-MM-DD HH:mm:ss")
            | dateFormat("DD.MM.YYYY")
        }}
      </p>
    </section>
    <section id="" class="flex flex-row">
      <img
        :src="thumbnail"
        alt=""
        class="w-28 h-28 object-cover rounded-full border-red-600 border-4 mr-2"
      />
      <p class="text-mf-mid-gray font-medium">{{ promo }}</p>
    </section>
  </article>
</template>

<script>
export default {
  name: "ArticleCard",
  props: ["headline", "thumbnail", "promo", "publishedDate"],
};
</script>