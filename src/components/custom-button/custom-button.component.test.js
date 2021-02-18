import { shallow } from "enzyme";
import "jest-enzyme";

import React from "react";
import CustomButton from "./custom.button.component";

describe("Custom Button Component", () => {
  const mockButton = {
    children: "button",
    isGoogleSignIn: "null",
    inverted: true,
    otherProps: [],
  };

  const wrapper = shallow(<CustomButton {...mockButton} />);

  it("renders to dom without crashing.", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("it is inverted", () => {
    expect.assertions(1);
    expect(wrapper.props().className.includes('inverted')).toEqual(true);
  });

  it("it is NOT inverted", () => {
    const mockButton = {
      children: "button",
      isGoogleSignIn: "null",
      inverted: null,
      otherProps: [],
    };
    const wrapper = shallow(<CustomButton {...mockButton} />);

    expect.assertions(1);
    expect(wrapper.props().className.includes("inverted")).toEqual(false);
  });

  it("it is a google sign in button", () => {
    expect.assertions(1);
    expect(wrapper.props().className.includes("google-sign-in")).toEqual(true);
  });

  it("it is NOT a google sign in button", () => {
    const mockButton = {
      children: "button",
      isGoogleSignIn: null,
      inverted: null,
      otherProps: [],
    };
    const wrapper = shallow(<CustomButton {...mockButton} />);
    expect.assertions(1);
    expect(wrapper.props().className.includes("google-sign-in")).toEqual(false);
  });
});
