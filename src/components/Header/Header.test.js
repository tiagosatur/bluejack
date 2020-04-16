import { mount } from "@vue/test-utils";
import Header from "@/components/Header/Header.vue";

describe("Header component", () => {
  let component;
  const props = {
    title: "New pile",
  };
  beforeEach(() => {
    component = mount(Header, {
      propsData: { title: props.title },
    });
  });

  it("renders", () => {
    expect(component.exists()).toBe(true);
  });

  it("renders title props", async () => {
    await component.vm.$nextTick();
    const title = component.find(".test-id-title");
    expect(title.text()).toBe(props.title);
  });
});
