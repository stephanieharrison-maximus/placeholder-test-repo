<template>
  <div class="container">
    <h1>About page</h1>
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
import store from "../store/store";
import * as type from "../store/mutations/types";

Vue.use(Vuex);

export default {
  components: {
    Counter,
    AddCounter,
    RemoveCounter,
  },
  methods: {
    defaultFunction() {
      return "defaultvalue";
    },
    defaultDispatch() {
      store.dispatch({
        type: type.Increment,
        amount: 20,
      });
    },
    defaultDispatch2() {
      this.$store.dispatch({
        type: type.Increment,
        amount: 20,
      });
    },
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    console.log("beforeRouteLeave called", to, from);
    this.$store.dispatch({
      type: type.Increment,
      amount: 20,
    });
    next();
  },
};
</script>

<style></style>
