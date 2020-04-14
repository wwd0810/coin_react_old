import UserStore from "./users/store";
import MarketStore from "./market";

class RootStore {
  userStore: UserStore;
  marketStore: MarketStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.marketStore = new MarketStore(this);
  }
}

export default RootStore;
