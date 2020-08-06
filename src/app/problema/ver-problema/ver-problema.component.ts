import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import {Problema} from '../problema'
import {NewProblemService} from '../new-problem/new-problem.service'
import {TipoProblemaService} from '..//../tipo-problema/tipo-problema.service'
import {TipoProblema} from '../../tipo-problema/tipo-problema'
import 'rxjs/Rx'; 
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-ver-problema',
  templateUrl: './ver-problema.component.html',
  styleUrls: ['./ver-problema.component.css']
})
export class VerProblemaComponent implements OnInit {
  mathContent = "  Usando la f\'ormula de Her\'on se tiene que el semiper\'imetro es $s=27/2$, as\'i que el \'area del tri\'angulo original es de $\\sqrt{(27/2)(15/2)(7/2)(5/2)}=45\\sqrt{7}/4$. El tr\'iangulo equil\'atero tiene per\'imetro 27, por lo que cada lado mide $9$, la altura mide $9\\sqrt{3}/2$, y el \'area es de $81\\sqrt{3}/4$. La raz\'on de las \'areas es de $\\dfrac{45\\sqrt{7}}{4} \\div \\dfrac{81\\sqrt{3}}{4} = \\dfrac{5\\sqrt{21}}{27}$ ";
  public problema : Problema;
  nombre : String
  tipoProblemaString : String = ""
  problemLatex : String = ""
  solutionLatex : String = ""
  equation3: string = "La respuesta es negativa. Supongamos que fuera cierto por un momento, podemos formar entonces los subconjuntos $\\{a\\}$, $\\{a,b\\}$, $\\{a,b,c\\}$, $\\{a,b,c,d\\}$ y $\\{a,b,c,d,e\\}$, y la suma de ninguno de tales subconjuntos ser\'ia m\'ultiplo de 5. Tomemos 4 recipientes numerados del 1 al 4, y guardamos el subconjunto que al didivirlo por 5 tiene residuo 1, 2, 3 o 4 en el recipiente respectivo. Como son 5 subconjuntos y 4 recipientes, por el principio del palomar habr\'a dos subconjuntos en el mismo recipiente, tales que el mayor sume $5p+r$ y el menor sume $5q+r$, y como el subconjunto menor est\'a contenido dentro del subconjunto mayor por la forma en que los construimos, al restarlos, nos vamos a quedar con un subconjunto que es divisible por 5.";
  problemLatexVer : String = ""
  solutionLatexVer : String = ""

  tiposProblema : TipoProblema[] = []
  isLoaded = false;
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private newProblemService : NewProblemService,
    private _tipoProblemaService : TipoProblemaService,
    private appComponenet: AppComponent
  ) {
    setTimeout(() => {
      this.nombre = this.route.snapshot.paramMap.get('nombre')
      this.newProblemService.getProblem(localStorage.getItem("IDProblema"))
      .then(p => {this.problema = p[0]
      console.log("Problema-------   "+this.problema.LATEX_SOURCE_PROBLEMA);
      this.problemLatex = this.problema.LATEX_SOURCE_PROBLEMA
      this.solutionLatex = this.problema.LATEX_SOURCE_SOLUCION
      
      this.problemLatexVer = this.problema.LATEX_SOURCE_PROBLEMA
      this.solutionLatexVer = this.problema.LATEX_SOURCE_SOLUCION

      this.tipoProblemaString = this.problema.TIPO_PROBLEMA;
      this.isLoaded = true;
      }  
    
    );
  
    });
   
   }

  ngOnInit() {
    this.appComponenet.setLogIn(1);
  }

  convertLatex(){
      console.log("problema a-------    "+this.problema.LATEX_SOURCE_PROBLEMA);
      this.problema.LATEX_SOURCE_PROBLEMA=this.problema.LATEX_SOURCE_PROBLEMA.replace('\\',"\\\\");
      console.log("problema d-------    "+this.problema.LATEX_SOURCE_PROBLEMA);
  }

}