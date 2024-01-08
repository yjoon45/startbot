const Header = {
  $header: $('.header'),

  handleScroll() {
    const scrollTop = $('html, body').scrollTop();
    this.$header.toggleClass('h-sticky', scrollTop! > 0);
  },
  init() {
    $(() => {
      $(window).on('scroll', this.handleScroll.bind(this));
    });
  },
};

export default Header;
