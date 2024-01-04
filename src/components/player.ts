const Player = {
  trigger: $('.player-trigger'),
  poster: $('.player-poster'),
  iframe: $('.player-iframe'),

  playVideo(e: JQuery.ClickEvent) {
    const $target: JQuery<HTMLElement> = $(e.currentTarget);
    const src: string | undefined = $target.data('src');

    if (src !== undefined) {
      this.iframe.attr('src', src).removeClass('hidden');
      this.poster.add($target).addClass('hidden');
    } else {
      throw Error('video source [data-src] is not defined.');
    }
  },

  init() {
    $(() => {
      this.trigger.on('click', this.playVideo.bind(this));
    });
  },
};

export default Player;
