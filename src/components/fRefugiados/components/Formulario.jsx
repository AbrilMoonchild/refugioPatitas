import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from "react-router-dom"
import "../styles/Formulario.css"
const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
		
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					if(!valores.cedula){
						errores.cedula = 'ingresa solo numeros validos'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.cedula)){
						errores.cedula = ''
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
				
		
			>
				
				{( {errors} ) => (
					
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Pon tu Nombre Completo Aqui"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<label htmlFor="cedula">Cedula de Identidad</label>
							<Field
								type="number" 
								id="cedula" 
								name="cedula" 
								placeholder="coloca el numero de identificacion" 
							/>
							<ErrorMessage name="cedula" component={() => (<div className="error">{errors.cedula}</div>)} />
						</div>

						<div>
							<label htmlFor="Numero">Numero De Telefono</label>
							<Field
								type="number" 
								id="Numero" 
								name="Numero" 
								placeholder="coloca tu Numero De Telefono" 
							/>
							<ErrorMessage name="cedula" component={() => (<div className="error">{errors.cedula}</div>)} />
						</div>

						<div>
							<label htmlFor="Nombre A.">Nombre Para Tu Nuevo Amigo</label>
							<Field
								type="text" 
								id="Nombre A." 
								name="Nombre A." 
								placeholder="Pon El Nombre De Tu nuevo amigo" 
							/>
							<ErrorMessage name="Nombre A." component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<Field name="pais" as="select">
								<option value="La Paz">La Paz</option>
								<option value="Cochabamba">Cochabamba</option>
								<option value="Tarija">Tarija</option>
								<option value="Santa Cruz">Santa Cruz</option>
								<option value="Oruro">Oruro</option>
								<option value="Potosi">Potosi</option>
								<option value="Beni">Beni</option>
								<option value="Pando">Pando</option>
							</Field>
						</div>

						<div>
							<label htmlFor="Nombre A.">Marca Tu Sexo</label>
							<label>
								<Field type="radio" name="sexo" value="hombre" /> Hombre
							</label>
							<label>
								<Field type="radio" name="sexo" value="mujer" /> Mujer
							</label>
						</div>

						<div>
							<Field name="mensaje" as="textarea" placeholder="Dinos tus razones Por las cuales quieres adoptar a tu nuevo amigo" />
						</div>
						<Link to = "/Gracias"><button type="submit">Enviar</button></Link>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</>
	);
}
 
export {Formulario} ;