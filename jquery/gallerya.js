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
			
	//Set Landscape image height
			$(".landscape").css("height",( $(document).height()-240));		
	//Set Landscape image width
			$(".landscape").css( "width", (($(document).height()-240)*1.5)); //<<< adjust last number for correct ratio
			
	//Set .itemP width
			$(function()
			{
				var itemPwidth =$(".portrait").css("width");
				//	newitemwidth =$(newitemwidth +1);
				$(".itemP").css("width", itemPwidth);
			});	

	//Set .itemL width	
			$(function()
			{
				var itemLwidth =$(".landscape").css("width");
				//	newitemwidth =$(newitemwidth +1);
				$(".itemL").css("width", itemLwidth);	
			});	
		
		
	//vars
		var conveyor = $(".content-conveyor", $("#sliderContent")),
		itemP = $(".itemP", $("#sliderContent"));
		itemL = $(".itemL", $("#sliderContent"));
		
	//set length of conveyor
		conveyor.css("width", (itemP.length * parseInt(itemP.css("width")) + (itemL.length * parseInt(itemL.css("width")))));
				
   	//config
        var sliderOpts = {
		  max:  (itemP.length * parseInt(itemP.css("width")) + (itemL.length * parseInt(itemL.css("width"))))  - parseInt($(".viewer", $("#sliderContent")).css("width")),
		  

          slide: function(e, ui) { 
            conveyor.css("left", "-" + ui.value + "px");
          }
        };

        //create slider
        $("#slider").slider(sliderOpts);
      });