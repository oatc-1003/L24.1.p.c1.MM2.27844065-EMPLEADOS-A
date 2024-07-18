export default class GrupoEmpleados{
    constructor(){
        this.TIPOS_EMPLEADO=["administrativo","obrero"]
        this.contEmpleados=0;
        this.contEmpleadosAdmin=0;
        this.acuSueldoAdmin=0;
        this.menorSueldo=1000;
        this.nombreMenorSueldo="";
    }

    procesarEmpleado(empleado){
        this.contEmpleados++
        if( empleado.tipo.toLowerCase() === this.TIPOS_EMPLEADO[0]){
            this.contEmpleadosAdmin++
            this.acuSueldoAdmin+=empleado.sueldo
        }
        if(empleado.sueldo<this.menorSueldo){
            this.menorSueldo=empleado.sueldo
            this.nombreMenorSueldo=empleado.nombre
        }
    }

    promedioSueldoAdmin(){

        return this.acuSueldoAdmin/this.contEmpleadosAdmin

    }

}