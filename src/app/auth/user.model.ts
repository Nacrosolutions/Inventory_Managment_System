import { tokenName } from '@angular/compiler'

 export class User {
     constructor( private _token:string,private _isTokenExpired:boolean){

     }

     get token(){
         if(!this._isTokenExpired){
             return null;

         }
         return this._token;
     }
 
    }