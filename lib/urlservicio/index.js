 
//url de servicios
exports.servicios   = function () { 
	const oUrl = {};
	
	//Servicios de AuditoriaBaseService
	var sHostAuditoriaBase  = 'http://localhost:3001';
 	oUrl["auditoria"]		= [sHostAuditoriaBase]; 
	
	//Servicios de Maesto de Configuracion
	var sHostMaestoBase      	= 'http://localhost:3002';
	oUrl["maestra"]	= [sHostMaestoBase];

	//Servicios de Seguridad
	var sHostSeguridadBase   = 'http://localhost:3003';
	oUrl["seguridad"]		 = [sHostSeguridadBase];
 
	//Servicios para Productos categoria
	var sHostProductoBase  = 'http://localhost:3004';
	oUrl["producto"]			= [sHostProductoBase]; 
	
	//Servicios para Asignacion de caja
	var sHostAsignacionCajaBase  = 'http://localhost:3005';
	oUrl["asignacioncaja"]	= [sHostAsignacionCajaBase]; 

	//Servicio para mantenimiento de ventas
	var sHostVenta = "http://localhost:3006";
	oUrl["venta"]			= [sHostVenta]; 

	//Servicio para mantenimiento de configuracion de empresa
	var sHostConfigEmpresa = "http://localhost:3009";
	oUrl["siges-config-empresa"]	= [sHostConfigEmpresa]; 

	//Servicios para mantemiento de compras
	var sHostMantCompraBase  = 'http://localhost:3010';
	oUrl["compra"]	= [sHostMantCompraBase ]; 

	//Servicios para mantemiento de empleado
	var sHostMantEmpleadoBase  = 'http://localhost:3011';
	oUrl["empleado"]	= [sHostMantEmpleadoBase ]; 

	//Servicios para mantemiento de cliente
	var sHostMantClienteBase  = 'http://localhost:3007';
	oUrl["cliente"]	= [sHostMantClienteBase ]; 

	//Servicios para mantemiento de pedidos
	var sHostMantPedidoBase  = 'http://localhost:3008';
	oUrl["pedido"]	= [sHostMantPedidoBase]; 

	//Servicios para mantemiento de proveedores
	var sHostMantProveedorBase  = 'http://localhost:3013';
	oUrl["proveedor"]	= [sHostMantProveedorBase ]; 
 
	//Servicios para subir arvhicos
	var sHostMantArchivosBase  = 'http://localhost:5002';
	oUrl["documento"]	= [sHostMantArchivosBase ]; 

	//Servicios para enviar correo
	var sHostEnvioEmailBase  = 'http://localhost:5001';
	oUrl["ms-com-utilitario"]	= [sHostEnvioEmailBase ]; 

	return oUrl;
      
};