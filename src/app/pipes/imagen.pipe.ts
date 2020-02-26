import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

    transform(value:any): any {

        if((value.length) != 0){
            //console.log(value[0].url);
            /*for(var i = 0;i<(value.length);i++){
                if((value[i].url) == null){
                    return 'assets/img/noimage.png';
                }else{
                    return value[i].url;
                }
            }*/
            return value[0].url;
        }else{
            return 'assets/img/noimage.png';
        }
    }

}
