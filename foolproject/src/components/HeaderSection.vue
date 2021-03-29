<template>
  <header
    id="logo"
    class="w-full flex flex-col items-center justify-between my-20 h-52"
  >
    <h1>
      <router-link to="/">
        <img
          src="../assets/the-motley-fool-logo.png"
          alt="The Motley Fool Logo Primary Red Purple"
          class="w-80"
        />
      </router-link>
    </h1>
    <!-- The button's visibility is conditionally set by the parent component's visible property -->
    <router-link to="/">
      <p id="return-to-home-button"
        class="button w-max"
        :class="{ hidden: !visible }"
      >
        Return To Home
      </p>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
  props: ["visible"],
};
</script>