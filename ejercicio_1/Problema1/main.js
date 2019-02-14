import Contacto from "./Contacto.js";

let trabajador1 = new Contacto('Eduardo', 'Programador', 3129987495, 'edaurdo2@ucol.mx');
trabajador1.informacion();

trabajador1.nombre = 'Jorge';
console.log(trabajador1.nombre);
trabajador1.puesto = 'Tester';
console.log(trabajador1.puesto);
trabajador1.telefono = 3135558873;
console.log(trabajador1.telefono);
trabajador1.email = 'Jorge@gmail.com';
console.log(trabajador1.email);

trabajador1.informacion();