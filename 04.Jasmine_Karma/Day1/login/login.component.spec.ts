import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1. Default ---  Testing Component Instance Creation
  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

  //2. Testing Component Properties
  it('result property should be empty as default value', () => {
    const strOutput:string  = component.result;
    expect(strOutput).toBe("");
  });

  //3. Testing Component Methods
  it('should result contains "Welcome to Admin" for valid user credentials', () => {

    component.uid = 'admin';
    component.pwd = 'admin123';
    component.login_click();

    const strOutput:string  = component.result;
    expect(strOutput).toBe("Welcome to Admin");
  });

  //4. Testing Component Methods
  it('should result contains "Invalid user id or password" for invalid user credentials', () => {

    component.uid = 'hello';
    component.pwd = 'hello123';
    component.login_click();

    const strOutput:string  = component.result;
    expect(strOutput).toBe("Invalid user id or password");
  });

  //5. Testing Component Methods
  it('should result contains "Invalid user id or password" for empty  user credentials', () => {

    component.uid = '';
    component.pwd = '';
    component.login_click();

    const strOutput:string  = component.result;
    expect(strOutput).toBe("Invalid user id or password");
  });


  //6. Testing Component Templates -- html elements
  it('should set the value to user id textbox', () => {
    const inputObj = fixture.nativeElement.querySelector('input');
    inputObj.value = "Scott";

    // reflect two-way data binding
    inputObj.dispatchEvent(new Event("input"));

    // console.log("User Id  : "  + component.uid);
    expect(component.uid).toBe("Scott");
  });


  //7. Testing Component Templates -- html elements
    it('should login button click generates result in paragraph -- valid user', () => {

      const inputArray = fixture.nativeElement.querySelectorAll('input');
      inputArray[0].value = "admin";
      inputArray[0].dispatchEvent(new Event("input"));

      inputArray[1].value = "admin123";
      inputArray[1].dispatchEvent(new Event("input"));


      const buttonObj = fixture.nativeElement.querySelector('button');
      buttonObj.dispatchEvent(new Event("click"));
      fixture.detectChanges();

      const paraObj = fixture.nativeElement.querySelector('p');
      expect(paraObj.textContent).toBe("Welcome to Admin");
    });


    //8. Testing Component Templates -- html elements
    it('should login button click generates result in paragraph -- invalid user', () => {

      const inputArray = fixture.nativeElement.querySelectorAll('input');
      inputArray[0].value = "hello";
      inputArray[0].dispatchEvent(new Event("input"));

      inputArray[1].value = "hello123";
      inputArray[1].dispatchEvent(new Event("input"));


      const buttonObj = fixture.nativeElement.querySelector('button');
      buttonObj.dispatchEvent(new Event("click"));
      fixture.detectChanges();

      const paraObj = fixture.nativeElement.querySelector('p');
      expect(paraObj.textContent).toBe("Invalid user id or password");
    });





  // To skip the test
  xit('this test case will ignored', () => {
    expect(component).toBeTruthy();
  });


});
