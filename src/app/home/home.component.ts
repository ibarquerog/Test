import { Component, OnInit } from '@angular/core';
import { ObraService } from '../obras/obras.service';
import { Obra } from '../obras/obra';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  obra: Obra;

  constructor(private obraService: ObraService) {
    this.obraService.getObraActual()
      .subscribe(obra => {
        this.obra = obra[0]
        this.obra.FECHA_INICIO = this.obra.FECHA_INICIO.substring(0,10)
        this.obra.FECHA_FIN = this.obra.FECHA_FIN.substring(0,10)
      });
  }

  ngOnInit() {
  }

  getUrl() {
    return "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('" + this.obra.IMG_SOURCE + "')";
  }

}
