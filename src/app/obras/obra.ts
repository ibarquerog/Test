export class Obra {
    constructor(
        public ID_OBRA_DE_ARTE: number = 0,
        public TIPO_COLECCION: string = "",
        public TIPO_DE_TECNICA: string = "",
        public NOMBRE_DE_OBRA: string = "",
        public NOMBRE_ARTISTA: string = "",
        public IMG_SOURCE: string = "",
        public LARGO: number = 0,
        public ANCHO: number = 0,
        public YEAR: number = 0,
        public FECHA_INICIO: string = new Date().toLocaleDateString(),
        public FECHA_FIN: string = new Date().toLocaleDateString(),
    ) { }
}
