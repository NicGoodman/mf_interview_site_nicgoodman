<template>
  <main id="homepage-content" class="flex flex-col w-full bg-blue-500">
    <HeaderSection />
    <section id="" class="">
      <h1 class="font-black text-white shadow-2xl">Latest<br />News</h1>
      <LatestCard
        :headline="tenPromiseArticles[0].headline"
        :thumbnail="tenPromiseArticles[0].images[0].url"
      />
    </section>
    <section id="" class="flex flex-row flex-wrap w-full">
      <ArticleCard
        v-for="article in articles"
        :key="article.uuid"
        :headline="article.headline"
        :thumbnail="article.images[0].url"
      />
    </section>
  </main>
</template>

<script>
import axios from "axios";
import ArticleCard from "../components/ArticleCard.vue";
import LatestCard from "../components/LatestCard.vue";
import HeaderSection from "../components/HeaderSection.vue";

export default {
  name: "HomePage",
  data() {
    return {
      articles: [],
    };
  },
  computed: {
    tenPromiseArticles: function () {
      return this.articles.filter((article) => {
        return article.tags.some((tag) => tag.slug.includes("10-promise"));
      });
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/content")
      .then((response) => (this.articles = response.data.results));
  },
  props: {},
  components: {
    ArticleCard,
    LatestCard,
    HeaderSection,
  },
};
</script>