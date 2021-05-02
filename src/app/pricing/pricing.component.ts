import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing:any=[
    {
      title:"standard",
      price:0,
      limits:[
        {
          title:"New Movies",
          access:false
      },
      {
        title:"Streamit Special",
        access:false
    },
    {
      title:"American Tv Shows",
      access:false
  },
  {
    title:"Hollywood Movies",
    access:false
},
{
  title:"FHD (1080p) Video Quality",
  access:false
},
{
  title:"Ad Free Entertainment",
  access:false
}]
    },
    {
      title:"PLATINUM",
      price:70,
      limits:[
        {
          title:"New Movies",
          access:true
      },
      {
        title:"Streamit Special",
        access:true
    },
    {
      title:"American Tv Shows",
      access:true
  },
  {
    title:"Hollywood Movies",
    access:true
},
{
  title:"FHD (1080p) Video Quality",
  access:true
},
{
  title:"Ad Free Entertainment",
  access:false
}
]
    },
  {
    title:"PREMIUM",
    price:120,
    limits:[
      {
        title:"New Movies",
        access:true
    },
    {
      title:"Streamit Special",
      access:true
  },
  {
    title:"American Tv Shows",
    access:true
},
{
  title:"Hollywood Movies",
  access:true
},
{
title:"FHD (1080p) Video Quality",
access:true
},
{
title:"Ad Free Entertainment",
access:true
}
]
  } 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
