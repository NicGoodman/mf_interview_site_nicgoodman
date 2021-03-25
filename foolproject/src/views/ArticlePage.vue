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
    </section>
    <article id="" class="">
      <AuthorBioModal />
      <MobileCommentModal />
      <StocksFeed />
      <RecentsFeed />
    </article>
  </main>
</template>

<script>
import AuthorBioModal from "../components/AuthorBioModal.vue";
import MobileCommentModal from "../components/MobileCommentModal.vue";
import StocksFeed from "../components/StocksFeed.vue";
import RecentsFeed from "../components/RecentsFeed.vue";

export default {
  name: "ArticlePage",
  props: ["collectionSlug", "headlineSlug"],
  components: {
    AuthorBioModal,
    MobileCommentModal,
    StocksFeed,
    RecentsFeed,
  },
};
</script>

