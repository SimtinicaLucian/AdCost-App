import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VenitService } from '../api/api/venit.service';
import {NgForm} from '@angular/forms';

import { employees } from '../../datamodel/employess.model'

@Component({
  selector: 'app-venit',
  templateUrl: './venit.component.html',
  styleUrls: ['./venit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  


  
})
export class VenitComponent implements OnInit {
  public columns: any;
  public columns2: any;
  public rows: any;
  public variabile: any;
  public auto: any;
  public furnizor: any;
  number: any;
  rows2 : any;
  // ---------------------------
  empolyess: employees[] =[];
  furniz: string;
  aut: string;
  num: any;
// ----------------------------
  



  constructor(public venitService : VenitService) { 
    this.columns = [
      {name: 'data'},
      {name: 'furnizor'},
      {name: 'number'},
      {name: 'auto'},
      {name: 'detalii'},
      {name: 'sumaTotala'},


      
    ]


   }


  ngOnInit() {
    this.venitService.venitSearchAllGet().subscribe((res : any[]) => {
      this.rows = res;
      this.rows2 = res;
    

      console.log(res);

      // this.rows = [{
      //   "data": "27.03.2020",
      //   "furnizor": "simitr2",
      //   "number": 10,
      //   "auto": "AG74STT",
      //   "sumaTotala": 322,
      //   "sumaFaraTVA": 222,
      //   "sumaTVA": 100,
      //   "litri": 1000

      // }]
    })

  
// --------------------------------
  }

register(f: NgForm){
  this.venitService.add(f.value).subscribe(()=>{})
  location.reload();
}

delete(test){
  // console.log("numar: " + test.uid);
  this.venitService.deletePet(test.number).subscribe((res)=>{console.log(res)})
  location.reload();
}

search(data){
  // console.log("numar: " + data.number);
  this.venitService.getPetById(data.number).subscribe((res )=>{
    this.auto= res;
    // this.auto = res.auto;
    // this.furnizor = res.furnizor;
    
    console.log(res);
  })
  // location.reload();
}

search2(data1){
  // console.log("numar: " + data1.furnizor);
  this.venitService.getPetByFurnizor(data1.furnizor).subscribe((res )=>{
    this.furnizor= res;
    // this.auto = res.auto;
    // this.furnizor = res.furnizor;
    
    console.log(res);
  })
  // location.reload();
}


// --------------------------------

Search()
{
  
  if(this.furniz != ""){


  this.rows=this.rows.filter(res=>{
    return res.furnizor.toLocaleLowerCase().match(this.furniz.toLocaleLowerCase());
  });

 

  }else if (this.furniz ==""){
  this.ngOnInit();
}
}

// -----------------------------



SearchAuto()
{
  
  if(this.aut != ""){


  this.rows=this.rows.filter(res=>{
    return res.auto.toLocaleLowerCase().match(this.aut.toLocaleLowerCase());
  });

 

  }else if (this.aut ==""){
  this.ngOnInit();
}
}


SearchNumber()
{


  if(this.num != this.rows){
    
    
    this.venitService.getPetById(this.num).subscribe((res )=>{
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



}



