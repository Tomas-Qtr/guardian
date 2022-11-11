import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { async } from '@firebase/util';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginWitchGoogleService {

  constructor(private autch:AngularFireAuth, private cookie:CookieService) { }

   async LoginWitchGoogleService(){
    let referenceProvider= new firebase.auth.GoogleAuthProvider();

    await this.autch.signInWithPopup(referenceProvider)

  this.autch.authState.subscribe(
    async user=>{
       await    user?.getIdToken().then(token=>{
        this.cookie.set("idToken", token)
       })
     .catch(error=>{
      alert("a ocurrido un error" + error)
     })
    }
  )    

   }

   logOut(){
    this.autch.signOut().then(()=>{
      this.cookie.delete("idToken")
    })
   }
}
