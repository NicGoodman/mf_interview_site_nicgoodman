<template>
  <section id="stocks-feed" class="">
    <ul>
      <li v-for="stock in stocks" :key="stock.instrument_id" class="mb-6">
        <h5 class="font-bold text-mf-blue">{{ stock.company_name }}</h5>
        <p class="font-bold text-mf-mid-gray uppercase">
          <span class="font-medium">{{ stock.exchange }}: </span
          >{{ stock.symbol }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "StocksFeed",
  props: ["stocks"],
};
</script>