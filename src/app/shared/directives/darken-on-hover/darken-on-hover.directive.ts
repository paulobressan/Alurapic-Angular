import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    //O selector tem que ficar entre [] obrigatório. Esse é como vamos chamar a diretiva como se fosse um atributo
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness = '70%';

    //o ElementRef é uma referencia do elemento do DOM
    constructor(
        private el : ElementRef,
        //render para manipular o DOM de uma forma segura
        private render : Renderer
    ){}

    //O HotsListener é o decorator que adiciona um evento ao elemento hospedeiro onde a diretiva foi colocada
    //no caso onde a diretiva foi colocado vai ser dispado um mouseover e um mouseleave
    @HostListener('mouseover')
    darkenOn(){
        //Acessar o elemento nativo do DOM
        //this.el.nativeElement;

        //manipulando o DOM com o render, o primeiro parametro o elemento, segundo o atributo css e o terceiro o valor do atributo
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`)
    }

    @HostListener('mouseleave')
    darkenOff(){
         //manipulando o DOM com o render, o primeiro parametro o elemento, segundo o atributo css e o terceiro o valor do atributo
         this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
    }
}