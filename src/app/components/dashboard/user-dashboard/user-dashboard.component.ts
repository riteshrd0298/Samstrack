import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface subjectCardInterface{
  imgUrl:string;
  altAttr:string;
  subName:string;
  externalurl:string;
}
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  subjectDetails:Array<subjectCardInterface> =[
    {
      imgUrl:'/assets/images/java.png',
      altAttr:'Java logo',
      subName:'Java ',
      externalurl:'https://dev.java'
    },
    {
      imgUrl:'/assets/images/python.png',
      altAttr:'Python logo',
      subName:'Python ',
      externalurl:'https://www.w3schools.com/python/default.asp'
    },
    {
      imgUrl:'/assets/images/msnet.jpg',
      altAttr:'.net logo',
      subName:'.net ',
      externalurl:'https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet'
    },
    {
      imgUrl:'/assets/images/php.jpg',
      altAttr:'Php logo',
      subName:'Php ',
      externalurl:'https://www.w3schools.com/php/default.asp'
    },
     {
      imgUrl:'/assets/images/angular.png',
      altAttr:'angular logo',
      subName:'angular ',
      externalurl:'https://angular.dev'
    },
     {
      imgUrl:'/assets/images/react.png',
      altAttr:'react logo',
      subName:'react ',
      externalurl:'https://react.dev/'
    },
     {
      imgUrl:'/assets/images/javacsript.png',
      altAttr:'javacsript logo',
      subName:'javacsript ',
      externalurl:'https://www.w3schools.com/js/default.asp'
    },
     {
      imgUrl:'/assets/images/mysql.jpg',
      altAttr:'mysql logo',
      subName:'mysql ',
      externalurl:'https://www.w3schools.com/mysql/default.asp'
    },
  ]
 
}
