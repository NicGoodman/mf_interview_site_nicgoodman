<template>
  <div id="" class="">
    <LatestCard :headline="latestArticles[0].headline" />
    <ArticleCard
      v-for="article in articles"
      :key="article.uuid"
      :headline="article.headline"
      :thumbnail="article.images[0].url"
    />
  </div>
</template>

<script>
import axios from "axios";
import ArticleCard from "../components/ArticleCard.vue";
import LatestCard from "../components/LatestCard.vue";

export default {
  name: "HomePage",
  data() {
    return {
      articles: [],
    };
  },
  computed: {
    latestArticles: function () {
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
  },
};
</script>