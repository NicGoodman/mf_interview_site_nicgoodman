<template>
  <article
    id=""
    class="bg-white rounded-3xl shadow-xl w-full max-w-xs m-10 p-4 flex flex-col items-center"
  >
    <router-link
      :to="{
        name: 'article',
        params: {
          collectionSlug: collectionSlug,
          headlineSlug: headline,
          headline: headline,
          publishedDate: publishedDate,
          authors: authors,
          tags: tags,
          body: body,
          stocks: stocks,
        },
      }"
      ><h5 class="font-bold text-mf-blue">{{ headline }}</h5></router-link
    >
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
    <section id="" class="flex flex-row mb-3">
      <img
        :src="thumbnail"
        alt=""
        class="w-28 h-28 object-cover rounded-full border-red-600 border-4 mr-2"
      />
      <p class="text-mf-mid-gray font-medium">{{ promo }}</p>
    </section>
    <section id="see-more-content" class="flex flex-col items-center mt-auto">
      <router-link
        :to="{
          name: 'article',
          params: {
            collectionSlug: collectionSlug,
            headlineSlug: headline,
            headline: headline,
            publishedDate: publishedDate,
            authors: authors,
            tags: tags,
            body: body,
            stocks: stocks,
          },
        }"
      >
        <p class="w-max button">Read More</p>
      </router-link>
      <section id="tag-bar" class="text-white font-medium mt-6 text-center">
        <p
          v-for="tag in tags"
          :key="tag.uuid"
          class="text-xs inline-block bg-mf-blue rounded-full px-2 py-1 bg-opacity-25 m-1"
        >
          {{ tag.name }}
        </p>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: "ArticleCard",
  props: [
    "headline",
    "thumbnail",
    "promo",
    "publishedDate",
    "authors",
    "tags",
    "collectionSlug",
    "body",
    "stocks",
  ],
};
</script>


