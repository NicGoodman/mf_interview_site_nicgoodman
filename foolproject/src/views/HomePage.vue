<template v-if="articles">
  <main
    id="homepage-content"
    class="flex flex-col w-full bg-mf-gold px-2 pb-2 md:px-8 md:pb-8 xl:px-16 xl:pb-16"
  >
    <!-- I am using a absolutely positioned svg image to achieve the curve in the background with my hero content ontop-->
    <img
      src="../assets/hero-bg.svg"
      alt=""
      class="w-full h-auto absolute top-0 left-0 z-0"
    />
    <section
      id="hero"
      class="flex flex-col flex-wrap items-center w-full bg-cover bg-bottom z-20 mb-20"
    >
      <!-- This is my "header" which includes the MF logo and a return to home button which is visible based on the visible prop-->
      <HeaderSection :visible="visible" />

      <section
        id="latest-section"
        class="flex flex-col lg:flex-row items-center"
      >
        <!-- I have two versions of the "latest news" heading that changes based on screen size -->
        <LatestNewsHeading />
        <!-- I am pulling my props from the first entry in the array of articles with the 10-promise slug and populating a distinct article card-->
        <LatestCard
          v-if="tenPromiseArticles"
          :headline="tenPromiseArticles[0].headline"
          :thumbnail="tenPromiseArticles[0].images[0].url"
          :promo="tenPromiseArticles[0].promo"
          :authors="tenPromiseArticles[0].authors"
          :publishedDate="tenPromiseArticles[0].publish_at"
          :tags="tenPromiseArticles[0].tags"
          :articleSlug="tenPromiseArticles[0].article_slug"
          :collectionSlug="tenPromiseArticles[0].collection.slug"
        />
      </section>
    </section>
    <section
      id="older-articles-content"
      class="flex flex-row flex-wrap w-full justify-center z-20"
    >
      <!-- The filters section includes filters for unique tags and a sort by date feature -->
      <FiltersSection
        :tags="tags"
        :activeTag="activeTag"
        :ascending="ascending"
      />
      <!-- The article cards are generated from my filteredArticles computed property that filters out the latest article and sorts articles by date. The thumbnail is generated from the first image in the images property -->
      <ArticleCard
        v-for="article in filteredArticles"
        :key="article.uuid"
        :headline="article.headline"
        :thumbnail="article.images[0].url"
        :promo="article.promo"
        :authors="article.authors"
        :publishedDate="article.publish_at"
        :tags="article.tags"
        :articleSlug="article.article_slug"
        :collectionSlug="article.collection.slug"
      />
    </section>
  </main>
</template>

<script>
import axios from "axios";
//importing my components
import HeaderSection from "../components/HeaderSection.vue";
import FiltersSection from "../components/FiltersSection.vue";
import LatestCard from "../components/LatestCard.vue";
import ArticleCard from "../components/ArticleCard.vue";
import LatestNewsHeading from "../components/LatestNewsHeading.vue";

export default {
  name: "HomePage",
  data() {
    return {
      ascending: false,
      visible: false,
      articles: [],
      tenPromiseArticles: undefined,
      tags: [],
      activeTag: null,
    };
  },
  computed: {
    filteredArticles: function () {
      let sortedArticles = this.articles;
      //I am filtering my sortedArticles array by uuid and pulling out the first 10-promise article
      sortedArticles = sortedArticles.filter(
        (article) => article.uuid !== this.tenPromiseArticles[0].uuid
      );
      //Here I am sorting my articles based on the publish_at property. each date is the same so this is really sorting based on time
      sortedArticles = sortedArticles.sort((a, b) => {
        let fa = a.publish_at.toLowerCase(),
          fb = b.publish_at.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      //when my sort by date featured is clicked, it changes false to true and vice-versa depending on the initial value. Here i am just reversing my array if ascending is false.
      if (!this.ascending) {
        sortedArticles.reverse();
      }
      return sortedArticles;
    },
  },
  async created() {
    try {
      var articles = await axios({
        method: "GET",
        url: "http://127.0.0.1:8000/content",
      });
      this.articles = articles.data.results;
      //I am creating an article_slug property for each article and having it be equal to the headline
      for (const article of this.articles) {
        article.article_slug = article.headline
          .replace(/[^a-z\d\s]+/gi, "")
          .replace(/\s+/g, "-")
          .toLowerCase();
      }
      //This creates a separate array of articles for articles with the 10-promise slug for use with the LatestCard component
      this.tenPromiseArticles = this.articles.filter((article) => {
        return article.tags.some((tag) => tag.slug.includes("10-promise"));
      });
      //I am looping through my article array and adding tags to a new Map only if that map does not contain the tags uuid. End result is an array of unique tags for the tag filtering
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
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    //The getArticles method takes a tag's slug, appends it to the base API URL and is then used in a new axios request that repopulates the articles array with just the articles tagged with the specified tag. If All articles option is selected by the user, it just uses the standard URL.
    async getArticles(tagSlug, i) {
      this.activeTag = i;
      var tagUrl = "";
      if (tagSlug !== "all") {
        tagUrl = "http://127.0.0.1:8000/content?tag=" + tagSlug;
      } else {
        tagUrl = "http://127.0.0.1:8000/content";
      }
      try {
        var filteredArticles = await axios({
          method: "GET",
          url: tagUrl,
        });
        this.articles = filteredArticles.data.results;
        for (const article of this.articles) {
          article.article_slug = article.headline
            .replace(/[^a-z\d\s]+/gi, "")
            .replace(/\s+/g, "-")
            .toLowerCase();
        }
      } catch (error) {
        console.error(error);
      }
    },
    sortArticles() {
      this.ascending = !this.ascending;
    },
  },
  props: {},
  components: {
    HeaderSection,
    FiltersSection,
    LatestCard,
    ArticleCard,
    LatestNewsHeading,
  },
};
</script>