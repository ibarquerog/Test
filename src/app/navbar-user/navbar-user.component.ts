import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Route, Router} from '@angular/router';
@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  public user : String

  constructor(private appComponent: AppComponent, private router: Router, private route: ActivatedRoute) { }
  navbar : boolean = true;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params['idCliente'];
   }); 
  }
  logOut(){
    this.appComponent.setLogIn(0)
    localStorage.clear();
    this.router.navigate(["/login"])
  }
  decollapse()
  {
    this.navbar = false;
  }
  collapse()
  {
    this.navbar = true;
  }

}
