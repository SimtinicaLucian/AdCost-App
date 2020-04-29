import { Component, OnInit } from '@angular/core';
// -------------------------------
// import { Pipe, PipeTransform } from '@angular/core';
// /--------------------------------

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// ---------------------------------------------------------------

// Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {

//     if (!items) {
//       return [];
//     }
//     if (!searchText) {
//       return items;
//     }
//     searchText = searchText.toLocaleLowerCase();

//     return items.filter(it => {
//       return it.toLocaleLowerCase().includes(searchText);
//     });
//   }
// }






