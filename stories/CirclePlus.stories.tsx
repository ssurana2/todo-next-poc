import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CirclePlus from "@/components/CirclePlus";

export default {
  title: "Todo/Icons",
  component: CirclePlus,
} as ComponentMeta<typeof CirclePlus>;

const Template: ComponentStory<typeof CirclePlus> = (args) => <CirclePlus {...args} />;

export const CirclePlusIcon = Template.bind({});
