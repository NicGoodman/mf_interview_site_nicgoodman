<template>
  <section
    id="stocks-feed"
    class="w-full flex flex-col items-center lg:items-start mb-10"
  >
    <ul class="lg:flex-col w-full flex-row flex flex-wrap justify-center">
      <!-- Looping through and showing the article's stocks in the stocksArray. This is rerendered when the shuffle button is pressed -->
      <li
        v-for="stock in stocksArray"
        :key="stock.instrument_id"
        class="m-4 lg:m-0 lg:my-2"
      >
        <h5 class="font-bold text-mf-blue">{{ stock.company_name }}</h5>
        <p
          class="font-bold text-mf-mid-gray uppercase"
        >
          <span class="font-medium">{{ stock.exchange }}: </span
          >{{ stock.symbol }}<!-- • {{ stock.quote }} -->
        </p>
      </li>
    </ul>
    <!-- When pressed, the shuffle-button applies a sort on the stocksArray based on a random number -->
    <p
      id="shuffle-button"
      class="button"
      @click="stocksArray.sort(() => Math.random() - 0.5)"
    >
      Shuffle <i class="fad fa-random"></i>
    </p>
  </section>
</template>

<script>
export default {
  name: "StocksFeed",
  data() {
    //stocksArray is populated by the stocks prop so the order can be maniuplated with the shuffle button
    return {
      stocksArray: this.stocks,

    };
  },
  props: ["stocks"],
  methods: {

  },
};
</script>