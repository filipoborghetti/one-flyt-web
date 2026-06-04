import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "t96hfwcn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});
