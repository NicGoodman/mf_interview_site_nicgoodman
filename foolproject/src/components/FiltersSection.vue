<template>
  <section id="filters-section" class="w-full flex flex-col">
    <header
      id=""
      class="text-right border-b-4 border-mf-royal-purple pb-4 mb-4 w-full"
    >
      <h2 class="text-white text-shadow-xl">Older Articles</h2>
    </header>
    <section
      id="filters-bar"
      class="flex flex-row flex-wrap items-start w-full"
    >
      <div id="date-sort" class="cursor-pointer" @click="sortArticles()">
        <h5 class="text-white text-shadow-xl uppercase font-bold mr-8">
          Date <i class="fas fa-caret-up" :class="{activeSort: ascending}"></i
          ><i class="fas fa-caret-down" :class="{activeSort: !ascending}"></i>
        </h5>
      </div>
      <div id="tags" class="flex flex-row flex-wrap justify-center">
        <h5 class="text-white text-shadow-xl uppercase font-bold mr-3">Tags</h5>
        <section id="tag-bar" class="text-white font-medium text-center">
          <ul>
            <li
              @click="getArticles('all', null)"
              :class="{
                active: null === activeTag,
                inactive: null != activeTag,
              }"
              class="text-xs inline-block rounded-full px-2 py-1 hover:bg-opacity-100 cursor-pointer m-1"
            >
              All Articles
            </li>
            <li
              v-for="(tag, i) in tags"
              :key="tag.tag.uuid"
              @click="getArticles(tag.tag.slug, i)"
              :class="{ active: i === activeTag, inactive: i != activeTag }"
              class="text-xs inline-block rounded-full px-2 py-1 m-1 hover:bg-opacity-100 cursor-pointer"
            >
              {{ tag.tag.name }}
            </li>
          </ul>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "FiltersSection",
  props: ["tags", "activeTag", "ascending"],
  methods: {
    getArticles(tagSlug, i) {
      this.$parent.getArticles(tagSlug, i);
    },
    sortArticles() {
        this.$parent.sortArticles();
    }
  },
};
</script>