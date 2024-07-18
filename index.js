// 3. EMPLEADOS-A
// En una empresa se tiene personal obrero y personal administrativo. La empresa necesita determinar cuál es alguno de los nombres del personal que gana menos (si no se repite, sólo reportar 1, si se repite, reportar cualquiera) y también el monto promedio pagado sólo los administrativos.
// Al ser consultada por la forma como desean que se presente la salida, la empresa suministra el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana $50, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) gana $150: 

import Empleado from "./classes/empleado.js";
import GrupoEmpleados from "./classes/grupoEmpleado.js";

// Uno de los que gana menos: Mary
// Monto promedio pagado a administrativos: $175

let _empleado1=new Empleado("Juan",100, "obrero")
let _empleado2=new Empleado("Ana",50, "obrero")
let _empleado3=new Empleado("Lin",200, "administrativo")
let _empleado4=new Empleado("Mary",50, "obrero")
let _empleado5=new Empleado("Carlos",150, "administrativo")

let _grupo=new GrupoEmpleados()

_grupo.procesarEmpleado(_empleado1)
_grupo.procesarEmpleado(_empleado2)
_grupo.procesarEmpleado(_empleado3)
_grupo.procesarEmpleado(_empleado4)
_grupo.procesarEmpleado(_empleado5)


document.body.innerHTML=`
<br>
Uno de los que gana menos: ${_grupo.nombreMenorSueldo}
<br>
Monto promedio pagado a administrativos: $${_grupo.promedioSueldoAdmin()}
`