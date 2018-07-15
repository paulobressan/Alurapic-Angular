import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  //Tipo object
  photos: any[] = [];

  constructor(
    private photoService: PhotoService,
    //indica a rota ativada no momento
    private activatedRoute: ActivatedRoute
) {}
  
  ngOnInit(): void {
    //capturando o valor passado pela rota.
    const userName = this.activatedRoute.snapshot.params.username;
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }
}
