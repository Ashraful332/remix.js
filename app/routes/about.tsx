import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About us" },
    { name: "description", content: "About my self!" },
  ];
}

export default function About() {
  return <Welcome />;
}
