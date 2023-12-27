import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"
import { codeInput } from "@sanity/code-input"

const config = defineConfig({
  title: "Personal Website",
  apiVersion: "2023-12-24",
  projectId: "s4v7i3a0",
  dataset: "production",
  useCdn: true,

  basePath: "/admin",

  plugins: [deskTool(), codeInput()],

  schema: { types: schemas },
})

export default config
