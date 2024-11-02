import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeComponent } from './cafe.component';
import { CafeService } from '../../services/cafe/cafe.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CafeEspecial } from '../../services/cafe/types';
import { of } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let mockCafeService: any;

  beforeEach(async () => {
    mockCafeService = jasmine.createSpyObj('CafeService', ['getCafe']);
    await TestBed.configureTestingModule({
      declarations: [CafeComponent],
      imports: [
        FooterComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: CafeService, useValue: mockCafeService }
      ]
    })
    .compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    mockCafeService.getCafe.and.returnValue(of([]));
    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create with the lenght of the list of coffees', () => {
    const coffees = [
      new CafeEspecial(1, 'Café de Origen', 'Colombia', 'Café de Colombia', 'Café de Colombia', 1, 'imagen'),
      new CafeEspecial(2, 'Blend', 'Colombia', 'Café de Colombia', 'Café de Colombia', 1, 'imagen'),
      new CafeEspecial(3, 'Blend', 'Colombia', 'Café de Colombia', 'Café de Colombia', 1, 'imagen')
    ];
    mockCafeService.getCafe.calls.reset();
    mockCafeService.getCafe.and.returnValue(of(coffees));

    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('[data-testid="cafe-table"]');
    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBe(4);
  });
});
