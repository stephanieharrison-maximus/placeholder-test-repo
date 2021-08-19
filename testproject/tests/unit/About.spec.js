import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Vue from "vue";
import VueRouter from "vue-router";
import { cloneDeep } from "lodash";
import StoreTest from "@/views/StoreTest.vue";
import StoreTestThis from "@/views/StoreTestThis.vue";
import { routes } from "@/router";
import { storeTemplate } from "@/store/store";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
// Vue.use(Vuelidate);
const router = new VueRouter();

const next = jest.fn();

describe("About.vue store.dispatch", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(storeTemplate));
    wrapper = mount(StoreTest, {
      localVue,
      store,
      router,
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it("renders", () => {
    expect(wrapper.element).toBeDefined();
  });

  it("returns default function", () => {
    const result = wrapper.vm.defaultFunction();
    expect(result).toEqual("defaultvalue");
  });

  it("doesn't track dispatch for store.dispatch", () => {
    const spyOnDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    const result = wrapper.vm.defaultDispatch();
    expect(spyOnDispatch).not.toHaveBeenCalled();
  });

  it("tracks dispatch for this.$store.dispatch", () => {
    const spyOnDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    const result = wrapper.vm.defaultDispatch2();
    expect(spyOnDispatch).toHaveBeenCalled();
  });

  it("doesn't call dispatch when called through Component", () => {
    const spyOnDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    StoreTest.beforeRouteLeave(routes[0], routes[1], next);
    expect(spyOnDispatch).not.toHaveBeenCalled();
  });

  it("works without breaking", () => {
    const spyOnDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    StoreTest.beforeRouteLeave(routes[0], routes[1], next);
    expect(spyOnDispatch).toHaveBeenCalled();
  });
});

describe("About.vue this.$store.dispatch", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(storeTemplate));
    wrapper = mount(StoreTestThis, {
      localVue,
      store,
      router,
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it("renders", () => {
    expect(wrapper.element).toBeDefined();
  });

  it("returns default function", () => {
    const result = wrapper.vm.defaultFunction();
    expect(result).toEqual("defaultvalue");
  });

  it("doesn't track dispatch for store.dispatch", () => {
    const spyOnDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    const result = wrapper.vm.defaultDispatch();
    expect(spyOnDispatch).not.toHaveBeenCalled();
  });

  it("tracks dispatch for this.$store.dispatch", () => {
    const spyOnDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    const result = wrapper.vm.defaultDispatch2();
    expect(spyOnDispatch).toHaveBeenCalled();
  });

  it("doesn't call dispatch when called through Component", () => {
    const spyOnDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    StoreTestThis.beforeRouteLeave(routes[0], routes[1], next);
    expect(spyOnDispatch).not.toHaveBeenCalled();
  });

  it("works without breaking", () => {
    const spyOnDispatch = jest.spyOn(wrapper.vm.$store, "dispatch");
    StoreTestThis.beforeRouteLeave(routes[0], routes[1], next);
    expect(spyOnDispatch).toHaveBeenCalled();
  });
});
