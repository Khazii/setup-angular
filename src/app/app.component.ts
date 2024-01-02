import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgNewComponent } from './components/ng-new/ng-new.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, FooterComponent, NgNewComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
