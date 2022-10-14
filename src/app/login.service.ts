import { Injectable } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Usuario } from './usuario';
//el "map" recorre un arrego y devlvia una copia del arreglo
import { map } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoged= false

  coleccionusuarios: AngularFirestoreCollection<Usuario>

  constructor(private db:AngularFirestore) { 
    
    this.coleccionusuarios = db.collection("usuario")
  }


  //solo vamos a tarer los datos de los usuarios
  getuser(){
    return this.coleccionusuarios.snapshotChanges().
    pipe(map(action=>action.map(a=>a.payload.doc.data())))
  }

  login(form:FormGroup, usuarioCol:Usuario[]){
    let texto = "Usted no es usuario"
    if(form.valid){
      usuarioCol.forEach(
        usuario=>{
          if(form.value.usuario == usuario.username){
            if(form.value.contraseña == usuario.contrasena){
              texto = "inicio sesion correctamente"
              this.isLoged= true
            }
          }
        }
      )
    }
    alert(texto)
  }
  

  estaLogueado(){
    return this.isLoged
  }
}
