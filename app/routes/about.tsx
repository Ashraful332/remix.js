import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About us" },
    { name: "description", content: "About my self!" },
  ];
}

const homeData = {
    head: "Ashraful Pathan",
    data : "Hi, I am Ashraful Pathan — a React.js Developer. With over a year of hands-on experience, I specialize in building dynamic and responsive web applications using React.js, and I amm also confident working on the backend with Node.js, Express.js, and MongoDB. I am skilled in both JavaScript and TypeScript, and I have also worked with Next.js and Python. I am passionate about learning, creating, and bringing ideas to life through clean and functional code."
};

export default function About() {
  return <Welcome head={homeData.head} data={homeData.data} />;
}
