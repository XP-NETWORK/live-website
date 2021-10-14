$(document).ready(function(){


	jQuery(".have_drop_menu").click(function(){
		jQuery(this).toggleClass("active").siblings().removeClass("active");
	});

	jQuery(".languageSelect> a").click(function(){
		jQuery(this).addClass("active").siblings().removeClass("active");
	});

	jQuery(".menu_triger").click(function(){
		jQuery(this).toggleClass("active");
	});

	jQuery(".haveDrop> a").click(function(){
		jQuery(this).toggleClass("active");
	});

	// jQuery("ul.whitePagMenuList> li").click(function(){
	// 	jQuery(this).toggleClass("active");
	// });

	jQuery(".menu_triger").click(function(){
		jQuery(".menu_boxes").toggleClass("active");
	});


	// jQuery(".filterTriger").click(function(){
	// 	jQuery(".search_side").addClass("active");
	// });


    var sticky = new Sticky('[data-sticky]', {});


});


$(document).ready(function(){
    $(document).on("click",".notifyForm .submit_job .submitBtn",function(){
        var first_name  = jQuery(".notifyForm #first_name").val();
        var last_name  = jQuery(".notifyForm #last_name").val();
        var yourEmail  = jQuery(".notifyForm #yourEmail").val();
        var aboutme = jQuery(".notifyForm #company_name").val();
        /*console.log(first_name);
        console.log(last_name);
		console.log(yourEmail);
		console.log(aboutme);*/
        if(first_name!="" && last_name!="" && yourEmail!="" && aboutme!=""){
          
          if( !isValidEmail(yourEmail) ) { 

            jQuery(".notifyForm #yourEmail").next().next().css("visibility","visible");
            jQuery(".notifyForm #yourEmail").next().next().css("opacity",1);
            jQuery(".notifyForm #yourEmail").addClass("invali_inp_email");
            jQuery(".notifyForm #yourEmail").next().hide();
            //jQuery("#yourEmail").removeClass("invali_inp");

          }
          else{
              jQuery(".notifyForm #yourEmail").next().next().css("visibility","visible");
              jQuery(".notifyForm #yourEmail").next().next().css("opacity",0);
              jQuery(".notifyForm #yourEmail").removeClass("invali_inp_email");
              jQuery(".notifyForm #yourEmail").removeClass("invali_inp");

              $.ajax({
                 url: "https://api.xp.network/contact",
                 type: "post",
                 data: {
                     'firstName': first_name,
                     'lastName': last_name,
                     'email': yourEmail,
                     'companyName': aboutme
                 },
                 success: function(response) {
                    if(response.ok === true) {
                      jQuery(".notifyForm .submit_job .submitBtn").attr("disabled","disabled");
                       document.querySelector(".application_container p").remove();
                       //document.getElementById(".notifyForm #form").remove();

                       document.querySelector(".application_container"). innerHTML = `
                       <div class="tnx-container">
                        <span class="thanksImage"></span>
                        <div class="tnx-h1">Thank You!</div>
                           <div style="text-align:center;">We received your application <br>and will contact you soon</div>
                       </div>`;
                    }
                 }
             });

          }

        }
        else{
            //console.log("working");
            jQuery(".notifyForm #form input").each(function(){
                  if(jQuery(this).val()==""){
                      jQuery(this).next().show();
                      jQuery(this).addClass("invali_inp");
                  }
                  else{
                      jQuery(this).next().hide();
                      jQuery(this).removeClass("invali_inp");
                  }
              });
           }
    });
    jQuery(document).on("click","#Connectform .submitBtn",function(){
      var firstame = jQuery("#Connectform #first_name").val();
      var last_name = jQuery("#Connectform #last_name").val();
      var yourEmail = jQuery("#Connectform #yourEmail").val();
      var company_name = jQuery("#Connectform #company_name").val();
      /*var firstame = jQuery("#Connectform #first_name").val();*/

      if(first_name!="" && last_name!="" && yourEmail!="" && aboutme!=""){
        
      }
      else{

      }

    });    
});
