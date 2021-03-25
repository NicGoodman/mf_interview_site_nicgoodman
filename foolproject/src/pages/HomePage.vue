<template>
  <div id="" class="">
      <ul>
          <li v-for="article in articles" v-bind:key="article.uuid">
              {{ article.headline }}
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HomePage",
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/content")
      .then((response) => (this.articles = response.data.results));
  },
  props: {},
  components: {
  },
};
</script>