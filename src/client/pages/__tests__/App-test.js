import { shallowMount } from "@vue/test-utils";
import App from "../Home.vue";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: "test1" }),
  })
);

describe("Home.vue", () => {
  it("renders a basic header", () => {
    const msg = "Hello world!";
    const wrapper = shallowMount(App, {
      props: {},
    });
    expect(wrapper.find("h1").text()).toMatch(msg);
  });
});
