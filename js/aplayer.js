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
          name: '血落霜寒 - 无垠之白',
          artist: '陈致逸',
          url: '/songs/血落霜寒 - 无垠之白.mp3',
          cover: '/img/cg/[void_0]85543107.jpg'
        },
       {
          name: '璃月的晴空',
          artist: '陈致逸',
          url: '/songs/璃月的晴空.mp3',
          cover: '/img/cg/[void_0]85543107.jpg'
        }
      ]
    });
  }
})();