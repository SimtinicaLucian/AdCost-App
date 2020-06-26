import { Component, OnInit } from '@angular/core';
import { employees } from '../../datamodel/employess.model'
import{ AsigurariService } from '../api/api/asigurari.service';
import { NgForm } from '@angular/forms';


 // -------------------------------

// /--------------------------------

@Component({
  selector: 'app-asigurari',
  templateUrl: './asigurari.component.html',
  styleUrls: ['./asigurari.component.scss']
})


export class AsigurariComponent implements OnInit {
  public columns: any;
  public columns2: any;
  public rows: any;
  public variabile: any;
  public auto: any;
  public furnizor: any;
  number: any;
  // ---------------------------
  empolyess: employees[] =[];
  furniz: string;
  aut: string;
  num: any;
  dat: string;
// ----------------------------
  



  constructor(public asigurarieService : AsigurariService) { 
    this.columns = [
      {name: 'data'},
      {name: 'furnizor'},
      {name: 'number'},
      {name: 'auto'},
      {name: 'descriere'},
      {name: 'sumaTotala'},

      
    ]
   }


  ngOnInit() {
    this.asigurarieService.serviceSearchAllGet().subscribe((res : any[]) => {
      this.rows = res;
      this.empolyess = res;

      
    })

  
// --------------------------------
  }

register(f: NgForm){
  this.asigurarieService.add(f.value).subscribe(()=>{})
  location.reload();
}

delete(test){
  // console.log("numar: " + test.uid);
  this.asigurarieService.deletePet(test.number).subscribe((res)=>{console.log(res)})
  location.reload();
}

search(data){
  // console.log("numar: " + data.number);
  this.asigurarieService.getPetById(data.number).subscribe((res )=>{
    this.auto= res;
    // this.auto = res.auto;
    // this.furnizor = res.furnizor;
    
    console.log(res);
  })
  // location.reload();
}

search2(data1){
  // console.log("numar: " + data1.furnizor);
  this.asigurarieService.getPetByFurnizor(data1.furnizor).subscribe((res )=>{
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
    
    
    this.asigurarieService.getPetById(this.num).subscribe((res )=>{
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


SearchData()
{
  
  if(this.dat != ""){


  this.rows=this.rows.filter(res=>{
    return res.data.toLocaleLowerCase().match(this.dat.toLocaleLowerCase());
  });

 

  }else if (this.dat ==""){
  this.ngOnInit();
}
}



}