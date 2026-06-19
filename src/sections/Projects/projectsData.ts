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
    title: "Nom du projet",
    description: "Courte description du projet : le problème résolu, l'objectif, et ce qui le rend intéressant.",
    stack: ["React", "Node.js", "MongoDB"],
    media: { type: "image", src: "/assets/projects/project-1.jpg" },
    link: "#",
  },

   {
     id: "project-2",
     title: "Autre projet",
     description: "Description...",
     stack: ["Laravel", "MySQL", "Tailwind"],
     media: { type: "video", src: "/assets/projects/project-2.mp4" },
     link: "https://...",
   },
]