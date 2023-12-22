export const Navigation: NavigationInterface = {
  nav: document.querySelector('.navigation'),
  openTrigger: document.querySelector('.navigation-open'),
  closeTrigger: document.querySelector('.navigation-close'),
  body: document.querySelector('body'),

  handleNavigation() {
    this.body?.classList.add('overflow-hidden');
    if (this.nav?.classList.contains('is-open')) {
      this.nav?.classList.add('is-close');
    } else {
      this.nav?.classList.add('is-open');
    }
  },

  removeAnimationClasses(e) {
    const animationName = e.animationName;

    if (animationName === 'dropup') {
      this.nav?.classList.remove('is-close', 'is-open');
      this.body?.classList.remove('overflow-hidden');
    }
  },

  init() {
    this.openTrigger?.addEventListener(
      'click',
      this.handleNavigation.bind(this)
    );

    this.closeTrigger?.addEventListener(
      'click',
      this.handleNavigation.bind(this)
    );

    this.nav?.addEventListener(
      'animationend',
      this.removeAnimationClasses.bind(this)
    );
  },
};

interface NavigationInterface {
  nav: null | HTMLElement;
  openTrigger: null | HTMLButtonElement;
  closeTrigger: null | HTMLButtonElement;
  body: null | HTMLBodyElement;
  init: () => void;
  handleNavigation: () => void;
  removeAnimationClasses: (e: AnimationEvent) => void;
}
