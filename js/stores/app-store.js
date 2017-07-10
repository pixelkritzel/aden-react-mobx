import { action, observable, useStrict } from 'mobx';

useStrict(true);

class AppStore {
  @observable buttonClicks = 0;

  @action clickMore = () => this.buttonClicks++;
  @action clickLess = () => this.buttonClicks--;
}

export default new AppStore();
