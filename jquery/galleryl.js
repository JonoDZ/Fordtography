    $(function() {
		  
		  
		  	////////Window size/////////
		  	//Set slidercontent height
			$("#sliderContent").css("width",($(window).width()-218));
        
			//Set .viewer Height
			$(".viewer").css("height", ($(window).height()-220));
		
			//Set .viewer width
			$(".viewer").css("width", ($(window).width()-230));
					
			//Set Landscape image height
			$(".landscape").css("height",( $(document).height()-240));		
			//Set Landscape image width
			$(".landscape").css( "width", (($(document).height()-240)*1.5)); //<<< adjust last number for correct ratio

			//Set .itemL width	
			$(function()
			{
				var itemLwidth =$(".landscape").css("width");
				//	newitemwidth =$(newitemwidth +1);
				$(".itemL").css("width", itemLwidth);	
			});	
		
		//vars
		var conveyor = $(".content-conveyor", $("#sliderContent")),
		itemL = $(".itemL", $("#sliderContent"));
		
		//set length of conveyor
		conveyor.css("width", (itemL.length * parseInt(itemL.css("width"))));
				
        //config
        var sliderOpts = {
		  max: (itemL.length * parseInt(itemL.css("width")))  - parseInt($(".viewer", $("#sliderContent")).css("width")),
		  

          slide: function(e, ui) { 
            conveyor.css("left", "-" + ui.value + "px");
          }
        };

        //create slider
        $("#slider").slider(sliderOpts);
      });