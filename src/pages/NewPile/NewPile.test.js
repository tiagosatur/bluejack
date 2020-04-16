import Vuex from "vuex";
import flushPromises from "flush-promises";
import { BootstrapVue } from "bootstrap-vue";
import { mount, createLocalVue } from "@vue/test-utils";
import NewPile from "@/pages/NewPile/NewPile.vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe("NewPile page", () => {
  let component;
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      createDeck: jest.fn(),
      drawDeck: jest.fn(),
      addPile: jest.fn(),
    };
    store = new Vuex.Store({ actions });
    component = mount(NewPile, {
      localVue,
      store,
    });
  });

  it("renders the page correctly", () => {
    expect(component.is(NewPile)).toBe(true);
  });

  it("renders the submit button ", () => {
    const button = component.find(".test-id-handle-create-deck");
    expect(button.exists()).toBe(true);
  });

  it("invoke the method handleCreateDeck when the submit button is smashed ", async () => {
    const spy = jest.spyOn(component.vm, "handleCreateDeck");
    component.find(NewPile).vm.handleCreateDeck();
    expect(spy).toHaveBeenCalled();
  });

  it("dispatches the actions 'createDeck, drawDeck, addPile' when the submit button is clicked ", async () => {
    jest.spyOn(component.vm, "handleCreateDeck");
    component.find(NewPile).vm.handleCreateDeck();
    await flushPromises();
    expect(actions.createDeck).toHaveBeenCalled();
    expect(actions.drawDeck).toHaveBeenCalled();
    expect(actions.addPile).toHaveBeenCalled();
  });
});
