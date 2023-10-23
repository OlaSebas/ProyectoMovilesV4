import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth, private router:Router) { }

  async registration(email: string, password: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }
  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }
  async restorePass(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }
  async logOut() {
    return await this.ngFireAuth.signOut()
  }
  async getProfile() {
    return await this.ngFireAuth.currentUser
  }

  async userExist(email:string){
    var retorno:boolean
    await this.ngFireAuth.fetchSignInMethodsForEmail(email).then((signInMethods) => {
      if (signInMethods.length === 0) {
        // El correo electrónico no está registrado en Firebase.
        console.log("El usuario no existe");
        retorno = false
      } else {
        // El correo electrónico está registrado en Firebase.
        console.log("El usuario existe");
        retorno = true
      }
    })
    .catch((error) => {
      console.error("Error al verificar la existencia del usuario:", error);
      retorno = false
    });
    return retorno 
  }

  async isLogin() {
    return this.ngFireAuth.authState.pipe(
      take(1), // Tome un solo valor y complete la suscripción.
      map(authState => !!authState), // Convierte el estado de autenticación en un booleano.
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión si no está autenticado.
        }
      }
      ))
  };
}