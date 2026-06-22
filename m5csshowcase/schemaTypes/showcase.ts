import { defineField, defineType } from "sanity";

export const showcase = defineType({
  name: "showcase",
  title: "M5 CS Showcase Content",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Main Title",
      type: "string",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
    }),
    defineField({
      name: "enginePower",
      title: "Engine Power HP",
      type: "string",
    }),
    defineField({
      name: "launchBenchmark",
      title: "0-100 KM/H Time",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Main Hero Image Car",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
