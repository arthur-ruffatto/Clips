import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import IUser from "../models/user.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>;
  public isUserAuthenticated$: Observable<boolean>;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.usersCollection = this.db.collection('users');
    this.isUserAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    )
  }

  public async createUser(userData: IUser){
    const userCredentials = await this.auth.createUserWithEmailAndPassword(
      userData.email as string, userData.password as string
    )

    if (!userCredentials.user){
      throw new Error('Invalid Credentials');
    }

    await this.usersCollection.doc(userCredentials.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    })

    await userCredentials.user.updateProfile({
      displayName: userData.name
    })
  }

  public async loginUser(userData: IUser){
    await this.auth.signInWithEmailAndPassword(
      userData.email, userData.password as string
    )
  }
}
