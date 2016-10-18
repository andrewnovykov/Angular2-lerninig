import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-roperty-binding',
  templateUrl: './roperty-binding.component.html',
  styleUrls: ['./roperty-binding.component.css']
})
export class RopertyBindingComponent implements OnInit {

	@Input() result: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
