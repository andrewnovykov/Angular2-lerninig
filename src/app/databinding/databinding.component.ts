import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

	stringInterpolation = 'This is string Interpolation'
	numberInterpolation = 2

  constructor() { }

  ngOnInit() {
  }

  onTest(){
  	return true;
  }

  onCliked(value: string ) {
  	alert(value);
  }


}
