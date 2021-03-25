<template>
  <article id="" class="">
    <AuthorBioModal />
    <MobileCommentModal />
    <StocksFeed />
    <RecentsFeed />
  </article>
</template>

<script>
import AuthorBioModal from "../components/AuthorBioModal.vue";
import MobileCommentModal from "../components/MobileCommentModal.vue";
import StocksFeed from "../components/StocksFeed.vue";
import RecentsFeed from "../components/RecentsFeed.vue";

export default {
  name: "ArticlePage",
  props: ['collectionSlug', 'headlineSlug'],
  components: {
    AuthorBioModal,
    MobileCommentModal,
    StocksFeed,
    RecentsFeed,
  },
};
</script>

