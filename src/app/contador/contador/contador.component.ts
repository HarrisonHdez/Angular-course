import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `

    <h1>El titulo es: {{ nombre }} </h1>
    <h1>La base es: {{ base }} </h1>

    <button (click)="aumentar( base )">+5</button>
    <span> {{ numero }} </span>
    <button (click)="aumentar( -base )">-5</button>
        
    `
})
export class ContadorComponent {
    nombre: string = 'Contador';
    base: number = 5;
    numero: number = 10;

    aumentar(valor:number ): void {
        this.numero += valor;
    }
}


