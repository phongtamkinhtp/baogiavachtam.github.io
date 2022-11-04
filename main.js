(function($) {

	"use strict";

	$(document).ready(function() {

	  

      //$('#masthead').addClass('nav-dark ');

      $(".category-description").each(function(){
			var height_text = $(".category-description").height();
			if( height_text > 600){
				$(this).css('height', 600);
				$(this).append('<p class="dtcvmodetail" style="display: block;" onclick="expand()"><span>Äá»c thÃªm <i>â–¾</i></span></p><p class="dtchide" style="display: none;" onclick="collapse()"><span>RÃºt gá»n <i>â–´</i></span></p>');
			}
		})
      /*============sticky==============*/
       	if($(window).width()>=768){
			var sidebar = new StickySidebar('.col-scoll>.col-inner', {
			    topSpacing: 60,
			    bottomSpacing: 10,
			    containerSelector: '.row-bottom-single',
			    innerWrapperSelector: '.col-scoll'
			  });
		}
       

      /*============sticky==============*/

    });

  

})(jQuery);


function expand()
{
	jQuery('.category-description').addClass('dtshow');
	jQuery('.dtcvmodetail').css("display", "none");
	jQuery('.dtchide').css("display", "block");
}

function collapse()
{
	jQuery('.category-description').removeClass('dtshow');
	jQuery('.dtcvmodetail').css("display", "block");
	jQuery('.dtchide').css("display", "none");
	jQuery(window).scrollTop($('.category-description').offset().top);
}
