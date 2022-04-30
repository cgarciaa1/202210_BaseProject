/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA  } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeModule } from '../coffee.module';
import { Coffee} from '../coffee';
import { faker } from '@faker-js/faker';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CoffeeModule],
      declarations: [ AppComponent, CoffeeListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    component.coffees = [
      new Coffee(
        faker.datatype.number(),
        faker.name.findName(),
        faker.word.noun(),
        faker.word.noun(),
        faker.word.noun(),
        faker.datatype.number(),
        faker.image.imageUrl()
      ),
      new Coffee(
        faker.datatype.number(),
        faker.name.findName(),
        faker.word.noun(),
        faker.word.noun(),
        faker.word.noun(),
        faker.datatype.number(),
        faker.image.imageUrl()
      ),
      new Coffee(
        faker.datatype.number(),
        faker.name.findName(),
        faker.word.noun(),
        faker.word.noun(),
        faker.word.noun(),
        faker.datatype.number(),
        faker.image.imageUrl()
      )
    ];


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table with 3 row and head ', () => {

    //se verifica que exista la tabla
    expect(debug.query(By.css('table')).classes['table']).toEqual(
      true
    );

    //se verifica que exista una cabecera en la tabla
    expect(fixture.debugElement.queryAll(By.css('thead tr')).length).toBe(1);

    //se verifica que existan 3 filas de datos
    expect(fixture.debugElement.queryAll(By.css('tbody tr')).length).toBe(3);

    //se verifica que exista una cabecera y 3 filas
    expect(fixture.debugElement.queryAll(By.css('tr')).length).toBe(4);


  });

});
