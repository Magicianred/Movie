import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footer:any=[
  {
    title:"display type",
    li:["Action","Comedy","Drama","Horror"]
  },
  {
    title:"Production",
    li:["2018 Year","2019 Year","2020 Year","2021 Year"]
  },
  {
    title:"DISPLAY QUALITY",
    li:["720p HDTV","1080p BluRay","720p BluRay","1080p WEB-DL"]
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
