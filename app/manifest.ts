import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Carry-On Culture",
    short_name: "Carry-On Culture",
    description: "Carry-on packing guides, destination shopping edits, and in-trip product reviews.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e8",
    theme_color: "#171714",
  };
}
