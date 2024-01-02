import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { categories } from './ng-new.objects';

@Component({
  standalone: true,
  selector: 'app-ng-new',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './ng-new.component.html',
})
export class NgNewComponent implements AfterViewInit {
  @ViewChild('projectNameInput') projectNameInputElement: ElementRef;
  categories: Category[] = categories;

  generatedCommand = '';
  projectName = '';

  ngAfterViewInit(): void {
    this.projectNameInputElement.nativeElement.focus();
    this.updateCommand();
  }

  toggleOption(category: any, selectedOption: any) {
    if (category.single) {
      if (selectedOption.selected) {
        selectedOption.selected = false;
      } else {
        category.items.forEach((option) => {
          option.selected = option === selectedOption;
        });
      }
    } else {
      selectedOption.selected = !selectedOption.selected;
    }

    this.updateCommand();
  }

  updateCommand() {
    let commandOptions = [];

    this.categories.forEach((category) => {
      category.items.forEach((option) => {
        if (option.selected) {
          commandOptions.push(option.name);
        }
      });
    });

    this.generatedCommand = `ng new ${this.projectName} ${commandOptions.join(
      ' '
    )}`;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedCommand).then(() => {
      console.log('Command copied to clipboard!');
    });
  }
}
