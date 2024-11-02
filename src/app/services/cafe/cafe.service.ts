import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CafeEspecial } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private client = inject(HttpClient);
  private baseUrl = 'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json';

  constructor() { }


  /**
   * Get a list of CafeEspecial objects
   * @returns A list of CafeEspecial objects
   */
  getCafe(): Observable<CafeEspecial[]> {
    return this.client.get<CafeEspecial[]>(this.baseUrl);
  }
}
