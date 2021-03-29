<template>
  <section id="" class="w-full max-w-2xl mx-auto lg:mx-0 lg:w-80 mb-10">
    <h5 class="border-b-2 border-mf-red text-mf-mid-gray mb-8">
      Latest Articles
    </h5>
    <ul>
      <!-- Simple loop through all articles and creating a router link for each one. Text is derrived from the headline -->
      <li v-for="article in articles" :key="article.uuid">
        <router-link
          :to="{
            name: 'article',
            params: {
              articleSlug: article.article_slug,
            },
          }"
        >
          <h5
            class="text-sm text-mf-mid-gray hover:text-mf-blue cursor-pointer"
          >
            {{ article.headline }}
          </h5>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "RecentsFeed",
  props: ["articles", "articleSlug"],
};
</script>