import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<RegisterComponent> {

  constructor() { }

  canDeactivate(component:RegisterComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot) : boolean {

    // canExit() is user defined method defined in RegisterComponent class
    return component.canExit();

}

}
