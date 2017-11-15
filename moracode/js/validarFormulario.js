(function(){
			//Variables
			var formulario = document.getElementById("formulario"),
				nombre = document.getElementById("nombre"),
				apellido = document.getElementById("apellido"),
				email = document.getElementById("email"),
				telefono = document.getElementById("telefono"),
				cedula = document.getElementById("cedula"),
				mensaje = document.getElementById("mensaje"),
				checkbox = document.getElementById("checkbox");

			//Funciones
			var validarNombre = function(e){
				if (nombre.value == 0) {
					swal({ 
						title: 'Por favor',
						text: 'Ingresa tu nombre en el campo.',
						type: 'error',
						confirmButtonText: 'Entiendo'
					});
					e.preventDefault();
				};
			};

			var validarApellido = function(e){
				if (apellido.value == 0) {
					swal({ 
						title: 'Por favor',
						text: 'Ingresa tu apellido en el campo.',
						type: 'error',
						confirmButtonText: 'Entiendo'
					});
					e.preventDefault();
				};
			};

			var validarEmail = function(e){
				if (email.value == 0) {
					swal({ 
							title: 'Por favor',
							text: 'Ingresa tu correo electronico en el campo.',
							type: 'error',
							confirmButtonText: 'Entiendo'
						});
					e.preventDefault();
				};
			};

			var validarTelefono = function(e){
				if (telefono.value == 0) {
					swal({ 
							title: 'Por favor',
							text: 'Ingresa tu numero de celular o telefono en el campo.',
							type: 'error',
							confirmButtonText: 'Entiendo'
						});
					e.preventDefault();
				};
			};

			var validarCedula = function(e){
				if (cedula.value == 0) {
					swal({ 
							title: 'Por favor',
							text: 'Ingresa tu numero de cedula en el campo.',
							type: 'error',
							confirmButtonText: 'Entiendo'
						});
					e.preventDefault();
				};
			};

			var validarMensaje = function(e){
				if (mensaje.value == 0) {
					swal({ 
							title: 'Por favor',
							text: 'Ingresa tu mensaje en el campo.',
							type: 'error',
							confirmButtonText: 'Entiendo'
						});
					e.preventDefault();
				};
			};

			var validarCheckbox = function(e){
				if (checkbox.checked == false) {
					swal({
							title: 'Por favor',
					 		text: 'Acepta el cuadro de la declaración.',
					 		type: 'error',
					 		confirmButtonText: 'Entiendo'
					 	});
					e.preventDefault();
				};
			};

			//Funcion Maestra
			var validar = function(e){
				validarCheckbox(e);
				validarMensaje(e);
				validarCedula(e);
				validarTelefono(e);
				validarEmail(e);
				validarApellido(e);
				validarNombre(e);
			};

			//Eventos
			formulario.addEventListener("submit", validar);
		}())