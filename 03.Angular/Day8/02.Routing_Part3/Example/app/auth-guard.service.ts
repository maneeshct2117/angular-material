import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {

  constructor(private router: Router) { }


  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
      //alert("Message from AuthGuardService");

      if( sessionStorage.getItem("AUTH_TOKEN") == null){
          this.router.navigate(['/Login'], { queryParams : {"returnUrl":state.url}});
          return false;
      }
      else
      {
        return true;
      }

  }

}
