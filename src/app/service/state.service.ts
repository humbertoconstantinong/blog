import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  private modalClosedSubject = new BehaviorSubject<boolean>(false);
  modalClosed$ = this.modalClosedSubject.asObservable();

  closeModal() {
    this.modalClosedSubject.next(true);
  }

  openModal() {
    this.modalClosedSubject.next(false);
  }
}
