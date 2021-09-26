import { Injectable } from '@angular/core';
import {User} from './common/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8082/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

   public delete(user:User){
     return this.http.delete<User>(this.usersUrl+'/'+user.id);

   }
   update(user:User, value: any) {
    return this.http.put<User>(this.usersUrl+'/'+user.id,value);
  }
  
getUser(user:User){
return this.http.get(this.usersUrl+'/'+user.id)
}

updateEmployee(id: number, value: any): Observable<object> {
  return this.http.put<User>(this.usersUrl,value);
}

getEmployee(id: number): Observable<any> {
  return this.http.get(`${this.usersUrl}/${id}`);
}

}
