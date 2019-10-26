import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-de-archivos',
  templateUrl: './lista-de-archivos.component.html',
  styleUrls: ['./lista-de-archivos.component.css']
})
export class ListaDeArchivosComponent implements OnInit {

  archivos: object;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.peticionExterna();
  }

  peticionExterna(): void {
    const url = 'http://localhost/rodrigo.dev/php-adm-archivos/services/leer-carpeta.php';
    this.http.get(url).subscribe(
      (res) => {
        console.log(res);
        this.archivos = res;
      }
    );
  }

}
