import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddProject from "@/components/AddProject";
import { ProjectContextProvider } from "@/context/Project";

export default {
  title: "Todo/Projects",
  component: AddProject,
} as ComponentMeta<typeof AddProject>;

const Template: ComponentStory<typeof AddProject> = () => (
  <ProjectContextProvider>
    <AddProject />
  </ProjectContextProvider>
);

export const ProjectAddInput = Template.bind({});
