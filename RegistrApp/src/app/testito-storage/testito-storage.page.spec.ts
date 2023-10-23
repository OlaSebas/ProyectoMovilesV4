import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestitoStoragePage } from './testito-storage.page';

describe('TestitoStoragePage', () => {
  let component: TestitoStoragePage;
  let fixture: ComponentFixture<TestitoStoragePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestitoStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
