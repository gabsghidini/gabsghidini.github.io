import PT from "../Assets/Res/Gabs-Ghidini-PT.pdf";
import Avatar from "../Assets/Images/profile-picture.jpg";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";
import "../Styles/Components/sidebar.sass";

const Sidebar = () => {
	return (
		<aside id="sidebar">
			<img src={Avatar} alt="Gabs Ghidini" />
			<p className="name">Gabs Ghidini</p>
			<p className="title">Desenvolvedor Front-End</p>
			<SocialNetworks />
			<InformationContainer />
			<a href={PT} className="btn" download>
				Download Currículo
			</a>
		</aside>
	);
};

export default Sidebar;
