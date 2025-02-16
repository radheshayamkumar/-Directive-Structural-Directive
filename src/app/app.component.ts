import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  isDiv1Active : boolean = true
  isDiv2Active : boolean = true
  
  num1:string="";
  num2:string="";

  isChecked: boolean = true;

  selectedCountry:string ="";

  showDiv1(){
    this.isDiv1Active = true
  }
  hideDiv1(){
    this.isDiv1Active = false
  }
  toggle(){
    this.isDiv2Active =!this.isDiv2Active
  }

  cityArray:string []=['Pune', 'Vadodara', 'Surat', 'Mumbai']
  studentList:any[]=[
    {studentId:1, name:'aaa', city:'pune', isActive:false},
    {studentId:2, name:'bbb', city:'patna', isActive:false},
    {studentId:3, name:'ccc', city:'Mumbai', isActive:true},
    {studentId:4, name:'ddd', city:'Thane', isActive:false}


    

  ]
}
