export default class Empleado{
    constructor(nombre, sueldo, tipo){
        this.nombre=nombre;
        this.sueldo=sueldo;
        this.tipo=tipo;
    }

    set nombre(n){
        this._nombre=n
    }
    get nombre(){
        return this._nombre
    }
    set sueldo(s){
        this._sueldo=+s
    }
    get sueldo(){
        return this._sueldo
    }
    set tipo(t){
        this._tipo=t
    }
    get tipo(){
        return this._tipo
    }

}