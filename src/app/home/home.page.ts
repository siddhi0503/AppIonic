import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  router: any;

  constructor() {}
  btnclicked()
  {
    console.log("button clicked")
    this.router.navigate(['home2'])
  }
 
}
