!function(a,b){"use strict";function c(){if("hidden"in a.document&&a.document.hidden&&b(".background").children().length)return void a.setTimeout(c,1e3*g);var d=b(".photo").first().data("image"),e=b("<img>"),h=function(){b(".background").children().slice(1).remove()};console.log("[Dashkiosk/unassigned] Load "+d),h(),e.one("load",function(){e.off("error"),b("<div>").css({"background-image":"url("+d+")"}).appendTo(b(".background")).prependTo(b(".background")).one(f,h)}).one("error",function(){e.off("load")}).attr("src",d),b(".photo").last().after(b(".photo").first()),a.setTimeout(c,1e3*g)}function d(){var c=6e4,e=new Date,f=c-e%c,g=e.getHours(),h=e.getMinutes();b(".clock").text(g+(h>=10?":":":0")+h),a.setTimeout(d,f)}function e(a){for(var b,c,d=a.length;0!==d;)c=Math.floor(Math.random()*d),d-=1,b=a[d],a[d]=a[c],a[c]=b;return a}var f="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",g=60;b(a).on("load",function(){b(".background").after(e(b(".photo"))),c(),d()})}(window,Zepto);