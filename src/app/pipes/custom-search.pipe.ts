import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class CustomSearchPipe implements PipeTransform {

  transform(items: any[], keyword: any, properties: string[]): any[] {
    if (!items) return [];
    if (!keyword) return items;
    console.log(properties)
    return items.filter(item => {
      var itemFound: Boolean;           
      for (let i = 0; i < properties.length; i++) {
          console.log(this.deep_value(item,properties[i]))
          //console.log(item[properties[i]])
          let temp=this.deep_value(item,properties[i])
        if (temp.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) !== -1) {
          itemFound = true; 
          break;
        }
      }
      return itemFound;
    });

  }

   deep_value = function(obj, path){
    for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
        obj = obj[path[i]];
    };
    return obj;
};

}