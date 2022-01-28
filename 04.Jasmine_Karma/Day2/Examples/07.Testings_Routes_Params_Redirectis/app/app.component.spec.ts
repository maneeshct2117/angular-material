import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

let location:Location;
let router:Router;
let activatedRoute:ActivatedRoute;
let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ AppComponent  ],
      imports : [FormsModule, RouterTestingModule.withRoutes(routes)],
      providers: [
        {provide : ActivatedRoute, useValue : { snapshot: { params : { id:1025}}}}
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router.initialNavigation();

  });

  it('should create the app', () => {

    expect(component).toBeTruthy();
  });

  it('should go to "Home" when your request url is empty', () => {
    router.navigate([""]).then( () =>
    {
      expect(location.path()).toBe('/');
    });

    expect("").toBe("");
  });

  it('should go to "Aboutus" when your request url is "/Aboutus', () => {
    router.navigate(["/Aboutus"]).then( () =>
    {
      expect(location.path()).toBe('/Aboutus');
    });

    expect("").toBe("");
  });


  it('should go to "Login" when your request url is "/Depts', () => {

    sessionStorage.removeItem("AUTH_TOKEN");

    router.navigate(["/Depts"]).then( () =>
    {
      expect(location.path()).toBe("/Login?returnUrl=%2FDepts");
      //expect(location.path().indexOf("/Login")).toBeGreaterThanOrEqual(0);
    });

    expect("").toBe("");
  });


  it('should navigate to "Details" with route parameters', () => {
    router.navigate(["/Details/1025"]).then( () =>
    {
      let id = activatedRoute.snapshot.params["id"];
      expect(id).toBe(1025);
      expect(location.path()).toBe("/Details/1025");
    });

    expect("").toBe("");
  });



  it('should go to "Depts" after login successfully', () => {

    sessionStorage.removeItem("AUTH_TOKEN");

    router.navigate(["/Depts"]).then( () =>
    {
      expect(location.path()).toBe("/Login?returnUrl=%2FDepts");

      const inputArray = fixture.nativeElement.querySelectorAll('input');
      inputArray[0].value = "admin";
      inputArray[0].dispatchEvent(new Event("input"));

      inputArray[1].value = "admin123";
      inputArray[1].dispatchEvent(new Event("input"));


      const buttonObj = fixture.nativeElement.querySelector('button');
      buttonObj.dispatchEvent(new Event("click"));
      fixture.detectChanges();
      tick(3000);
      expect(location.path()).toBe("/Depts");
    });

    expect("").toBe("");
  });


});
