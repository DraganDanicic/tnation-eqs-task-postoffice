import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficeApiService {
  constructor(private httpClient: HttpClient) {}

  fetch(): Observable<any[] | string> {
    return this.httpClient
      .cache()
      .get<any[]>('office/list')
      .pipe(catchError(err => 'Error on fetching shipment list.'));
  }
}
