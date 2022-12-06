import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";
import "./Styles/Components/app.sass";

function App() {
	return (
		<div id="portfolio">
			<Sidebar />
			<MainContent />
		</div>
	);
}

export default App;
