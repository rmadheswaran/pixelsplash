// Hero section

TweenMax.from($(".hero-content h1"), .5, {top:50, opacity:1, ease:Power2.easeOut, clearProps:"top"});
TweenMax.from($(".hero-content a"), 1, {top:80, opacity:1, ease:Power2.easeOut, clearProps:"top"});
TweenMax.from($(".hero-img"), 1, {left:80, opacity:1, ease:Power2.easeOut, clearProps:"left"});


TweenLite.defaultEase = Linear.easeNone;
var ctrl = new ScrollMagic.Controller();

// Create scenes
$("section").each(function(i) {
  let target1 = $(this).find(".container");
  let target2 = $(this).find("p");
  let target3 = $(this).find("img");
  var tl = new TimelineMax();
  tl.from(target1, 1, { opacity: 0, x: 50, y: 50 });
  tl.from(target2, 1, { scale: 0.5 }, 0);
  tl.from(target3, 1, {left:80, opacity:1, ease:Power2.easeOut, clearProps:"left"}, 0);

  new ScrollMagic.Scene({
    triggerElement: this,
    duration: "50%",
    triggerHook: 0.9
  })
    .setTween(tl)
    .addTo(ctrl)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 40
    });
});
