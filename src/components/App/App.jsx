import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Carreras from '../DataTable/Carreras';
import Contacto from '../Contacto/Contacto';
import Estadisticas from '../Estadisticas/Estadisticas';
import Header from '../Header/Header';
import Home from '../Home/Home';
import InicioSesion from '../Autenticacion/InicioSesion';
import Institucional from '../Institucional/Institucional';
import RegistroPublico from '../Autenticacion/RegistroPublico';
import UserProvider from '../Context/UserContext';

//import Registro from '../Autenticacion/Registro';

function App() {
	return (
		<Router>
			<UserProvider>
				<Header />
				<div className="container mt-5 justify-content-md-center">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/inicio-sesion' element={<InicioSesion />} />
						<Route path='/registro' element={<RegistroPublico />} />
						<Route path="/institucional" element={<Institucional />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/perfil" element={<Home/>} />
						<Route path="/historia" element={<Home/>} />
						<Route path="/materias" element={<Contacto />} />
						<Route path="/carreras" element={<Carreras/>} />
						<Route path="/estudiantes" element={<Institucional/>} />
						<Route path="/estadisticas" element={<Estadisticas/>} />
					</Routes>
				</div>
			</UserProvider>
		</Router>

	);
}

export default App;