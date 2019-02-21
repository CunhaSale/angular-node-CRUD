import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInsertComponent } from './pokemon-insert.component';

describe('PokemonInsertComponent', () => {
  let component: PokemonInsertComponent;
  let fixture: ComponentFixture<PokemonInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
