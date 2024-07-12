import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

    constructor(public messageService: MessageService) {}
}
