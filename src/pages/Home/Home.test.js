import { BootstrapVue } from "bootstrap-vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Home from "@/pages/Home/Home.vue";

describe("Home page", () => {
  let component;

  beforeEach(() => {
    // create an extended `Vue` constructor
    const localVue = createLocalVue();
    // install plugins as normal
    localVue.use(BootstrapVue);

    component = mount(Home, {
      localVue,
      stubs: ["router-link"],
    });
  });

  it("renders correctly", () => {
    expect(component.is(Home)).toBe(true);
  });

  it("renders start button", () => {
    expect(component.find(".test-id-button-start").exists()).toBe(true);
  });
});
