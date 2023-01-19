const request = require('request-promise-native')

exports.httpMetodo = async function (options, url, path ) { 
	
	 var oResponse			  = {};
	 oResponse.oAuditResponse = {};
	 oResponse.oData		  = [];
     try { 
     	 	var sQuery = '';
     		try{
     			 var aParameter = path.split("?"); 
     			 if(aParameter[1] !== undefined  && aParameter[1] !== null){
     			 	
     			 	if(url.indexOf('?') !== -1){
     			 		sQuery = '&'+aParameter[1];
     			 	}else{
     			 		sQuery = '?'+aParameter[1];
     			 	}
     			 }  
     		}catch(e){
     			sQuery = '';
     		} 
 			options.uri = options.uri + sQuery;
		   
		    oResponse = await request(options) 
			  
     } catch (e) {
        	 
         	oResponse.oAuditResponse.iCode = -2;
			oResponse.oAuditResponse.sMessage = 'Ocurrio un error en el api gateway utilitario, ' + e.toString();
     }
     
     return oResponse; 
}

exports.generaHeaders = function (oHeader ) { 
	var oResponse = {};
	oResponse.sIdTransaccion	 = oHeader.sidtransaccion;
	oResponse.sAplicacion		 = oHeader.saplicacion;
	oResponse.sUsuario      	 = oHeader.sUsuario;
	oResponse.oInfoUsuario		 = oHeader.oInfoUsuario;
	oResponse.oEmpresa		 	= oHeader.oEmpresa;
	oResponse.sSociedad		 	= oHeader.sSociedad;
	oResponse.dFecha			 = oHeader.dfecha;
	oResponse.sTerminal			= (oHeader.sterminal) ? oHeader.sterminal : oHeader['x-forwarded-for'];
	oResponse['Content-Type']	= 'application/json;charset=UTF-8';
	oResponse['Accept'] 		= 'application/json;charset=UTF-8'; 
	oResponse.Authorization  = oHeader.authorization; 
	return oResponse;
}