<template>
  <section id="stocks-feed" class="w-full flex flex-col items-center lg:items-start mb-10">
    <ul class="lg:flex-col w-full flex-row flex flex-wrap justify-center">
      <li v-for="stock in stocksArray" :key="stock.instrument_id" class="m-4 lg:m-0 lg:my-2">
        <h5 class="font-bold text-mf-blue">{{ stock.company_name }}</h5>
        <p class="font-bold text-mf-mid-gray uppercase">
          <span class="font-medium">{{ stock.exchange }}: </span
          >{{ stock.symbol }}
        </p>
      </li>
    </ul>
    <p class="button" @click="stocksArray.sort(() => Math.random() - 0.5)">Shuffle <i class="fad fa-random"></i></p>
  </section>
</template>

<script>
export default {
  name: "StocksFeed",
  data() {
    return {
      stocksArray: this.stocks
    }
  },
  props: ["stocks"],
};
</script>