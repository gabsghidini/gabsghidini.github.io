import {
	DiNodejsSmall,
	DiPostgresql,
	DiJavascript,
	DiReact,
	DiHtml5,
	DiCss3,
	DiSass,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

import "../Styles/Components/techcontainer.sass";

const techs = [
	{ id: "html", name: "HTML5", icon: <DiHtml5 /> },
	{ id: "css", name: "CSS3", icon: <DiCss3 /> },
	{ id: "sass", name: "SASS", icon: <DiSass /> },
	{ id: "js", name: "JavaScript", icon: <DiJavascript /> },
	{ id: "ts", name: "TypeScript", icon: <SiTypescript /> },
	{ id: "react", name: "React", icon: <DiReact /> },
	{ id: "node", name: "NodeJS", icon: <DiNodejsSmall /> },
	{ id: "postgres", name: "PostgreSQL", icon: <DiPostgresql /> },
];

const TechContainer = () => {
	return (
		<section className="technologies-container">
			<h2>Tecnologias</h2>
			<div className="technologies-grid">
				{techs.map((tech) => (
					<div
						key={tech.name}
						className="technology-card"
						id={tech.id}
					>
						{tech.icon}
						<h3>{tech.name}</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default TechContainer;
