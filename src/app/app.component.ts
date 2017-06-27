import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  opcion = '';
  otrol = '';


  tolls = [
    {id: 1, nombre: 'Jquery'},
    {id: 2, nombre: 'React.js'},
    {id: 3, nombre: 'Angular'},
    {id: 4, nombre: 'Bootstrap'},
    {id: 5, nombre: 'CodeIgniter'},
  ];
  Agregar(nuevo) {
    this.tolls.push({
      id: this.tolls[4]['id'] + 1,
      nombre: nuevo.value
    });
  }
  Eliminar(item){
    let index = this.tolls.indexOf(item);
    this.tolls.splice(index,1);
  }
}
