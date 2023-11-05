import './GraficosDatos.css';

import axios from 'axios';
import CanvasJSReact from '@canvasjs/react-charts';
import { useState , useEffect} from 'react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function GraficosDatos({datos}) {

	const [isLoading, setLoading] = useState(true);
	const [options, setOptions] = useState({
        title: {
			text: "Cantidad de alumnos inscriptos a " + datos
		},
		axisX: {    
		  	labelAngle: 0,
		  	labelTextAlign: "center"
		},
		data: []
    });

    function setData(d) {
        setOptions({
          ...options,
          data : d
        });
    }
	
	useEffect(() => {
		let newData = [
			{
				type: "column",
				dataPoints: []
			}
		];
		const url = "http://localhost:5000/api/v1/" + datos + "/incriptos";
		axios.get(url).then(res => {
			for(const data of res.data.dato){
				newData[0].dataPoints.push({
					label: data.nombre,  
					y: data.alumnos
				})
			}
			setData(newData);
			setLoading(false);
		}).catch(err =>{
			console.log(err);
		});	
	}, []);

	if (isLoading) {
		return (
			<>
				<div>Cargando...</div>
			</>
		);
	}

	return (
		<>
			<div>
				<CanvasJSChart options = {options} />
			</div>
		</>
	);
}

export default GraficosDatos;