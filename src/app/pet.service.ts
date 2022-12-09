import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: Observable<any> = this.http.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
  .pipe(map((result: any) => {
    result.map((item: any, index: number) => {
      item.photoUrls = [(index + 1) + "-" + "4000x3000_ag.jpg", (Math.ceil(index % 20) + 2) + "-" + "4000x3000_ag.jpg"]
    })
    return result;
  }));

  constructor(private http: HttpClient) { }


}
