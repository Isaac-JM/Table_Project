import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterCheck'
})
export class FilterPipeCheck1 implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg[0] != '' || arg[1] != '' || arg[2] != '' || arg[3] != '' || arg[4] != '' || arg[5] != '' || arg[6] != '') {
      return value.filter((re: string | any) => re.estado === arg[0] || re.estado === arg[1] || re.estado === arg[2] || re.estado === arg[3] || re.estado === arg[4] || re.estado === arg[5] || re.estado === arg[6] );
    }
    return value;
  }
}














