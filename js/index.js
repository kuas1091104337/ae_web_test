function setLang(e){for(var t=Object.keys(e),a=0,i=t.length;a<i;a++)$("[text="+t[a]+"]").text(e[t[a]]);for(a=0,i=$("[data-word]").length;a<i;a++)$("[data-word]").eq(a).attr("data-word",$("[data-word]").eq(a).text())}$(function(){switch($(".lang > a").click(function(){var e=$(this).attr("id");switch(location.hash=e,$("html").attr("lang",e),$("body").attr("class",e),$(this).addClass("active").siblings().removeClass(),$("#head").hasClass("menu--open")&&$("#head").removeClass("menu--open"),e){case"zh":document.title="AE娱乐-东南亚包网、泰国包网、越南包网、彩票包网、Sexy Gaming-一站式服務",$('meta[name="keywords"]').attr("content","AE集团,越南彩票,越南斗鸡,泰国彩票,娱乐城包网,东南亚百家乐,AE真人,AE彩票,电竞系統平台,棋牌包网,彩票包网,东南亚彩票,彩票API,AE Group,彩票接口,东南亚包网,印度包网,ny彩票,AE性感百家"),$('meta[name="description"]').attr("content","AE集团专营东南亚包网，不仅提供越南彩票、越南斗鸡、泰国彩票、娱乐城包网、东南亚百家乐、东南亚彩票包网，更有AE性感百家。并针对全球市场研发AE彩票、电竞包网、娱乐城包网、棋牌包网、彩票API，提供多样模板、多国语系，满足您各式需求。"),setLang(i18n.zh);break;case"th":document.title="AEคาสิโนออนไลน์-แพ็คเกจในเอเซียตะวันออกเฉียงใต้ อินเตอร์เน็ตแพ็คเกจในปรประเทศไทย อินเตอร์เน็ตแพ็คเกจในประเทศเวียดนาม ลอตเตอรี่ Sexy Gaming - การให้บริการเบ็ดเสร็จ ณ จุดเดียว",$('meta[name="keywords"]').attr("content","เครือAE,หวยเวียดนาม,ไก่ชนเวียดนาม,หวยไทย,คาสิโนออนไลน์,บาคาร่าเอเซียตะวันออกเฉียงใต้,AEถ่ายทอดสด,หวยAE,แพลตฟอร์มEsport,เกมส์ไพ่,ลอตเตอรี่,ลอตเตอรี่เอเซียตะวันออกเฉียงใต้,ลอตเตอรี่API,AE Group,อินเตอร์เฟซการจับสลาก,อินเตอร์เน็ตแพ็คเกจในเอเซียตะวันออกเฉียงใต้,อินเตอร์เน็ตแพ็คเกจในปรประอินเดีย,นิวยอร์กลอตโต้,AEเซ็กซี่บาคาร่า"),$('meta[name="description"]').attr("content","เครือAE เชี่ยวชาญทางด้านอินเตอร์เน็ตแพ็คเกจในเอเซียตะวันออกเฉียงใต้ ไม่เพียงให้บริการลอตเตอรี่เวียตนาม ไก่ชนเวียดนาม ลอตเตอรี่ไทย คาสิโนออนไลน์ บาคาร่าเอเซียตะวันออกเฉียงใต้  และยีงมีAEเซ็กซี่บาคาร่าด้วย AEได้วิจัยAEลอตเตอรี่ Esport  คาสิโนออนไลน์ เกมส์ไพ่ ลอตเตอรี่API สำหรับตลาดที่ไร้พรมแดน จำนวนแม่แบบและภาษาที่หลากหลาย  สนองความต้องการของคุณ"),setLang(i18n.th);break;case"vn":document.title="AE White Label-Southeast Asia White Label, Thailand White Label, Vietnam White",$('meta[name="keywords"]').attr("content","AE Group,Vietnam Lottery,cockfighting,thailand lottery,white label,baccarat,sexy gaming,AE lottery,e-sports white label,chess white label,lottery white label,lottery,casino,southeast asia white label,live streaming,lottery API,India white label,ny lottery,ae sexy baccarat"),$('meta[name="description"]').attr("content","AE Group, an expert in Southeast Asia White Label! Not only provides Vietnam lottery, cockfighting, Thailand lottery, white label platform, and the most popular live streaming-AE Sexy Baccarat. Also deliver AE Lottery, lottery white label, AE Chess white label and esports white label to worldwide. With various templates, supports 8 languages and currencies to meet your needs."),setLang(i18n.vn);break;default:document.title="AE White Label-Southeast Asia White Label, Thailand White Label, Vietnam White",$('meta[name="keywords"]').attr("content","AE Group,Vietnam Lottery,cockfighting,thailand lottery,white label,baccarat,sexy gaming,AE lottery,e-sports white label,chess white label,lottery white label,lottery,casino,southeast asia white label,live streaming,lottery API,India white label,ny lottery,ae sexy baccarat"),$('meta[name="description"]').attr("content","AE Group, an expert in Southeast Asia White Label! Not only provides Vietnam lottery, cockfighting, Thailand lottery, white label platform, and the most popular live streaming-AE Sexy Baccarat. Also deliver AE Lottery, lottery white label, AE Chess white label and esports white label to worldwide. With various templates, supports 8 languages and currencies to meet your needs."),setLang(i18n.en)}}),$(window).on("hashchange",function(){switch(location.hash.substr(1)){case"zh":$("#zh").click();break;case"th":$("#th").click();break;case"vn":$("#vn").click();break;default:$("#en").click()}}),window.navigator.language){case"zh-TW":case"zh-CN":$("#zh").click();break;case"th-TH":$("#th").click();break;case"vi-VN":$("#vn").click();break;default:$("#en").click()}var n=$(window).height(),s=$("#head").height(),l=$("body > section");function r(){var t=$(window).scrollTop(),a=0;100<t?$("#head").addClass("head--fixed"):$("#head").removeClass("head--fixed"),l.each(function(e){t>=l.eq(e).offset().top-n/2-s/2&&(a=e)}),$("#menu-wrap__menu-scroll > li").find("a").removeClass("active").end().eq(a).children("a").addClass("active"),l.removeClass("active").eq(a).addClass("active")}$("#menu-wrap__menu-scroll > li").click(function(){if(!$(this).children("a").hasClass("active")){var e,t=$(this),a=t.index(),i=l.eq(a);$(window).off("scroll",r),$("#head").removeClass("menu--open"),t.children("a").addClass("active").end().siblings("li").find("a").removeClass("active"),l.removeClass("active").eq(a).addClass("active"),e=1e3<=$(window).width()?i.offset().top-n/2-s/2+i.outerHeight(!0)/2:i.offset().top-s;var o=Math.abs($(window).scrollTop()-e)/.3;$("html, body").stop(!0).delay(200).animate({scrollTop:e},o<300?300:600<o?600:o,function(){$(window).on("scroll",r)})}}),$("html,body").animate({scrollTop:0}),setTimeout(function(){$("#home-box").removeClass("first")},1e3),$(window).on("scroll",r).scroll().on("resize",function(){n=$(window).height(),s=$("#head").height(),1200<=$(window).outerWidth()&&$("#home .img-box").on("mousemove",function(e){var t=e.offsetX/($(this).width()/2)-1,a=e.offsetY/($(this).height()/2)-1;$(".year").css({transform:"translate3d("+5*t*5+"px, "+5*a*-5+"px, 0)"}),$(".title").css({transform:"translate3d("+5*t*-4+"px, "+5*a*4+"px, 0)"}),$(".R-girl").css({transform:"translate3d("+5*t*6+"px, "+5*a*3+"px, 0)"}),$(".L-girl").css({transform:"translate3d("+5*t*3+"px, "+5*a*6+"px, 0)"})})}).resize(),$("#head__m-btn").click(function(){$("#head").toggleClass("menu--open")}),$("#goToTop").click(function(){$("html,body").animate({scrollTop:0},600)})});