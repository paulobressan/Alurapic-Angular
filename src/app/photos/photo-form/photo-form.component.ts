import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  //Formulario para gerenciar o formulario de cadastro de fotos
  photoForm: FormGroup;
  //Representa os binarios do arquivo
  file: File;

  constructor(
    private formBuild: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    //Configurações do formulario
    this.photoForm = this.formBuild.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload() {
    //O getRawValue captura os valores do formulario, porem quando se trata de um arquivo ele não consegue
    //capturar os binarios do arquivo para enviar para o backend
    //como temos somente 2 campos, vamos usar manualmente
    // const dados = this.photoForm.getRawValue();
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    //Fazendo upload
    this.photoService.upload(description, allowComments, this.file)
      .subscribe(() => this.router.navigate(['']));
  }
}
