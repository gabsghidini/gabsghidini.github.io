import "../Styles/Components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechContainer from "./TechContainer";

const MainContent = () => {
	return (
		<div id="main-content">
			<AboutContainer />
			<TechContainer />
			<ProjectsContainer />
		</div>
	);
};

export default MainContent;
