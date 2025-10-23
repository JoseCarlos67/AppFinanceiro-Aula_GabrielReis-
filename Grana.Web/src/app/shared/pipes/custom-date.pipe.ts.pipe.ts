import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipeTs'
})
export class CustomDatePipeTsPipe implements PipeTransform {

 transform(value: string | Date): string {
    if (!value) return '--';

    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return '--';
    }

    const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    const weekDay = weekDays[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${weekDay}, ${day} ${month} ${year}`;
  }

}
