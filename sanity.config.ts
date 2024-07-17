import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./src/sanity/schemas";

const config = defineConfig({
  title: "Personal Website",
  apiVersion: "2023-12-24",
  projectId: "s4v7i3a0",
  dataset: "production",
  useCdn: true,

  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas },
});

export default config;
