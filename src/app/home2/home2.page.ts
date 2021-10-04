import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  btnclicked()
  {
    console.log("button clicked")
    this.router.navigate(['login'])
  }

}
