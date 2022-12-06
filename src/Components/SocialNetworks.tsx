import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../Styles/Components/socialnetworks.sass";

const socialNetworks = [
	{
		name: "linkedin",
		icon: <FaLinkedin />,
		link: "https://www.linkedin.com/in/gabsghidini/",
	},
	{
		name: "github",
		icon: <FaGithub />,
		link: "https://github.com/gabsghidini/",
	},
	{
		name: "instagram",
		icon: <FaInstagram />,
		link: "https://www.instagram.com/gabsghidini/",
	},
];

const SocialNetworks = () => {
	return (
		<section id="social-networks">
			{socialNetworks.map((network) => (
				<a
					href={network.link}
					className="social-btn"
					id={network.name}
					key={network.name}
					target="_blank"
				>
					{network.icon}
				</a>
			))}
		</section>
	);
};

export default SocialNetworks;
