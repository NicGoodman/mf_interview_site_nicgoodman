<template>
  <main id="homepage-content" class="flex flex-col w-full bg-mf-gold">
    <img
      src="../assets/hero-bg.svg"
      alt=""
      class="w-full h-auto absolute top-0 left-0 z-0"
    />
    <section
      id="hero"
      class="flex flex-row flex-wrap justify-center px-16 w-full bg-cover bg-bottom z-20"
    >
      <HeaderSection />
      <h1 class="font-black text-white text-shadow-xl mr-16">
        Latest<br />News
      </h1>
      <LatestCard
        :headline="tenPromiseArticles[0].headline"
        :thumbnail="tenPromiseArticles[0].images[0].url"
        :promo="tenPromiseArticles[0].promo"
        :authors="tenPromiseArticles[0].authors"
        :publishedDate="tenPromiseArticles[0].publish_at"
        :tags="tenPromiseArticles[0].tags"
      />
    </section>
    <section id="" class="flex flex-row flex-wrap w-full justify-center z-20">
      <ArticleCard
        v-for="article in articles"
        :key="article.uuid"
        :headline="article.headline"
        :thumbnail="article.images[0].url"
        :promo="article.promo"
        :authors="article.authors"
        :publishedDate="article.publish_at"
        :tags="article.tags"
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