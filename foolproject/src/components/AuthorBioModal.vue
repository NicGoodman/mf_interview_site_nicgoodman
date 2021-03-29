<template>
  <section
    id=""
    class="fixed inset-0 w-full h-screen bg-mf-mid-gray bg-opacity-90 flex flex-col items-center justify-center z-50 p-4"
    :class="{ hidden: !showModal }"
  >
    <!-- pulling in and creating a card for all authors for an article -->
    <article
      v-for="author in authors"
      :key="author.uuid"
      id=""
      class="bg-white rounded-3xl shadow-xl w-full mb-5 p-4 md:p-9 max-w-4xl flex flex-row flex-wrap"
    >
      <div
        id="close-button"
        class="text-mf-blue text-3xl text-right w-full cursor-pointer"
      >
        <i class="fad fa-times-circle" @click="openModal()"></i>
      </div>
      <img
        :src="author.large_avatar_url"
        alt=""
        class="w-48 h-48 xl:w-64 xl:h-64 mx-auto md:mx-0 object-cover rounded-full border-red-600 border-4"
      />
      <section
        id="author-info"
        class="flex flex-col ml-0 md:ml-6 w-full md:w-auto md:flex-1"
      >
        <h4
          class="font-bold text-mf-mid-gray border-b-4 border-mf-red pb-4 mb-1"
        >
          {{ author.byline }}
        </h4>
        <!-- Checking to see if an author has a long_bio, if not, showing the short_bio instead -->
        <p
          class="text-mf-mid-gray font-medium"
          v-if="author.long_bio != null"
          v-html="author.long_bio"
        ></p>
        <p
          class="text-mf-mid-gray font-medium"
          v-else
          v-html="author.short_bio"
        ></p>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  name: "AuthorBioModal",
  props: { authors: Array, showModal: Boolean },
  methods: {
    openModal() {
      this.$parent.openModal();
    },
  },
};
</script>