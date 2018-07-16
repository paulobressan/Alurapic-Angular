import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  //Tipo object
  photos: Photo[] = [];
  filter: string = '';
  
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
