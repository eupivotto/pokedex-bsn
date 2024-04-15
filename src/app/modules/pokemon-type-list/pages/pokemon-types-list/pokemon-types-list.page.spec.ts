import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTypesListPage } from './pokemon-types-list.page';

describe('PokemonTypesListPage', () => {
  let component: PokemonTypesListPage;
  let fixture: ComponentFixture<PokemonTypesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
