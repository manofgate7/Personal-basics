import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImage'
})
export class WeatherImagePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let image_Base = "/assets/";
 
    if(value < 40)
      return image_Base+"cold.png";
    else if(value < 60 && value >= 40)
      return image_Base+"semiCold.png";
    else if(value < 80 && value >= 60)
      return image_Base+"goodTemp.png";
    else 
      return image_Base+"hot.png";
  }

}
