import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

interface ListItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-top-ten-list',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './top-ten-list.component.html',
  styleUrl: './top-ten-list.component.scss'
})
export class TopTenListComponent {
  searchQuery: string = '';
  sourceList: ListItem[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`
  }));
  topTenList: ListItem[] = [];

  get filteredSourceList(): ListItem[] {
    const excludedIds = new Set(this.topTenList.map(item => item.id));
    return this.sourceList
      .filter(item => !excludedIds.has(item.id))
      .filter(item => 
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
  }

  addToTopTen(item: ListItem): void {
    if (this.topTenList.length >= 10) return;
    this.topTenList.push(item);
  }

  removeFromTopTen(item: ListItem): void {
    const index = this.topTenList.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.topTenList.splice(index, 1);
    }
  }
} 