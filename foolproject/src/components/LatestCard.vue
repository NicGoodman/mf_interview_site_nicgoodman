<template>
  <article
    id=""
    class="bg-white rounded-3xl shadow-xl w-full mb-5 p-9 max-w-4xl flex flex-row"
  >
    <img
      :src="thumbnail"
      alt=""
      class="w-64 h-64 object-cover rounded-full border-red-600 border-4"
    />
    <section id="article-preview" class="flex flex-col ml-6">
      <h4 class="font-bold text-mf-mid-gray border-b-4 border-mf-red pb-4 mb-1">
        {{ headline }}
      </h4>
      <section
        id="author-date-bar"
        class="text-mf-mid-gray font-medium mb-3 self-start"
      >
        <p v-for="author in authors" :key="author.fool_uid" class="inline">
          {{ author.byline }} •
        </p>
        <p class="inline">
          {{
            publishedDate
              | dateParse("YYYY-MM-DD HH:mm:ss")
              | dateFormat("DD.MM.YYYY")
          }}
        </p>
      </section>
      <p class="text-mf-mid-gray font-medium">{{ promo }}</p>
      <section id="see-more-content" class="flex flex-row justify-between items-center mt-6">
        <a href="" class="mt-auto w-max button">Read More</a>
        <section id="tag-bar" class="text-white font-medium text-center">
          <p
            v-for="tag in tags"
            :key="tag.uuid"
            class="text-xs inline-block bg-mf-blue rounded-full px-2 py-1 bg-opacity-25 m-1"
          >
            {{ tag.name }}
          </p>
        </section>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: "LatestCard",
  props: ["headline", "thumbnail", "promo", "publishedDate", "authors", "tags"],
};
</script>