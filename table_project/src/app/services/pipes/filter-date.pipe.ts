import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: Date): any {
    if(arg){
      return value.filter((re: string | any) => re.fecha >=arg);
    }
      
   return value
    
  }
    
  
}

@Pipe({
  name: 'filterDate1'
})
export class FilterPipe2 implements PipeTransform {

  transform(value: any, arg: Date): any {
    if(arg){
     return value.filter((re: string | any) => re.fecha <=arg);
    }
    return value
   
  }
    
  
}



