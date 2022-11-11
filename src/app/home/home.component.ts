import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginWitchGoogleService } from '../login-witch-google.service';
import { LoginService } from '../login.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datosUsuario = new FormGroup({
    usuario: new FormControl('',Validators.required),
    contraseña: new FormControl('',Validators.required)
  })

  constructor(private servicioLogin:LoginService,  private google:LoginWitchGoogleService) { }

  colUsuarios:Usuario[]=[];
  ngOnInit(): void {
    this.servicioLogin.getuser().subscribe(usuarios =>this.colUsuarios= usuarios)
  }




//creamos el metodo para iniciar una sesion de google
iniciarSesesiondeGoogle(){
  this.google.LoginWitchGoogleService();    
}
cerrarsesiondeGoogle(){
  this.google.logOut();
}


//damos los parametros del formulario y la coleccion de usuarios en el siguiente metodo
  iniciarSesion(){
   this.servicioLogin.login(this.datosUsuario, this.colUsuarios)
  }
  
}
