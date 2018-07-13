import { Component } from '@angular/core';

//criando um componente.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   photos =[
     {
      description:"Leoa1",
      url: "http://pt.kabbalah.com/sites/dev02.kce.kabbalahcentres.com/files/14-07-18-leo-a-double-edged-sword.jpg"
     },
     {
      description:"Leoa2",
      url: "http://pt.kabbalah.com/sites/dev02.kce.kabbalahcentres.com/files/14-07-18-leo-a-double-edged-sword.jpg"
     }
   ]
}