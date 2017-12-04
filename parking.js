"use strict"
/**
 * @file aplicacion para la gestion de un parking
 * @author Borja Fariña Gonzalez
 * @version 0.1
 */

/**
 * @class Parking
 * @property {number} capacidad numero de coches que puede haber en el parking
 * @prop {array} tunellavado Lista de coches para lavar 
 * @property {array} coches lista de coches en el parking
 */

class Parking {
    /**
     * @description metodo para meter un coche en el parking
     * @param {number} capacidad numero de coches que entra en el parking
     */
    constructor(capacidad) {
        this._capacidad=capacidad
        this._tunellavado = []
        this._coches = []
    }
/**
 * @param {object} coche coche que metemos en el parking
 * @return {number} -1 parking lleno; 0 entra en el parking
 */
    MeterCoche(coche){
        if(this._capacidad>0){
        // (this._capacidad-this._coches.length-this._tunellavado.length)>0){ // si la capacidad -Array de coches -array de tunellavado es mayor que 0.
        this._capacidad --; //decremento la capacidad
            if(coche.lavado==true){ 
                this._tunellavado.push(coche.matricula)
            }else{
                this._coches.push(coche.matricula)
            }
            return 0;
            // console.log("entran los coches en el parking",)
        }else{
            return -1;
            // console.log("no entra ningun coche en el parking",)
        }
        
    }
}

let parking= new Parking(2);
let coche1={
    matricula:"PO23546",
    lavado:true
}
console.log(parking.MeterCoche(coche1))
console.log(parking)