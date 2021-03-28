<template>
  <section id="comments-feed" class="w-full order-3">
    <section id="comments-form-wrapper" class="max-w-2xl mx-auto">
      <h5 class="border-b-2 border-mf-red text-mf-mid-gray mb-8">Comments</h5>
      <section id="" class="text-mf-mid-gray mb-10">
        <ul>
          <li v-for="(comment, i) in comments" :key="i">
            <p class="font-bold">{{ comment.username }} said:</p>
            <p class="">{{ comment.commentBody }}</p>
          </li>
        </ul>
      </section>
      <section id="" class="">
        <form
          action=""
          class="flex flex-col w-full space-y-6 items-center"
          form
          @submit.prevent="onSubmit"
        >
          <input
            class="w-full border-2 border-mf-royal-purple px-4 py-2 rounded-2xl font-futura"
            type="text"
            name="username"
            id="username"
            placeholder="Name"
            v-model="username"
          />
          <textarea
            class="border-2 border-mf-royal-purple w-full px-4 py-2 rounded-2xl font-futura"
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="Leave a Comment"
            v-model="commentBody"
          ></textarea
          ><button class="button" type="submit">Submit</button>
        </form>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "CommentFeed",
  data() {
    return {
      comments: [],
      username: "",
      commentBody: "",
    };
  },
  methods: {
    onSubmit() {
      this.comments.push({
        username: this.username,
        commentBody: this.commentBody,
      });
    },
  },
  props: {},
};
</script>