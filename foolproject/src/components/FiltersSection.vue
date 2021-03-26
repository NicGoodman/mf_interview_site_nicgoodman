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
      <div id="date-sort" class="">
        <h5 class="text-white text-shadow-xl uppercase font-bold mr-8">
          Date <i class="fas fa-caret-up"></i><i class="fas fa-caret-down"></i>
        </h5>
      </div>
      <div id="tags" class="flex flex-row flex-wrap justify-center">
        <h5 class="text-white text-shadow-xl uppercase font-bold mr-3">Tags</h5>
        <section id="tag-bar" class="text-white font-medium text-center">
          <p
            v-for="tag in tags"
            :key="tag.tag.uuid"
            class="text-xs inline-block bg-mf-blue rounded-full px-2 py-1 bg-opacity-25 m-1"
          >
            {{ tag.tag.name }}
          </p>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "FiltersSection",
  props: ["tags"],
};
</script>