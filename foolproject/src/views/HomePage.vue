<template>
  <main id="homepage-content" class="flex flex-col w-full bg-mf-gold px-16">
    <img
      src="../assets/hero-bg.svg"
      alt=""
      class="w-full h-auto absolute top-0 left-0 z-0"
    />
    <section
      id="hero"
      class="flex flex-row flex-wrap justify-center w-full bg-cover bg-bottom z-20 mb-20"
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
    <section
      id="older-articles-content"
      class="flex flex-row flex-wrap w-full justify-center z-20"
    >
      <FiltersSection :tags="tags" />
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
import HeaderSection from "../components/HeaderSection.vue";
import FiltersSection from "../components/FiltersSection.vue";
import LatestCard from "../components/LatestCard.vue";
import ArticleCard from "../components/ArticleCard.vue";

export default {
  name: "HomePage",
  data() {
    return {
      articles: [],
      tags: [],
    };
  },
  computed: {
    tenPromiseArticles: function () {
      return this.articles.filter((article) => {
        return article.tags.some((tag) => tag.slug.includes("10-promise"));
      });
    },
  },
  async mounted() {
    try {
      var articles = await axios({
        method: "GET",
        url: "http://127.0.0.1:8000/content",
      });
      this.articles = articles.data.results;
      const map = new Map();
      for (const article of this.articles) {
        for (const tag of article.tags) {
          if (!map.has(tag.uuid)) {
            map.set(tag.uuid, true);
            this.tags.push({
              tag,
            });
          }
        }
      }
      console.log(this.tags);
    } catch (error) {
      console.error(error);
    }
  },
  props: {},
  components: {
    HeaderSection,
    FiltersSection,
    LatestCard,
    ArticleCard,
  },
};
</script>