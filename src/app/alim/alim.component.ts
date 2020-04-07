import { Component, OnInit } from '@angular/core';
import { AlimentariService } from '../api'


@Component({
  selector: 'app-alim',
  templateUrl: './alim.component.html',
  styleUrls: ['./alim.component.scss']
})
export class AlimComponent implements OnInit {
  furnizor : string;


  constructor(public alimService : AlimentariService) { }


  ngOnInit() {
    this.alimService.getPetById(1).subscribe((res) => {
      this.furnizor = res.auto;
      console.log(res.auto);
      
    })
  }

}

