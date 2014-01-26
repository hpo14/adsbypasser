(function () {
  'use strict';

  function helper (m) {
    $.openImage('/images/' + m.query[1]);
  }

  // mihalism v1
  $.register({
    rule: {
      host: /^(imagepremium|hentai-hosting|gallery\.jpavgod|miragepics|funextra\.hostzi)\.com|freeuploadimages\.org|shareimage\.ro|bilder\.nixhelp\.de|imagecurl\.(com|org)|imagevau\.eu|img\.deli\.sh|imgking\.us|image(pong|back)\.info|photoup\.biz$/,
      path: /^\/viewer\.php$/,
      query: /^\?file=([^&]+)/,
    },
    start: helper,
  });

  // mihalism v2
  $.register({
    rule: {
      host: /^love69\.org$/,
      path: /^\/(i|eu)\/viewer\.php$/,
      query: /^\?file=([^&]+)/,
    },
    start: function (m) {
      var url = _.T('/{0}/images/{1}');
      $.openImage(url(m.path[1], m.query[1]));
    },
  });

  // mihalism v3
  $.register({
    rule: {
      host: /howtohemorrhoidscure\.com/,
      path: /^\/viewer\.php$/,
      query: /^\?file=([^&]+)/,
    },
    ready: function () {
      var a = $('#page_body a');
      var s = a.href;
      // the real link is diffirent from original host
      a = s.lastIndexOf('http://');
      if (a >= 0) {
        $.openLink(s.substr(a));
      }
    },
  });

  // hostpornpics.net
  $.register({
    rule: [
      'http://hostpornpics.net/viewer.php?*file=*',
    ],
    ready: function () {
      var i = $('#page_body div.text_align_center img');
      $.openImage(i.src);
    },
  });

  // dwimg.com
  $.register({
    rule: {
      host: /^(dwimg|imgsin)\.com$/,
      path: /^\/viewer\.php$/,
      query: /^\?file=([^&]+)/,
    },
    start: function (m) {
      $.openImage('/files/' + m.query[1]);
    },
  });

  // picup.in
  $.register({
    rule: {
      host: /^picup\.in$/,
      path: /\.jpg\.html$/,
    },
    ready: function () {
      var a = $('#page_body br+a');
      var s = a.href;
      // the real link is diffirent from original host
      a = s.lastIndexOf('http://');
      if (a >= 0) {
        $.openImage(s.substr(a));
      }
    },
  });

  // imageview.me
  $.register({
    rule: {
      host: /imageview\.me|244pix\.com|imgnip\.com$/,
      path: /^\/viewerr.*\.php$/,
      query: /^\?file=([^&]+)/,
    },
    start: helper,
  });

  // javblog.biz
  $.register({
    rule: {
      host: /javblog\.biz$/,
      path: /^\/image\/viewer\.php$/,
      query: /^\?file=([^&]+)/,
    },
    start: function (m) {
      $.openImage('/image/images/' + m.query[1]);
    },
  });

  // catpic.biz
  $.register({
    rule: {
      host: /^catpic\.biz$/,
      path: /^(\/x)?\/viewer\.php$/,
      query: /^\?file=([^&]+)/,
    },
    start: function (m) {
      var url = _.T('{0}/images/{1}');
      $.openImage(url(m.path[1] || '', m.query[1]));
    },
  });

  // overpic.net
  $.register({
    rule: [
      'http://www.overpic.net/viewer.php?file=*',
    ],
    ready: function () {
      var i = $('#main_img');
      $.openImage(i.src);
    },
  });

})();

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
