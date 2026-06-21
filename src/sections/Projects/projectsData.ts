export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  media: {
    type: "image" | "video"
    src: string
  }
  link: string
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Post-it",
    description: "Ce projet est un site web conçu pour écrire un post-it (une note, un message ou un poème etc...)",
    stack: ["vue.js", "Tailwind"],
    media: { type: "image", src: "/image/post-it/post-it.png" },
    link: "#",
  },

  //  {
  //    id: "project-2",
  //    title: "Autre projet",
  //    description: "Description...",
  //    stack: ["Laravel", "MySQL", "Tailwind"],
  //    media: { type: "video", src: "/assets/projects/project-2.mp4" },
  //    link: "https://...",
  //  },
]