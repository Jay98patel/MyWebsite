import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  aboutMesec="Need something built or simply want to have chat? Reach out to me on social media or send me an email.";
  aboutMe="I like building awesome software. I've built websites, browser plugins, corporate software and even games! If you are interested, you can view some of my favorite projects in my portfolio down below.";
  //personal interest
  personalLine="When I am not coding my next project, I enjoy spending my time doing any of the following:"
  firstLine="I love Editing Videos;";
  secondLine="I am watching my favorite eSports games;";
  thirdline="I am brainstorming at conferences around the world;";
  forthLine="And I am meeting more people and creating new opportunities."
  personal='<p>'+this.personalLine+'</p><ul class="ml-4"><li >'+this.firstLine+'</li><li>'+this.secondLine+'</li><li >'+this.thirdline+'</li><li>'+this.forthLine+'</ul>';
  
  

  constructor() { 
  }

 

  ngOnInit(): void {
  }


}
