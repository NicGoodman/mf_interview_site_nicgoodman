<template>
  <main
    id="homepage-content"
    class="flex flex-col w-full bg-mf-gold min-h-screen px-2 pb-2 md:px-8 md:pb-8 xl:px-16 xl:pb-16"
  >
    <img
      src="../assets/hero-bg.svg"
      alt=""
      class="w-full h-auto absolute top-0 left-0 z-0"
    />
    <section
      id="hero"
      class="flex flex-row flex-wrap justify-center w-full bg-cover bg-bottom z-20"
    >
      <HeaderSection :visible="visible" />
    </section>

    <section
      id="article-page-card"
      class="bg-white rounded-3xl shadow-xl w-full p-4 md:p-10 flex flex-col lg:flex-row flex-wrap items-start z-20"
    >
      <section id="sidebar-content" class="flex-shrink-0 order-2 lg:order-1">
        <StocksFeed :stocks="currentArticle.instruments" />
        <RecentsFeed :articles="articles" />
      </section>
      <section
        id="article-content"
        class="flex flex-col ml-0 lg:ml-6 order-1 lg:order-2 w-full flex-1"
      >
        <h4
          class="font-bold text-mf-mid-gray border-b-4 border-mf-red pb-4 mb-1"
        >
          {{ currentArticle.headline }}
        </h4>
        <section
          id="author-date-bar"
          class="text-mf-mid-gray font-medium mb-3 self-start flex flex-col md:flex-row w-full"
        >
          <p
            v-for="author in currentArticle.authors"
            :key="author.fool_uid"
            class="inline"
          >
            {{ author.byline }} •
          </p>
          <p class="inline">
            {{
              currentArticle.publish_at
                | dateParse("YYYY-MM-DD HH:mm:ss")
                | dateFormat("DD.MM.YYYY")
            }}
          </p>
          <section
            id="tag-bar"
            class="text-white font-medium text-center ml-auto"
          >
            <p
              v-for="tag in currentArticle.tags"
              :key="tag.uuid"
              class="text-xs inline-block bg-mf-blue rounded-full px-2 py-1 bg-opacity-25 m-1"
            >
              {{ tag.name }}
            </p>
          </section>
        </section>
        <article class="articleBody mb-12" v-html="currentArticle.body"></article>
      </section>
      <CommentFeed />
      <AuthorBioModal />
    </section>
  </main>
</template>

<script>
import axios from "axios";
import HeaderSection from "../components/HeaderSection.vue";
import AuthorBioModal from "../components/AuthorBioModal.vue";
import StocksFeed from "../components/StocksFeed.vue";
import RecentsFeed from "../components/RecentsFeed.vue";
import CommentFeed from "../components/CommentFeed.vue";

export default {
  name: "ArticlePage",
  data() {
    return {
      visible: true,
      articles: [],
      currentArticle: undefined,
    };
  },
  components: {
    HeaderSection,
    AuthorBioModal,
    StocksFeed,
    RecentsFeed,
    CommentFeed,
  },
  async created() {
    try {
      var articles = await axios({
        method: "GET",
        url: "http://127.0.0.1:8000/content",
      });
      this.articles = articles.data.results;
      for (const article of this.articles) {
        article.body = article.body.replace("{%sfr%}", "");
        article.article_slug = article.headline
          .replace(/[^a-zA-Z ]/g, "")
          .replace(/\s+/g, "-")
          .toLowerCase();
        if (
          "/articles/" + article.article_slug ===
          this.$router.currentRoute.path
        ) {
          this.currentArticle = article;
        }
      }
    } catch (error) {
      console.error(error);
    }
  },
};
</script>