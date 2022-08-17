import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ques-builder',
  templateUrl: './ques-builder.component.html',
  styleUrls: ['./ques-builder.component.scss']
})
export class QuesBuilderComponent implements OnInit {

  quesTypes = [
    "Multiple Choice",
    "Linear Scale",
    "Checkbox",
    "Short Text",
    "File Upload"
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
