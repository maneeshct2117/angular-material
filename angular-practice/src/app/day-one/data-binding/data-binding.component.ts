import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  username: string = ""
  password: string = ""
  message:string=""
  count:number=0
  isButtonDisabled=false;
  constructor() { }

  ngOnInit(): void {
  }
  loginClick() {
    if(this.username=="admin" && this.password=="admin"){
      this.message="login"
    }
    else{
     
      this.message="Wrong credentials"
      this.count++;
      if(this.count==3){
        this.isButtonDisabled=true;
      }
    }
  }

}
