<template>
<section id="stocks-feed" class="">
<ul>
  <li v-for="stock in stocks" :key="stock.instrument_id">
    {{ stock.company_name }}
  </li>
</ul>
</section>
</template>

<script>
export default {
  name: "StocksFeed",
  props: ["stocks"]
};
</script>