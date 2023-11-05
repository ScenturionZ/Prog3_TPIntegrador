import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Carreras from '../DataTable/Carreras';
import CarrerasProvider from '../Context/CarrerasContext';
import Contacto from '../Contacto/Contacto';
import Estadisticas from '../Estadisticas/Estadisticas';
import Header from '../Header/Header';
import Home from '../Home/Home';
import InicioSesion from '../Security/Autenticacion/InicioSesion';
import Institucional from '../Institucional/Institucional';
import Registro from '../Security/Autenticacion/Registro';
import UserProvider from '../Context/UserContext';

function App() {
	return (
		<Router>
			<UserProvider>
				<CarrerasProvider>
				<Header />
				<div className="container mt-5 justify-content-md-center">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/inicioSesion' element={<InicioSesion />} />
						<Route path='/registro' element={<Registro />} />
						<Route path="/institucional" element={<Institucional />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/ver-editar" element={<Home/>} />
						<Route path="/historia" element={<Home/>} />
						<Route path="/materias" element={<Contacto />} />
						<Route path="/carreras" element={<Carreras/>} />
						<Route path="/estudiantes" element={<Institucional/>} />
						<Route path="/estadisticas" element={<Estadisticas/>} />
					</Routes>
				</div>
				</CarrerasProvider>
			</UserProvider>
		</Router>

	);
}

export default App;