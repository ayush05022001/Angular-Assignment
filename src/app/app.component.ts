import { Component } from '@angular/core';
import {GetApiService} from './get-api.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  store:any={};
  arr2:any[]=[1,2,3,4,5];
  isdata=true;
  arr:any=[];
  qno:any=null;
  text='';
  flag=false;
  ans='';
  curr_idx=1;
  start:any=0;
  end:any=5;

  constructor(private api:GetApiService){

  }

  onClick(number:any): void {
    // console.log(this.arr[number]);
    this.curr_idx=number+1;
    console.log(this.curr_idx);
    

    if(this.arr[number].context==null){
   
  this.text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea";
    }
    else{
    this.text=this.arr[number].context;

    }
    this.ans=this.arr[number].givenAnswer;

    if(this.ans==null){
      this.ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea"
    }

    this.flag=this.arr[number].correct;
    
    console.log(number);
    this.qno=this.arr[number].questionNumber-1;
    console.log(this.qno);
    console.log(this.text);
    
    
    // Add your logic here
  }

  onSubtract(){
    this.curr_idx=this.curr_idx-1;

    if(this.curr_idx<=(this.start)){
      
      for(let i=0;i<this.arr2.length;i++){
        this.arr2[i]=this.arr2[i]-1;
      }

      this.start=this.start-1;
      this.end=this.end-1;
      console.log(this.arr2,"====================>");
      

    }




    console.log(this.curr_idx,"============>");

    if(this.curr_idx==0){
      this.qno=0;
      
      if(this.arr[this.curr_idx].context==null){
   
        this.text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea";
          }
          else{
          this.text=this.arr[this.curr_idx].context;
      
          }
          this.ans=this.arr[this.curr_idx].givenAnswer;
      
          if(this.ans==null){
            this.ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea"
          }
      
    }
    else{
      this.qno=this.curr_idx;
      if(this.arr[this.curr_idx].context==null){
   
        this.text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea";
          }
          else{
          this.text=this.arr[this.curr_idx].context;
      
          }
          this.ans=this.arr[this.curr_idx].givenAnswer;
      
          if(this.ans==null){
            this.ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea"
          }
      
    }
    
  }
  onAdd(){
    this.curr_idx=this.curr_idx+1;
    if(this.curr_idx>=(this.end)){
      
      for(let i=0;i<this.arr2.length;i++){
        this.arr2[i]=this.arr2[i]+1;
      }

      this.start=this.start+1;
      this.end=this.end+1;
      console.log(this.arr2,"====================>");
      

    }
    console.log(this.curr_idx,"============>");

    if(this.curr_idx==0){
      this.qno=0;
      
      if(this.arr[this.curr_idx].context==null){
   
        this.text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea";
          }
          else{
          this.text=this.arr[this.curr_idx].context;
      
          }
          this.ans=this.arr[this.curr_idx].givenAnswer;
      
          if(this.ans==null){
            this.ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea"
          }
      
    }
    else{
      this.qno=this.curr_idx;
      if(this.arr[this.curr_idx].context==null){
   
        this.text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea";
          }
          else{
          this.text=this.arr[this.curr_idx].context;
      
          }
          this.ans=this.arr[this.curr_idx].givenAnswer;
      
          if(this.ans==null){
            this.ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi molestias accusantium, soluta, eaque quisquam et impedit dolor dicta suscipit expedita. Incidunt porro alias accusamus nobis minima possimus tenetur ea"
          }
      
    }
    
    
  }


  ngOnInit(){
    this.api.apiCall().subscribe((data) => {
      setTimeout(() =>{
        this.store=data;

        this.arr=this.store.feedback.responses;
        

      console.log(this.store);
      this.isdata=false;
      },1500)
    //   this.store=data;

    //   this.arr=this.store.feedback.responses;
      

    // console.log(this.store);
    // this.isdata=false;
    }
    );
    // this.arr=this.store.feedback.responses;
    
  }
}
