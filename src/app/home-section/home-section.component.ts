import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as $ from 'node_modules/jquery/dist/jquery.min.js';
@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  tagline1="The Technology you need";
  tagline2="Engineered for excellence";

  options = {
    strings: [this.tagline1,this.tagline2],
    typeSpeed: 50,
    loop:true,
    smartBackspace: true
  };
  constructor() { }

  ngOnInit(): void {
    var typed = new Typed('.text', this.options);
  }

}
