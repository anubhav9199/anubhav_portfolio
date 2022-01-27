// const TypeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type = function() {
//   // Current index of word
//   const current = this.wordIndex % this.words.length;
//   // Get full text of current word
//   const fullTxt = this.words[current];

//   // Check if deleting
//   if(this.isDeleting) {
//     // Remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // Initial Type Speed
//   let typeSpeed = 100;

//   if(this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // If word is complete
//   if(!this.isDeleting && this.txt === fullTxt) {
//     // Make pause at end
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   } else if(this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     // Move to next word
//     this.wordIndex++;
//     // Pause before start typing
//     typeSpeed = 300;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// }

// // Init On DOM Load
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));
//   const wait = txtElement.getAttribute('data-wait');
//   // Init TypeWriter
//   new TypeWriter(txtElement, words, wait);
// }

var demoButtons;

function start () {
  
  // Add event "click" to "demo buttons"
  demoButtons = document.querySelectorAll ('.js-modify');
  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].addEventListener ('click', toggleEffect);
  }
  
  // Add event "click" to "save buttons"
  var saveButtons = document.querySelectorAll ('.js-save');
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener ('click', toggleActive);
  }
  
}

// Toggle "effect" classes
function toggleEffect () {
  var target = document.querySelector (this.dataset.target);
      target.dataset.effect = this.dataset.effect;
  
  for (var i= 0; i < demoButtons.length; i++) {
    demoButtons[i].classList.remove ('active');
  }
  
  toggleActive.call (this);
}

// Toggle "active" class
function toggleActive () {
  this.classList.toggle ('active');
}

// Invoke "start ()" function
window.addEventListener ('load', start);


$(function() {
  var isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;

    // Mobile height fix
    $('.height-fix').each(function() {
      var h = $(this).height();
      $(this).height(h);
    });
  }

  // RESIZE RESETS
  // $(window).resize(function() {
  //   posFilterBar($('.filter').first());
  // });

  // Sticky Nav on Mobile
  if (isMobile) {
    $('nav').addClass('fixed');
  } else {
    $('nav').addClass('desk');
  }

  const txts=document.querySelector(".animate-text").children, txtsLen=txts.length;
  let index=0;
  const textInTimer=3000, textOutTimer=2800;

  function animateText() {
    for(let i=0; i<txtsLen; i++){
      txts[i].classList.remove("text-in","text-out");  
    }
    
    txts[index].classList.add("text-in");

    setTimeout(function(){
      if(index == txtsLen-1){
        index=0;
      } else {
        index++;
      }
      
      animateText();
    },textInTimer);

    setTimeout(function(){
      txts[index].classList.add("text-out");
    },textOutTimer)
  
  }
          
  window.onload=animateText;

  // NAV POSITION
  // var navPos = $('nav').position().top;
  // var lastPos = 0;
  // var lockTimer;

  // $(window).on('scroll', function() {
  //   var pos = $(window).scrollTop();
  //   var pos2 = pos + 50;
  //   var scrollBottom = pos + $(window).height();

  //   if (!isMobile) {
  //     if (pos >= navPos + $('nav').height() && lastPos < pos) {
  //       $('nav').addClass('fixed');
  //     }
  //     if (pos < navPos && lastPos > pos) {
  //       $('nav').removeClass('fixed');
  //     }
  //     lastPos = pos;
  //   }

    // Link Highlighting
    if (pos2 > $('#home').offset().top) {
      highlightLink('home');
    }
    if (pos2 > $('#about').offset().top) {
      highlightLink('about');
    }
    // if (pos2 > $('#services').offset().top) {
    //   highlightLink('services');
    // }
    // if (pos2 > $('#current-project').offset().top) {
    //   highlightLink('current-project');
    // }
    // if (pos2 > $('#open-source').offset().top) {
    //   highlightLink('open-source');
    // }
    // if (
    //   pos2 > $('#contact').offset().top ||
    //   pos + $(window).height() === $(document).height()
    // ) {
    //   highlightLink('contact');
    // }

    // Prevent Hover on Scroll
  //   clearTimeout(lockTimer);
  //   if (!$('body').hasClass('disable-hover')) {
  //     $('body').addClass('disable-hover');
  //   }

  //   lockTimer = setTimeout(function() {
  //     $('body').removeClass('disable-hover');
  //   }, 500);
  // });

  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $('nav')
      .find('[dest="' + anchor + '"]')
      .addClass('active');
  }

  // EVENT HANDLERS
  $('.page-link').click(function() {
    var anchor = $(this).attr('dest');
    $('.link-wrap').removeClass('visible');

    $('nav span').removeClass('active');
    $('nav')
      .find('[dest="' + anchor + '"]')
      .addClass('active');

    $('html, body').animate(
      {
        scrollTop: $('#' + anchor).offset().top
      },
      400
    );
  });

  $('.mdi-menu').click(function() {
    $('.link-wrap').toggleClass('visible');
  });

  $('.blog-wrap').hover(
    function() {
      $('.blog-wrap')
        .not(this)
        .addClass('fade');
      $(this).addClass('hover');
    },
    function() {
      $(this).removeClass('hover');
      $('.blog-wrap').removeClass('fade');
    }
  );

  // posFilterBar($('.filter').first());

  // $('.filter').click(function() {
  //   posFilterBar(this);
  // });

  function posFilterBar(elem) {
    var origin = $(elem)
      .parent()
      .offset().left;
    var pos = $(elem).offset().left;
    $('.float-bar').css({
      left: pos - origin,
      width: $(elem).innerWidth()
    });
    $('.float-bar .row').css('left', (pos - origin) * -1);
  }

  // GALLERY
  $('#gallery').mixItUp({});

  function mixClear() {
    setTimeout(function() {
      $('#gallery').removeClass('waypoint');
    }, 2000);
  }

  // SCROLL ANIMATIONS
  function onScrollInit(items, elemTrigger) {
    var offset = $(window).height() / 1.6;
    items.each(function() {
      var elem = $(this),
        animationClass = elem.attr('data-animation'),
        animationDelay = elem.attr('data-delay');

      elem.css({
        '-webkit-animation-delay': animationDelay,
        '-moz-animation-delay': animationDelay,
        'animation-delay': animationDelay
      });

      var trigger = elemTrigger ? trigger : elem;

      trigger.waypoint(
        function() {
          elem.addClass('animated').addClass(animationClass);
          if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
        },
        {
          triggerOnce: true,
          offset: offset
        }
      );
    });
  }

  setTimeout(function() {
    onScrollInit($('.waypoint'));
  }, 10);

  // CONTACT FORM
  $('#contact-form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: 'https://formspree.io/anubhavsharma9199@gmail.com',
      method: 'POST',
      data: { message: $('form').serialize() },
      dataType: 'json'
    }).done(function(response) {
      $('#success').addClass('expand');
      $('#contact-form')
        .find('input[type=text], input[type=email], textarea')
        .val('');
    });
  });

  $('#close').click(function() {
    $('#success').removeClass('expand');
  });
});
