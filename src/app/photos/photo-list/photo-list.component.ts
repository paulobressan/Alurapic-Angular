import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  //Tipo object
  photos: Photo[] = [];
  filter: string = '';
 
  //Variavel de paginação, se existe mais item
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    //indica a rota ativada no momento
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.username;
    //O activeRouters é a rota ativa no momento
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
