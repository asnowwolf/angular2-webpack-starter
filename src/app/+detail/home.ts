import {Component} from "@angular/core";

@Component({
  selector: 'home',

  template: require('./home.jade')
})
export class Home {
  constructor() {

  }

  ngOnInit() {
    console.log('hello detail\'s `Home` component');
  }
}
