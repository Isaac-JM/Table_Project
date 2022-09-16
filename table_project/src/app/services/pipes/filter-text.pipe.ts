import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterClient'
})
export class FilterPipeText implements PipeTransform {

  transform(value: any, arg: String): any {
    if (arg) {
      return value.filter((re: string | any) => re.alias_cliente.toUpperCase().substr(0,arg.length)==arg.toUpperCase());
    }

    return value

  }



}

@Pipe({
  name: 'filterType'
})
export class FilterPipeText1 implements PipeTransform {

  transform(value: any, arg: String): any {
    if (arg == "TODOS") {
      return value
    }
    if (arg) {
      return value.filter((re: string | any) => re.tipo === arg);
    }


    return value

  }


}

@Pipe({
  name: 'filterRef'
})
export class FilterPipeText2 implements PipeTransform {

  transform(value: any, arg: String): any {
    if (arg) {
      return value.filter((re: string | any) => re.referencia.toUpperCase().substr(0,arg.length)==arg.toUpperCase());
    }

    return value


  }





}

@Pipe({
  name: 'filterUser'
})
export class FilterPipeText3 implements PipeTransform {

  transform(value: any, arg: String): any {
    if (arg) {
      return value.filter((re: string | any) => re.usuario.toUpperCase().substr(0,arg.length)==arg.toUpperCase());
    }

    return value


  }

}




