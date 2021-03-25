<template>
  <div id="" class="">
    <ul>
      <li v-for="article in articles" v-bind:key="article.uuid">
        <h1>
          {{ article.headline }}
        </h1>
      </li>
      Latest
      <li>
        <h1>
          {{ latestArticles[0].headline }}
        </h1>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

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
  components: {},
};
</script>