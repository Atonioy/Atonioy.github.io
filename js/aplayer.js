!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: false,
      loop: 'all',
      order: 'random',
      theme: '#b7daff',
      preload: 'none',
      audio: [
        {
          name: 'color',
          artist: 'CHiCO with HoneyWorks',
          url: '/songs/color.mp3',
          cover: '/img/tg/[void_0]85543107.jpg'
        },
         {
          name: '世界は恋に落ちている',
          artist: 'CHiCO with HoneyWorks ',
          url: '/songs/世界は恋に落ちている.mp3',
          cover: '/img/tg/[void_0]85543107.jpg'
        }
      ]
    });
  }
})();