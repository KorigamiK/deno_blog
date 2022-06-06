import blog from "../blog.tsx";

blog({
  author: "Dino",
  title: "My Blog",
  description: "The blog description.",
  cover: "https://deno-avatar.deno.dev/avatar/blog.svg",
  background: "#f9f9f9",
  links: [
    { title: "Email", url: "mailto:bot@deno.com" },
    { title: "GitHub", url: "https://github.com/denobot" },
    { title: "Twitter", url: "https://twitter.com/denobot" },
  ],
});