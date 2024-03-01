//previous slide//   
   let slides=document.getElementsByClassName('slide');
   console.log(slides);
   let index=0;
   
   function prevslide(){
	   console.log(index);
	   if(index<0){
		  
		 index=slides.length-1;
	 slides[0].classList.remove('active');
	 slides[0].classList.add('hide');
	 	 slides[index].classList.remove('hide');

	 slides[index].classList.add('active');  
	   }
	else if(index<slides.length){ 
	 for(let i=0; i<slides.length; i++){
		slides[i].classList.remove('active');
        slides[i].classList.add('hide');		
	  }
 slides[index].classList.remove('hide');
  
   }
   index--;
   }

//next slide//
   
   function nextslide(){
	 	  index++;
     console.log(index); 
    if(index<slides.length){
      		
	 for( i=0; i<slides.length; i++){
		  slides[i].classList.remove('active');
		  slides[i].classList.add('hide');
	 }
	 slides[index].classList.remove('hide');
	 slides[index].classList.add('active');
	 
	
	}else{
	 index=0;
	 console.log(index);
	 slides[slides.length-1].classList.remove('active');
	 slides[slides.length-1].classList.add('hide');
	 slides[index].classList.remove('hide');

	 slides[index].classList.add('active');
	 
   }
   }   
   