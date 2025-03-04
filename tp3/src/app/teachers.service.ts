import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';

export type Teacher = {
  name: string;
  subject: 'Archi' | 'Web' | 'Réseaux' | 'Système' | 'BDD';
  id: number;
};

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  private readonly API_URL = 'http://localhost:5000';
  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.API_URL + '/teachers');
  }

  findOne(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(this.API_URL + `/teachers/${id}`).pipe(
      catchError((err) => {
        throw new Error('Une erreur est survenue:', err);
      })
    );
  }

  create(teacher: Teacher): Observable<{ id: number }> {
    return this.http
      .post<{ ressource_location: number }>(this.API_URL + '/teachers', teacher)
      .pipe(
        map((data) => ({ id: data.ressource_location })),
        tap((data) => console.log('data:', data))
      );
  }
}
