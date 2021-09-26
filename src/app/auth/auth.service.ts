import { Router } from '@angular/router';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';



interface AuthResponseData {
  token:string;
  isTokenExpired:boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient,private router:Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8080/register',
        {
          username: email,
          password: password,
          
        }
      )
      .pipe(
        catchError(this.handleError)
      ,tap(resData=>{
        const user=new User(resData.token,resData.isTokenExpired)
      }))

  }

  autoLogin()
{
  const userData:{
    _token: string;
     _isTokenExpired: boolean;
  }=JSON.parse(localStorage.getItem('userData'));
  if(!userData){
    return ;

  } 
  const loadedUser=new User(userData._token,userData._isTokenExpired);
  if(loadedUser.token){
    this.user.next(loadedUser);
  }

}
   login(email: string, password: string){
    return this.http
    .post<AuthResponseData>(
      'http://localhost:8080/authenticate',{
        username: email,
        password: password,
      }
    ).pipe(catchError(this.handleError),tap(resData=>{
      this.HandleAuthentication(
        
        resData.token,
        resData.isTokenExpired,
        
      )

    }));

    }
private HandleAuthentication(

token:string,
isTokenExpired:boolean
){
  const user=new User(token,isTokenExpired)
  this.user.next(user);
  localStorage.setItem('userData',JSON.stringify(user));
 
  
}




logout(){
  this.user.next(null);
  this.router.navigate(['/auth']);
}

    private handleError(errorRes:HttpErrorResponse)
{
  let errorMessage = 'An unknown error occurred!';
 let errorMessages = 'This email exists already';
  if (!errorRes.error || !errorRes.error.error) {
    return throwError(errorMessage);
  }
  if(errorRes.status===500){
    return throwError(errorMessages);
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email exists already';
  }
  return throwError(errorMessage);
}

}
