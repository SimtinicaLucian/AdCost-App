import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SalariuService } from '../api/api/salariu.service';
import {NgForm} from '@angular/forms';

import { employees } from '../../datamodel/employess.model'

@Component({
  selector: 'app-salariu',
  templateUrl: './salariu.component.html',
  styleUrls: ['./salariu.component.scss']
})
export class SalariuComponent implements OnInit {
  public columns: any;
  public columns2: any;
  public rows: any;
  public variabile: any;
  public auto: any;
  public nume: any;
  number: any;
  // ---------------------------
  empolyess: employees[] =[];
  name: string;
  num: any;
// ----------------------------
  



  constructor(public salariuService : SalariuService) { 
    this.columns = [
      {name: 'data'},
      {name: 'nume'},
      {name: 'number'},
      {name: 'detalii'},
      {name: 'sumaTotala'}
    ]
   }


  ngOnInit() {
    this.salariuService.salariuSearchAllGet().subscribe((res : any[]) => {
      this.rows = res;
      this.empolyess = res;

      
    })

  
// --------------------------------
  }

register(f: NgForm){
  this.salariuService.add(f.value).subscribe(()=>{})
  location.reload();
}

delete(test){
  // console.log("numar: " + test.uid);
  this.salariuService.deletePet(test.number).subscribe((res)=>{console.log(res)})
  location.reload();
}

search(data){
  // console.log("numar: " + data.number);
  this.salariuService.getPetById(data.number).subscribe((res )=>{
    this.auto= res;
    // this.auto = res.auto;
    // this.furnizor = res.furnizor;
    
    console.log(res);
  })
  // location.reload();
}

search2(data1){
  // console.log("numar: " + data1.furnizor);
  this.salariuService.getPetByNume(data1.nume).subscribe((res )=>{
    this.nume= res;
    // this.auto = res.auto;
    // this.furnizor = res.furnizor;
    
    console.log(res);
  })
  // location.reload();
}


// --------------------------------

Search()
{
  
  if(this.name != ""){


  this.rows=this.rows.filter(res=>{
    return res.nume.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  });

 

  }else if (this.name ==""){
  this.ngOnInit();
}
}

// -----------------------------





SearchNumber()
{


  if(this.num != this.rows){
    
    
    this.salariuService.getPetById(this.num).subscribe((res )=>{
    this.rows= res;

  });

  this.rows=this.rows.filter(res=>{
    return res.number.toLocaleLowerCase().match(this.num.toLocaleLowerCase());
  });


  // this.rows=this.rows.filter(res=>{
  //   return res.num.toString().match(this.num.toString());
  // });


}else if (this.num ==this.rows){
  this.ngOnInit();
}



}


// this.alimService.getPetById(data.number).subscribe((res )=>{
//   this.auto= res;

}