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
          class="w-64"
        />
      </router-link>
    </h1>
    <router-link to="/">
      <p class="button w-max">Return To Home</p>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>