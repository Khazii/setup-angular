import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('projectNameInput') projectNameInputElement: ElementRef;

  generatedCommand = '';
  projectName = '';

  categories = [
    {
      label: 'General',
      items: [
        { name: '--dry-run', selected: false },
        { name: '--force', selected: false },
        { name: '--skip-install', selected: false },
        { name: '--skip-tests', selected: false },
        { name: '--skip-git', selected: false },
        { name: '--commit', selected: false },
      ],
      single: false,
    },
    {
      label: 'Style',
      items: [
        { name: '--style=css', selected: false },
        { name: '--style=scss', selected: true },
        { name: '--style=sass', selected: false },
        { name: '--style=less', selected: false },
      ],
      single: true,
    },
    {
      label: 'Routing & State Management',
      items: [
        { name: '--routing', selected: true },
        { name: '--strict', selected: false },
      ],
      single: false,
    },
    {
      label: 'Package Manager',
      items: [
        { name: '--package-manager=npm', selected: false },
        { name: '--package-manager=yarn', selected: false },
        { name: '--package-manager=pnpm', selected: false },
      ],
      single: true,
    },
    {
      label: 'Project Type',
      items: [
        { name: '--create-application', selected: true },
        { name: '--create-application=false', selected: false },
      ],
      single: true,
    },
    {
      label: 'Language',
      items: [
        { name: '--legacy-browsers', selected: false },
        { name: '--inline-style', selected: false },
        { name: '--inline-template', selected: false },
      ],
      single: false,
    },
  ];

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

  adjustTextareaHeight(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto'; // Reset height to recalculate
    textarea.style.height = textarea.scrollHeight + 'px'; // Set new height
  }
}
