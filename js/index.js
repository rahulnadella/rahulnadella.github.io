// Generated by CoffeeScript 1.7.1
(function() {
  setTimeout(function() {
    var animateLogo, animating, collapse, explode, intro, logoEl, m, maskBottomBottom, maskMBottom, maskMTop, maskTopTop, maskVBottom, page, speed, square, support, v;
    speed = 1;
    page = document.querySelector('#page');
    logoEl = document.querySelector('#logo');
    m = dynamic(document.querySelector('g .m'));
    v = dynamic(document.querySelector('g .v'));
    square = dynamic(document.querySelector('g .square'));
    maskMTop = dynamic(document.querySelector('#logo #mask-m .top'));
    maskMBottom = dynamic(document.querySelector('#logo #mask-m .bottom'));
    maskVBottom = dynamic(document.querySelector('#logo #mask-v .bottom'));
    maskTopTop = dynamic(document.querySelector('#logo #mask-top .top'));
    maskBottomBottom = dynamic(document.querySelector('#logo #mask-bottom .bottom'));
    support = !/Firefox\//.test(window.navigator.userAgent);
    animating = false;
    animateLogo = function() {
      var anim, el, _i, _len, _ref;
      if (!support) {
        _ref = document.querySelectorAll('#logo g');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          el = _ref[_i];
          el.removeAttribute('mask');
        }
        return;
      }
      animating = true;
      m.css({
        translateY: 0,
        scale: 0.5
      });
      v.css({
        translateY: 40,
        scale: 0.5
      });
      anim = {
        type: dynamic.EaseInOut,
        friction: 80,
        duration: 900 * speed
      };
      m.to({
        translateY: 0,
        scale: 1
      }, anim).start();
      maskMTop.to({
        translateY: -23
      }, anim).start();
      maskMBottom.to({
        translateY: 23
      }, anim).start();
      maskVBottom.delay(160 * speed).to({
        translateY: -46
      }, anim).start();
      v.delay(160 * speed).to({
        translateY: 0,
        scale: 1
      }, anim).start();
      maskTopTop.delay(400 * speed).to({
        translateY: -46
      }, anim).start();
      maskBottomBottom.delay(400 * speed).to({
        translateY: 46
      }, anim).start();
      return setTimeout(function() {
        return animating = false;
      }, (400 + 900) * speed);
    };
    intro = function() {
      var contentEls, delay, el, headerEls, selector, _i, _j, _len, _len1;
      animateLogo();
      if (!support) {
        delay = 0;
      } else {
        delay = 900 * speed;
      }
      setTimeout(function() {
        return document.querySelector('header').classList.add('visible');
      }, delay);
      selector = 'header h1, header p, header #contact';
      headerEls = Array.prototype.map.call(document.querySelectorAll(selector), function(el) {
        return dynamic(el);
      });
      for (_i = 0, _len = headerEls.length; _i < _len; _i++) {
        el = headerEls[_i];
        el.css({
          opacity: 0,
          translateY: -10
        });
        el.delay(delay).to({
          opacity: 1,
          translateY: 0
        }, {
          type: dynamic.Spring,
          duration: 800 * speed,
          friction: 300,
          frequency: 7
        }).start();
        delay += 50;
      }
      selector = '#content section';
      contentEls = Array.prototype.map.call(document.querySelectorAll(selector), function(el) {
        return dynamic(el);
      });
      for (_j = 0, _len1 = contentEls.length; _j < _len1; _j++) {
        el = contentEls[_j];
        el.css({
          opacity: 0,
          translateX: -50
        });
        el.delay(delay).to({
          opacity: 1,
          translateX: 0
        }, {
          type: dynamic.Spring,
          duration: 800 * speed,
          friction: 300,
          frequency: 7
        }).start();
        delay += 50;
      }
      return page.style.visibility = 'visible';
    };
    explode = function() {
      var el, spring, _i, _len, _ref;
      if (animating) {
        return;
      }
      spring = {
        type: dynamic.Spring,
        duration: 800,
        friction: 300,
        frequency: 7
      };
      _ref = [maskTopTop, maskBottomBottom];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        el = _ref[_i];
        el.to({
          translateY: 0
        }, {
          type: dynamic.EaseInOut,
          friction: 80,
          duration: 600
        }).start();
      }
      m.to({
        translateY: 22,
        translateX: -40,
        scale: 1.2
      }, spring).start();
      return v.to({
        translateY: -22,
        translateX: 59,
        scale: 1.2
      }, spring).start();
    };
    collapse = function() {
      var easeInOut, el, k, _i, _len, _ref, _ref1, _results;
      if (animating) {
        return;
      }
      easeInOut = {
        type: dynamic.EaseInOut,
        friction: 80,
        duration: 600
      };
      _ref = {
        "-46": maskTopTop,
        "46": maskBottomBottom
      };
      for (k in _ref) {
        el = _ref[k];
        el.delay(100).to({
          translateY: parseInt(k)
        }, easeInOut).start();
      }
      _ref1 = [m, v];
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        el = _ref1[_i];
        _results.push(el.to({
          translateY: 0,
          translateX: 0,
          scale: 1
        }, easeInOut).start());
      }
      return _results;
    };
    logoEl.addEventListener('mouseover', function() {
      return explode();
    });
    logoEl.addEventListener('mouseout', function() {
      return collapse();
    });
    return intro();
  }, 1);

}).call(this);
