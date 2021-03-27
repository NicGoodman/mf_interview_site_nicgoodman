<template>
  <main
    id="homepage-content"
    class="flex flex-col w-full bg-mf-gold min-h-screen px-16"
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
      <HeaderSection />
    </section>
    <section
      id="article-page-card"
      class="bg-white rounded-3xl shadow-xl w-full p-16 flex flex-row items-start z-20"
    >
      <section id="sidebar-content" class="w-96 flex-shrink-0">
        <StocksFeed :stocks="stocks" />
        <RecentsFeed />
      </section>
      <section id="article-content" class="flex flex-col ml-6">
        <h4
          class="font-bold text-mf-mid-gray border-b-4 border-mf-red pb-4 mb-1"
        >
          {{ headline }}
        </h4>
        <section
          id="author-date-bar"
          class="text-mf-mid-gray font-medium mb-3 self-start flex flex-row w-full"
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
          <section
            id="tag-bar"
            class="text-white font-medium text-center ml-auto"
          >
            <p
              v-for="tag in tags"
              :key="tag.uuid"
              class="text-xs inline-block bg-mf-blue rounded-full px-2 py-1 bg-opacity-25 m-1"
            >
              {{ tag.name }}
            </p>
          </section>
        </section>
        <article class="articleBody" v-html="body"></article>
      </section>
      <AuthorBioModal />
      <MobileCommentModal />
    </section>
  </main>
</template>

<script>
import HeaderSection from "../components/HeaderSection.vue";
import AuthorBioModal from "../components/AuthorBioModal.vue";
import MobileCommentModal from "../components/MobileCommentModal.vue";
import StocksFeed from "../components/StocksFeed.vue";
import RecentsFeed from "../components/RecentsFeed.vue";

export default {
  name: "ArticlePage",
  props: [
    "collectionSlug",
    "headlineSlug",
    "headline",
    "tags",
    "body",
    "publishedDate",
    "authors",
    "stocks",
  ],
  components: {
    HeaderSection,
    AuthorBioModal,
    MobileCommentModal,
    StocksFeed,
    RecentsFeed,
  },
};
</script>