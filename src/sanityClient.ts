import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "jcrvk505",
  dataset: "production",
  useCdn: false, // set to false for real-time local updates
  apiVersion: "2026-06-22",
});
