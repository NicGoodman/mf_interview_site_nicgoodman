<template>
  <article
    id=""
    class="bg-white rounded-3xl shadow-xl w-full mb-5 p-4 md:p-9 max-w-4xl flex flex-row flex-wrap flex-1"
  >
    <img
      :src="thumbnail"
      alt=""
      class="w-48 h-48 xl:w-64 xl:h-64 mx-auto md:mx-0 object-cover rounded-full border-red-600 border-4"
    />
    <section id="article-preview" class="flex flex-col ml-0 md:ml-6 w-full md:w-auto md:flex-1">
      <router-link
        :to="{
          name: 'article',
          params: {
            collectionSlug: collectionSlug,
            headlineSlug: headlineSlug,
            headline: headline,
            publishedDate: publishedDate,
            authors: authors,
            tags: tags,
            body: articleBody,
            stocks: stocks,
            articles: articles,
          },
        }"
      >
        <h4
          class="font-bold text-mf-mid-gray border-b-4 border-mf-red pb-4 mb-1"
        >
          {{ headline }}
        </h4>
      </router-link>
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
    </section>
    <section
      id="see-more-content"
      class="flex flex-col justify-between items-center mt-6 w-full"
    >
      <router-link
        :to="{
          name: 'article',
          params: {
            collectionSlug: collectionSlug,
            headlineSlug: headlineSlug,
            headline: headline,
            publishedDate: publishedDate,
            authors: authors,
            tags: tags,
            body: articleBody,
            stocks: stocks,
            articles: articles,
          },
        }"
        ><p class="mt-auto w-max button">Read More</p></router-link
      >
      <section id="tag-bar" class="text-white font-medium text-center mt-6">
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
  name: "LatestCard",
  data() {
    return {
      headlineSlug: "",
      articleBody: "",
    };
  },
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
    "uuid",
    "tenPromiseArticles",
    "visible",
    "articles",
  ],
  created() {
    this.headlineSlug = this.headline
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    this.articleBody = this.body.replace("{%sfr%}", "");
  },
};
</script>