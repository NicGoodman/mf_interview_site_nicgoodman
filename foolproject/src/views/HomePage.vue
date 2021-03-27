<template>
  <main id="homepage-content" class="flex flex-col w-full bg-mf-gold px-16">
    <img
      src="../assets/hero-bg.svg"
      alt=""
      class="w-full h-auto absolute top-0 left-0 z-0"
    />
    <section
      id="hero"
      class="flex flex-col flex-wrap items-center w-full bg-cover bg-bottom z-20 mb-20"
    >
      <HeaderSection />
      <section id="latest-section" class="flex flex-row items-center">
        <h1 class="font-black text-white text-shadow-xl mr-16">
          Latest<br />News
        </h1>
        <LatestCard
          :headline="latestArticle[0].headline"
          :thumbnail="latestArticle[0].images[0].url"
          :promo="latestArticle[0].promo"
          :authors="latestArticle[0].authors"
          :publishedDate="latestArticle[0].publish_at"
          :tags="latestArticle[0].tags"
        />
      </section>
    </section>
    <section
      id="older-articles-content"
      class="flex flex-row flex-wrap w-full justify-center z-20"
    >
      <FiltersSection :tags="tags" :activeTag="activeTag" />
      <ArticleCard
        v-for="article in articles"
        :key="article.uuid"
        :headline="article.headline"
        :thumbnail="article.images[0].url"
        :promo="article.promo"
        :authors="article.authors"
        :publishedDate="article.publish_at"
        :tags="article.tags"
        :collectionSlug="article.collection.slug"
        :body="article.body"
        :stocks="article.instruments"
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
      latestArticle: [],
      tags: [],
      activeTag: null,
    };
  },
  computed: {
  },
  async mounted() {
    try {
      var articles = await axios({
        method: "GET",
        url: "http://127.0.0.1:8000/content",
      });
      this.articles = articles.data.results;
      this.latestArticle = this.articles.filter((article) => {
        return article.tags.some((tag) => tag.slug.includes("10-promise"));
      });
      console.log(this.latestArticle);
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
  methods: {
    async getArticles(tagSlug, i) {
      this.activeTag = i;
      var tagUrl = "";
      if (tagSlug !== "all") {
        tagUrl = "http://127.0.0.1:8000/content?tag=" + tagSlug;
        console.log(tagUrl);
      } else {
        tagUrl = "http://127.0.0.1:8000/content";
        console.log(tagUrl);
      }
      try {
        var filteredArticles = await axios({
          method: "GET",
          url: tagUrl,
        });
        this.articles = filteredArticles.data.results;
      } catch (error) {
        console.error(error);
      }
    },
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