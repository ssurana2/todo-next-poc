import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Add from "@/components/Add";

export default {
  /**
   * Documentation regarding the Add button comes here
   */
  title: "Todo/Add",
  component: Add,
} as ComponentMeta<typeof Add>;

const Template: ComponentStory<typeof Add> = (args) => <Add {...args} />;

export const AddInput = Template.bind({});
AddInput.args = {
  buttonTitle: "Add",
  placeholder: "Placeholder",
};

