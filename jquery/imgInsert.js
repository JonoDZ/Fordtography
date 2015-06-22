         






document.getElementById('myList').style.width = "2000px" ; // set this to the total length of all images


//set items to correct  height and width

	// get a list of all items


		// decide if portrait or landscape

		// get the aspect ration

		// resize

		/*//resize portrait 
	    if (imgNaturalHeight > imgNaturalWidth) {
	    	var NewHeight = document.getElementById("sliderContent").style.height;
	    	list.children[i].children[0].style.height = NewHeight;
	    	list.children[i].children[0].style.height = imgNaturalWidth * imgRatio;
	    }
	    else if (imgNaturalHeight <= imgNaturalWidth) {
	    	var NewHeight = document.getElementById("sliderContent").style.height;
	    	list.children[i].children[0].style.height = NewHeight;
	    	list.children[i].children[0].style.height = imgNaturalWidth * imgRatio;
	    }
	    else {
	    	console.log("bypassed");
	    };
	    -*/

setImgSize(myList, sliderContent);

function setImgSize(list, viewerId){

	var elementChildren = list.children;
	for (var i = 0; i < elementChildren.length; i++) {
	    
		var imgNaturalHeight = list.children[i].children[0].naturalHeight;
		var imgNaturalWidth = list.children[i].children[0].naturalWidth;
		var imgRatio = imgNaturalHeight/imgNaturalWidth;
	    
	    var NewHeight = document.getElementById("sliderContent").scrollHeight;
	    list.children[i].children[0].style.height = NewHeight;
	    list.children[i].children[0].style.width = imgNaturalWidth * imgRatio;

	};
 	
 	$(function() {
	////////Window size/////////
	  	//Set slidercontent height
		$("#sliderContent").css("width",($(window).width()-218));
    
		//Set .viewer Height
		$(".viewer").css("height", ($(window).height()-220));
	
		//Set .viewer width
		$(".viewer").css("width", ($(window).width()-230));
			
		//set length of conveyor
		conveyor.css("width", (itemP.length * parseInt(itemP.css("width"))));
}





   
		  	////////Window size/////////
		  	//Set slidercontent height
			$("#sliderContent").css("width",($(window).width()-218));
        
			//Set .viewer Height
			$(".viewer").css("height", ($(window).height()-220));
		
			//Set .viewer width
			$(".viewer").css("width", ($(window).width()-230));
						
			/////Image size//////////	
			//Set portrait image height
			$(".portrait").css("height",( $(document).height()-240));		
			//set portrait image width
			$(".portrait").css( "width", (($(document).height()-240)*0.667)); //<<< adjust last number for correct ratio
			
			//Set .itemP width
			
			$(function()
			{
				var itemPwidth =$(".portrait").css("width");
				//	newitemwidth =$(newitemwidth +1);
				$(".itemP").css("width", itemPwidth);
			});	
		

		//vars
		var conveyor = $(".content-conveyor", $("#sliderContent")),
		itemP = $(".itemP", $("#sliderContent"));
		
		//set length of conveyor
		conveyor.css("width", (itemP.length * parseInt(itemP.css("width"))));

				
        //config
        var sliderOpts = {
		  max:  (itemP.length * parseInt(itemP.css("width")))  - parseInt($(".viewer", $("#sliderContent")).css("width")),
		  

          slide: function(e, ui) { 
            conveyor.css("left", "-" + ui.value + "px");
          }
        };

        //create slider
        $("#slider").slider(sliderOpts);
      }); 
      