import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlimentariService } from '../api/api/alimentari.service';
        
        import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-alim',
  templateUrl: './alim.component.html',
  styleUrls: ['./alim.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlimComponent implements OnInit {
  public columns: any;
  public rows: any;
  auto: any;

  constructor(public alimService : AlimentariService) { 
    this.columns = [
      {name: 'data'},
      {name: 'furnizor'},
      {name: 'number'},
      {name: 'auto'},
      {name: 'sumaTotala'},
      {name: 'litri'}
    ]
  }


  ngOnInit() {
    this.alimService.alimentariSearchAllGet().subscribe((res : any[]) => {
      this.rows = res;
    })

   

  }

register(f: NgForm){
  this.alimService.add(f.value).subscribe(()=>{})
  location.reload();
}

delete(test){
  // console.log("numar: " + test.uid);
  this.alimService.deletePet(test.number).subscribe((res)=>{console.log(res)})
  location.reload();
}

search(data){
  this.alimService.getPetById(data.number).subscribe(()=>{})
  location.reload();
}


}
  //