export default class YTPlayer {
  player: null | YT.Player = null;

  onStateChange = (event: YT.OnStateChangeEvent) => {
    const isPlaying = event.data === 1;
    this.switchPlayBtn($('.play-controls'), !isPlaying);
  };

  readyPlayer = () => {
    window.onYouTubeIframeAPIReady = () => {
      this.player = new YT.Player('yt-iframe', {
        events: {
          onStateChange: this.onStateChange,
        },
      });
    };
  };

  handleMuteUnMute = (e: JQuery.ClickEvent) => {
    if (this.player?.isMuted()) {
      this.player.unMute();
      $(e.currentTarget).addClass('is-unmute');
    } else {
      this.player?.mute();
      $(e.currentTarget).removeClass('is-unmute');
    }
  };

  getPlayingState = () => {
    return this.player?.getPlayerState() === YT.PlayerState.PLAYING;
  };

  switchPlayBtn = (
    target: HTMLElement | JQuery<HTMLElement>,
    isPlaying: boolean
  ) => {
    isPlaying
      ? $(target).addClass('is-playing')
      : $(target).removeClass('is-playing');
  };

  handlePlaying = (e: JQuery.ClickEvent) => {
    const isPlaying = this.getPlayingState();

    isPlaying ? this.player?.pauseVideo() : this.player?.playVideo();

    this.switchPlayBtn(e.currentTarget, isPlaying);
  };

  init = () => {
    $('<script />', {
      src: 'https://www.youtube.com/iframe_api',
    }).appendTo('body');

    $('.mute-controls').on('click', this.handleMuteUnMute);
    $('.play-controls').on('click', this.handlePlaying);

    this.readyPlayer();
  };
}
