import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ContactMeService } from '../services/contact-me.service';
import { hireMe } from '../shared/hireMeInfo';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.scss']
})
export class HireMEComponent implements OnInit {
  @ViewChild('hForm') hireMeForm;
  hire:hireMe[];
  constructor(private _saveHire:ContactMeService) { }
  
  ngOnInit(): void {
  }

  onsaveInfo(hire:hireMe){
    this._saveHire.saveHireMeInfo(hire).subscribe(
      (response)=>console.log(response),
      (err)=>console.log(err)
    )
  }

}
