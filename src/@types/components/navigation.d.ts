export interface NavigationInterface {
  nav: null | HTMLElement;
  openTrigger: null | HTMLButtonElement;
  closeTrigger: null | HTMLButtonElement;
  body: null | HTMLBodyElement;

  /**
   * Initialize the navigation
   */
  init: () => void;
  /**
   * Handles toggle navigation visiblity
   */
  handleNavigation: () => void;
  /**
   * Remove animation classes
   */
  removeAnimationClasses: (e: AnimationEvent) => void;
}
