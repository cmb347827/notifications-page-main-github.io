'use strict'; 

const colors ={
	'White': 'hsl(0, 0%, 100%)',
	'Very light grayish blue': 'hsl(210, 60%, 98%)',
    'Light grayish blue 1': 'hsl(211, 68%, 94%)',
    'Light grayish blue 2': 'hsl(205, 33%, 90%)',
};

function turnOnOffMessages(){
	//First get all messages, both 'read' and 'unread'.
	const messagesList = document.querySelectorAll('article');
	//get all fontawesome icons, that are part of each message.
	const fontawesomeList = document.querySelectorAll('i');
	//get 'unread messages number display' element
	const number = document.getElementById('number-update');
	//get the custom data attribute 'number of unread messages' element.
	let num = number.getAttribute('data-num');
	//convert to a number type.
	num = Number.parseInt(num);
    //console.log(typeof num);
	
	//loop through the messagesList node list returned by line 12.
	for(let i=0;i<messagesList.length;++i){
		//compare the custome data attribute 'data-status' if it is set to 'on' and if it's other custom data attribute 'data-read' is set to 'new'
		if((messagesList[i].getAttribute('data-status')==='on') && (messagesList[i].getAttribute('data-read')==='new')){
			//give the message element a blue background
			messagesList[i].style.backgroundColor = colors['Light grayish blue 1'];
			//show the red dot (set to 'display:none' in the scss file )
            fontawesomeList[i].style.display= 'block';
			//count the number of 'unread message' occurances.
			++num;
	    }else{
			//the message is already 'read' status.
			messagesList[i].style.backgroundColor = colors['White'];
			fontawesomeList[i].style.display= 'none';
		}
	}
	//show the unread notifications number update.
	number.textContent= num;
	//save the new value to the custom data attribute 'data-num'
	number.setAttribute('data-num',num);
}

$(window).on('load',function(){
	  
	  //console.log(messagesList[0].getAttribute('data-status'));
	  //on page load, should highlight the unread messages which will be displayed with a blue background.
	  turnOnOffMessages();
	  
	  //toggle visual state "mark all as read" is pressed.
	  document.querySelector('.btn').addEventListener('click',function(){
		  //First get all messages, both 'read' and 'unread'. 
		  const messagesList = document.querySelectorAll('article')
		  //get 'unread messages number display' element
		  const number = document.getElementById('number-update');
		  //get the custom data attribute 'number of unread messages' element.
		  let num = number.getAttribute('data-num');
		  //convert to a number type.
	      num = Number.parseInt(num);
		  
		  
		  //loop through the messagesList node list returned by line 54.
		  for(let i=0;i<messagesList.length;++i){
			  //compare the custome data attribute 'data-status' if it is set to 'on' and if it's other custom data attribute 'data-read' is set to 'new'
			  if((messagesList[i].getAttribute('data-status')==='on') && (messagesList[i].getAttribute('data-read')==='new')){
				  //turn the messages that are 'on' 'off' by updating the custom data attribute value
				  messagesList[i].setAttribute('data-status','off');
				  --num;
			  } else {
				  // else turns those that are 'off' 'on' by updating the custom data attribute value
				  messagesList[i].setAttribute('data-status','on');
			  }
			  
			  
		  }
		  number.setAttribute('data-num',num);
		  turnOnOffMessages();
	  });
	
});