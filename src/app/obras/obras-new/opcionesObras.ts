import { TipoTecnica } from './../tipo-tecnica';
import { TipoColeccion } from './../tipo-coleccion';

export class OpcionesObras {
    constructor(
        public tiposColecciones: TipoColeccion[] = [],
        public tiposTecnicas: TipoTecnica[] = []
    ) { }
}