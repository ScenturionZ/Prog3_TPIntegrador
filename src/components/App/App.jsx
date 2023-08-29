import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import Institucional from '../Institucional/Institucional';
import Contacto from '../Contacto/Contacto';
import Header from '../Header/Header';

function App() {
	return (
		<Router>
			<Header />
			<div className="container mt-5 justify-content-md-center">
				<Routes>
					<Route index exact path="/" element={<Home />} />
					<Route path="/institucion" element={<Institucional />} />
					<Route path="/contacto" element={<Contacto />} />
				</Routes>
			</div>
		</Router>
		
	);
}

export default App;