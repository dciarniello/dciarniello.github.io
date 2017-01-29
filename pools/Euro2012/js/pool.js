var isMobile = (/iphone|ipod|android|blackberry|iemobile/i.test(navigator.userAgent.toLowerCase()));

function getQuerystring2(key, default_) 
{ 
    if (default_==null) 
    { 
        default_=""; 
    } 
    var search = unescape(location.search); 
    if (search == "") 
    { 
        return default_; 
    } 
    search = search.substr(1); 
    var params = search.split("&"); 
    for (var i = 0; i < params.length; i++) 
    { 
        var pairs = params[i].split("="); 
        if(pairs[0] == key) 
        { 
            return pairs[1]; 
        } 
    } 


return default_; 
}

var goDesktop = getQuerystring2("desktop", false);

if( isMobile && "true" !=  goDesktop )
{
    window.location = "gomobile.html";
}

$(document).ready(function(){
	$(".menu > li").click(function(e){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".content").hide();
		//$(".content."+e.target.id).fadeIn();
      $(".content."+e.target.id).show();
      return false;
    });

    $(".entry, .country").hide();
    $(".entry:first, .country:first").show();

    $("#poolStandings > tbody > tr").click(function(e) {
      $(".entry").hide();
      $(".entry."+e.delegateTarget.id).show();
    });

    $("#countries > tbody > tr").click(function(e) {
      $(".country").hide();
      $(".country."+e.delegateTarget.id).show();
    });
  }
);
