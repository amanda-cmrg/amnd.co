var overlaps = (function() {
  function getPositions(elem) {
    var pos, width, height;
    pos = $(elem).position();
    width = $(elem).width();
    height = $(elem).height();
    return [
      [pos.left, pos.left + width],
      [pos.top, pos.top + height]
    ];
  }

  function comparePositions(p1, p2) {
    var r1, r2;
    r1 = p1[0] < p2[0] ? p1 : p2;
    r2 = p1[0] < p2[0] ? p2 : p1;
    return r1[1] > r2[0] || r1[0] === r2[0];
  }

  return function(a, b) {
    var pos1 = getPositions(a),
      pos2 = getPositions(b);
      return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1]);
  };
})();

function resizeShit() {
  $('.person').height('');
  $.each($('.person'), function() {
    $(this).height($(this).height());
  });
  $('.side-info').css('right', $('.side-info').offset().top + 'px');
  $('.sobre').css('left', $('.side-info').offset().top + 'px');
}

function toggleAbout() {
  $('.left, .right').toggle();
  $('.sobre').toggle();
}

$(document).on('click', 'path', function() {
  resizeShit();
  $(".info").hide();
  $('path').attr('class', '');
  $(this).attr('class', 'active');
  $('.person').removeClass('active');
  $('.person.' + $(this).attr('id')).addClass('active');
  $(".legenda").show();
  if (overlaps('.person.' + $(this).attr('id'),".legenda")) {
    $(".legenda").hide();
  }
});

$(document).on('click', '.close', function() {
  $(".info").show();
  $(".legenda").show();
  $('path').attr('class', '');
  $('.person').removeClass('active');
});

$(document).on('click', '.sobre .close', function() {
  toggleAbout();
});

$(document).on('click', '.toggleAbout', function() {
  toggleAbout();
});

$(window).resize(function() {
  resizeShit();
});

$(function() {

  $("video").on(
    "timeupdate", 
    function(event){
      if(this.currentTime>3.9) {
        $('.video-container').fadeOut()
      }
    });

  setTimeout(function() {
    $('.niveis, .pontos').addClass('active');
  }, 100);
  setTimeout(function() {
    $('.primarias').addClass('active');
  }, 800);
  setTimeout(function() {
    $('.secundarias').addClass('active');
  }, 1500);
  setTimeout(function() {
    $('.nomes').show();
    setTimeout(function() {
      $('.nomes').addClass('active');
    }, 10);
  }, 3500);


  resizeShit();
  // toggleAbout();

});
