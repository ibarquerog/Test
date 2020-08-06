export class Problema {
    //ESTA CLASE CONTIENE EL SELECT CON ALS FECHAS Y TIPOS DE PROBLEMA
    constructor(
        public ID_PROBLEMA:string = "",
        public NOMBRE : string = "",
        public LATEX_SOURCE_PROBLEMA : string = "",
        public TIPO_PROBLEMA : string = "",
        public LATEX_SOURCE_SOLUCION : string = "",
        public FECHA_LIBERACION_PROBLEMA:string="",
        public FECHA_LIBERACION_SOLUCION:string=""     
        
    ){}
}
