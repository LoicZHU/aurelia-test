import { lifecycleHooks } from '@aurelia/runtime-html';
import anime from 'animejs';

const animateIn = (element) =>
  anime({
    targets: element,
    translateX: () => ['110%', '0%'],
    duration: 900,
    easing: 'easeInOutQuart',
  });

const animateOut = (element) =>
  anime({
    targets: element,
    translateX: () => ['0%', '110%'],
    duration: 900,
    easing: 'easeInOutQuart',
  });

@lifecycleHooks()
export class AnimationHooks {
  private element;
  private backwards = false;

  public created(vm, controller): void {
    this.element = controller.host;
  }

  public loading(vm, _params, _instruction, navigation) {
    this.backwards = navigation.navigation.back;
  }

  public unloading(vm, _instruction, navigation) {
    this.backwards = navigation.navigation.back;
  }

  public attaching() {
    if (this.backwards) {
      animateOut(this.element);
    } else {
      animateIn(this.element);
    }
  }

  public detaching() {
    if (this.backwards) {
      animateIn(this.element);
    } else {
      animateOut(this.element);
    }
  }
}
