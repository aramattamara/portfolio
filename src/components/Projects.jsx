import CardProject from "./CardProject";

const datas = [
  {
    projectName: "Conversation Insights",
    description:
      "",
    image: "/conversation.png",
    link: "https://github.com/aramattamara/Conversation-Insights",
    tags: ["Python3", "Flask", "PostgreSQL", "SQLAlchemy", "React JS", "Bootstrap", "JQuery", "Jinja2", "HTML5/CSS3", "Telegram API", "Chart.js"],
  },
  {
    projectName: "Currency Convertor",
    description:
        "The Currency Converter App was built using React and deployed on GitHub Pages.",
    image: "/convertor.png",
    link: "https://aramattamara.github.io/currency_convertor/",
    tags: ["React", "Git", "Frankfurter API"],
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-11">
      {datas.map((data) => (
        <CardProject
          key={data.link}
          projectName={data.projectName}
          description={data.description}
          image={data.image}
          link={data.link}
          tags={data.tags}
        />
      ))}
    </div>
  );
}
