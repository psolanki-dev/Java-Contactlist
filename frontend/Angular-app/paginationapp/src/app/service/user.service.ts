import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly serverUrl: string = 'http://localhost:9192';

  constructor(private Http: HttpClient) { }

  // Make call to the back end API to retrieve page of users
  users$ = (name: string= '', page: number = 0, size : number = 10): Observable<ApiResponse<Page>> =>
    this.Http.get<ApiResponse<Page>>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`)
  


}
