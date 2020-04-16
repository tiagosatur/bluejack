import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";

import Card from "@/components/Card/Card.vue";
import { switchSuit } from "@/utils";

describe("Card component", () => {
  const props = {
    value: "2D",
    rank: "2",
    suit: "D",
  };
  let component;

  beforeEach(() => {
    component = mount(Card, {
      propsData: { value: props.value },
    });
  });
  it("renders", () => {
    expect(component.exists()).toBe(true);
  });

  it("show value prop", async () => {
    await flushPromises();
    const suitSymbol = switchSuit(props.suit);

    expect(component.find(".test-id-number").text()).toBe(props.rank);
    expect(component.find(".test-id-suit").text()).toBe(suitSymbol);
  });
});
