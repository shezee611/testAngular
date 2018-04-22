import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchNewsPipe'
})
export class SearchNewsPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    
    return items.filter(it => {
      //it.title.toLowerCase().includes(searchText);
      //console.log(it.title.toLowerCase());
      if (it.title.toLowerCase().search(searchText) > -1 || it.body.toLowerCase().search(searchText) > -1) {
        return true;
      }
      else {
        return false;
      }
    });
  }
}


