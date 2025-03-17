import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiResponse } from '../interfaces/api-response';
import { Character } from '../interfaces/character';



@Injectable({
  providedIn: 'root'
})
export class RicknmortyapiService {
  private apiUrl: string = 'https://rickandmortyapi.com/api/character';
  nextUrl = '';
  previousUrl = '';

  constructor(private http: HttpClient) { }

  getNextPage(): Observable<ApiResponse> {
    const url = this.nextUrl || this.apiUrl;
    return this.http.get<ApiResponse>(url).pipe(
      tap((response) => {
        this.nextUrl = response.info.next || '';
        this.previousUrl = response.info.prev || '';
        response.hasNextPage=response.info.next==null?false:true;
        response.hasPreviousPage=response.info.prev==null?false:true;
      })
    );
  }

  getPreviousPage(): Observable<ApiResponse> {
    const url = this.previousUrl || this.apiUrl;
    return this.http.get<ApiResponse>(url).pipe(
      tap((response) => {
        this.nextUrl = response.info.next || '';
        this.previousUrl = response.info.prev || '';
        response.hasNextPage=response.info.next==null?false:true;
        response.hasPreviousPage=response.info.prev==null?false:true;
      })
    );
  }
}

const ApiUrl: string = 'https://rickandmortyapi.com/api/character';
