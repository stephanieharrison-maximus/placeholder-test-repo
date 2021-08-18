import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Vue from "vue";
import VueRouter from "vue-router";
// import Vuelidate from "vuelidate";
import { cloneDeep } from "lodash";
import Component from "@/views/About.vue";
import { routes, routeStepOrder } from "@/router/routes";
import storeTemplate from "@/store/store";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
// Vue.use(Vuelidate);
const router = new VueRouter();

describe("About.vue", () => {
    let wrapper;
    let store;
  
    beforeEach(() => {
      store = new Vuex.Store({
        modules: {
          form: cloneDeep(storeTemplate),
        },
      });
      wrapper = shallowMount(Component, {
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
  });