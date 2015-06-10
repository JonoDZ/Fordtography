         






document.getElementById('lfwUl').style.width = "2000px";







	






      $(function() {
		  
		  
		  	////////Window size/////////
		  	//Set slidercontent height
			$("#sliderContent").css("width",($(window).width()-218));
        
			//Set .viewer Height
			$(".viewer").css("height", ($(window).height()-220));
		
			//Set .viewer width
			$(".viewer").css("width", ($(window).width()-230));
			
			///////Image size//////////	
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