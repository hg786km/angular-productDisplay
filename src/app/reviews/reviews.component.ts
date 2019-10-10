import { Component, OnInit, Input } from '@angular/core';
import { Score } from "../models/Score";
import { Product } from "../models/Product";
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() Score: Score;
  constructor() { }

  ngOnInit() {
  }

}
