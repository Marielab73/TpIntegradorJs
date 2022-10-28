//defino valor de entrada
var valorTicket=200;


//defino las varibles de descuento.
var estudiante=80;
var trainee=50;
var junior=15;


//capturo informacion desde inputs

nombre=document.getElementById("idNombre");
apellido=document.getElementById("idApellido");
correo=document.getElementById("idCorreo");

cantidad=document.getElementById("idCantidad");
categoria=document.getElementById("idCategoria");

botonTotal=document.getElementById("idTotalPagar")
botonResumen=document.getElementById("idBotonR");
botonBorrar=document.getElementById("idBotonB");

botonResumen.addEventListener("click",funcionResumen);
botonBorrar.addEventListener("click",funcionBorrar);

function funcionResumen()
             {


                if(nombre.value==="")
                  {
                     alert("Debe ingresar Nombre");
                     nombre.focus();
                     return;
                  }

                  if(apellido.value==="")
                  {
                     alert("Debe ingresar Apellido");
                     apellido.focus();
                     return;
                  }

                  if(correo.value==="")
                  {
                     alert("Debe ingresar Correo valido");
                     correo.focus();
                     return;
                  }

                  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

                  if ( !validEmail.test(correo.value) )
                   {
                   alert('Debe ingresar un Correo valido');
                   correo.focus();
                   return;
                    }


                if  (cantidad.value <= 0) 
                 {
                    alert(" Debe ingresar una Cantidad de entrada");
                    cantidad.focus();
                    return;
                 }
                 else { 
                
                valor= (cantidad.value * valorTicket);

                switch (categoria.value) {
                    case "1":
                         aux= valor - ((valor * estudiante )/100);
                         break; 
                    case "2":
                         aux= valor - ((valor * trainee )/100);
                         break;
                     case "3":  
                         aux= valor - ((valor * junior )/100);
                         break;
                    default:
                          aux= valor;
                         break;
                  } 
                  botonTotal.innerHTML= aux;
                
                }
                             
             }

function funcionBorrar()

{

    botonTotal.innerHTML= "";
    
}



     