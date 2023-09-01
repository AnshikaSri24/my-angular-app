import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorComponent } from './book-author.component';

describe('BookAuthorComponent', () => {
  let component: BookAuthorComponent;
  let fixture: ComponentFixture<BookAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAuthorComponent]
    });
    fixture = TestBed.createComponent(BookAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
