import { Component, effect, inject, signal } from '@angular/core';
import { CafeService } from '../../services/cafe/cafe.service';
import { CafeEspecial } from '../../services/cafe/types';
import { catchError, of, take } from 'rxjs';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.css'
})
export class CafeComponent {
  protected tableHeaders = signal<string[]>(['#', 'Nombre', 'Tipo', 'Region']);
  protected cafeList = signal<CafeEspecial[]>([]);

  totalOrigen = signal<string>('');
  totalBlend = signal<string>('');


  cafeService = inject(CafeService);

  ngOnInit() {
    this.cafeService
      .getCafe()
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe((cafes) => {        
        this.cafeList.set(cafes);
      });
  }

  constructor() {
    effect(() => {
      this.totalOrigen.set('Total café de origen: ' + this.cafeList().filter((cafe) => cafe.tipo === 'Café de Origen').length);
      this.totalBlend.set('Total café blend: ' + this.cafeList().filter((cafe) => cafe.tipo === 'Blend').length);
      }, {allowSignalWrites: true});
    }
}
