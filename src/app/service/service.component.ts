import { Component, OnInit } from '@angular/core';
import { employees } from '../../datamodel/employess.model'
import{ AlimentariService } from '../api/api/alimentari.service';
// -------------------------------

// /--------------------------------

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  empolyess: employees[] =[];
  furniz: string;
  public columns: any;

  constructor(private alimService  : AlimentariService) {
    this.columns = [
      {name: 'data'},
      {name: 'furnizor'},
      {name: 'number'},
      {name: 'auto'},
      {name: 'sumaTotala'},
      {name: 'litri'},
      {name: 'delete'}
    ]
   }

  ngOnInit(): void {
    this.alimService.alimentariSearchAllGet().subscribe((res)=>{
        this.empolyess = res;
    })

    // this.empolyess = [
    //   {
    //     "data": "27-03-2020",
    //     "furnizor":"simi",
    //     "number": 1,
    //     "auto":"ag74stl",
    //     "sumaTotala": 120,
    //     "litri": 100,
    //   },

    //   {
    //     "data": "27-03-2020",
    //     "furnizor":"cosmin",
    //     "number": 2,
    //     "auto":"ag74stl",
    //     "sumaTotala": 120,
    //     "litri": 100,
    //   }
    // ];
  }

Search()
{
  if(this.furniz != ""){


  this.empolyess=this.empolyess.filter(res=>{
    return res.furnizor.toLocaleLowerCase().match(this.furniz.toLocaleLowerCase());
  });

 

  }else if (this.furniz ==""){
  this.ngOnInit();
}
}



}

// ---------------------------------------------------------------







