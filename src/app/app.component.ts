import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  imgTitle = 'About image text will come here';
  dummyTxt = "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'";
  public tabsData=[
  	{
  		tabTitle:'Tab 1',
  		text1: 'image text',
  		imgPath:''
  	},
  	{
  		tabTitle:'Tab 2',
  		text1:'Para one',
  		text2:'para two',

  	},
  	{
  		tabTitle:'Tab 3',
  		link:'http://google.com',
  		link1:'http://google.com',
  		link2:'http://google.com',
  		link23:'http://google.com'
  	}
  ]
}
