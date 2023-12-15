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
  },
  {
    projectName: "Portfolio",
    description: "This is a basic portfolio site built as a single-page application with React. Deploy via GitHub Pages.",
    image: "/portfolio.png",
    link: "https://github.com/aramattamara/portfolio/",
    tags: ["React", "Java Script", "Git", "Github Actions", "Tailwind CSS"]
  }
  // {
  //   projectName: "sinopharmtech.ua",
  //   description:
  //       "Ukrainian Company website ",
  //   image: "/convertor.png",
  //   link: "https://sinopharmtech.ua/",
  //   tags: ["PHP", "Wordpress"],
  // }
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
