import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
 styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit{
  @Input('tabTitle') title: string;
  @Input() active = false;
	ngOnInit() {
		console.info("ngOnInit");
	}
	
	onSelectTab(event){
		console.info("jnjknjnj",event.target);
	}


}