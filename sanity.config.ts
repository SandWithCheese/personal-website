import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"

const config = defineConfig({
  title: "Personal Website",
  apiVersion: "2023-12-24",
  projectId: "s4v7i3a0",
  dataset: "production",
  useCdn: true,

  basePath: "/admin",

  plugins: [deskTool()],

  schema: { types: schemas },
})

export default config
