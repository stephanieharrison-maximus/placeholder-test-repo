<template>
  <div class="container">
    <h1>Home page</h1>
    <Counter></Counter><br />
    <div class="columns">
      <div class="column is-11">
        <AddCounter></AddCounter>
      </div>
      <div class="column auto">
        <RemoveCounter></RemoveCounter>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import AddCounter from "@/components/AddCounter.vue";
import RemoveCounter from "@/components/RemoveCounter.vue";
import Counter from "@/components/Counter.vue";

Vue.use(Vuex);

export default {
  components: {
    Counter,
    AddCounter,
    RemoveCounter,
  },
};
</script>

<style></style>
