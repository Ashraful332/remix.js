import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const homeData = {
  head: "Hello World",
  data:"the world is really beautiful if we can see that beauty. Most of us see only the ugliness in everything. So, this is rather a philosophical statement. Maybe, for everyone, everything is not beautiful; but if we learn the art of seeing the beauty, we may find it true. As it happens with the definition of Tragedy given by Aristotle in his Poetics, “the main aim of Tragedy is to bring pleasure; this pleasure is what makes it beautiful”. In life also, some events are tragic, but beautiful; for example, an Indian daughter, upon marriage, goes to her in-laws; everyone is in tears at that time. But everyone wants that she should be at her in-laws— there lies the beauty of it, beauty in the sadness.",
};

export default function Home() {
  return <Welcome head={homeData.head} data={homeData.data} />;
}
