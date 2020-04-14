import { observable, flow, computed } from "mobx";

import BaseStore from "stores/BaseStore";
import RootStore from "stores";

import MarketService from "services/market/MarkerService";

import { Dealing, Paging } from "./types";

class MarketStore extends BaseStore {
  root: RootStore;

  constructor(root: RootStore) {
    super();
    this.root = root;
  }
  @observable
  private _averageCondition?: string;

  @observable
  private _paging?: Paging;

  @observable
  private _dealingList: Dealing[] = [];

  @observable
  private _product?: Dealing;

  @computed
  get AverageCondition() {
    return this._averageCondition;
  }

  @computed
  get Paging() {
    return this._paging;
  }

  @computed
  get DealingList() {
    return this._dealingList;
  }

  @computed
  get Product() {
    return this._product;
  }

  GetAverageCondition = flow(function* (this: MarketStore) {
    this._init("GET_AVERAGE_CONDITION");
    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ "market.condition": string }>;
      } = yield MarketService.GetAverageAPI();

      const data = res.data;

      this._averageCondition = data["market.condition"];

      this._success["GET_AVERAGE_CONDITION"] = true;
    } catch (e) {
      this._failure["GET_AVERAGE_CONDITION"] = [false, e];
    } finally {
      this.pending["GET_AVERAGE_CONDITION"] = false;
    }
  });

  GetDealingList = flow(function* (
    this: MarketStore,
    page: number,
    order: string,
    query?: string,
    more?: boolean,
  ) {
    this._init("GET_DEALING_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ paging: Paging; list: Dealing[] }>;
      } = yield MarketService.GetDlListAPI(page, order, query);

      const { paging, list } = res.data;

      this._paging = paging;
      // more 을 보내면 추가 안보내면 10개 기본 ex) 처음에는 more 안보내랑
      if (more) {
        console.log("more");
        list.forEach((data) => {
          this._dealingList.push(data);
        });
      } else {
        console.log("default");
        this._dealingList = list;
      }

      this._success["GET_DEALING_LIST"] = true;
    } catch (e) {
      this._failure["GET_DEALING_LIST"] = [false, e];
    } finally {
      this._pending["GET_DEALING_LIST"] = false;
    }
  });

  GetProductDetail = flow(function* (this: MarketStore, idx: string) {
    this._product = undefined;
    this._init("GET_PRODUCT_DETAIL");
    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ market: Dealing }>;
      } = yield MarketService.GetProductDetail(idx);
      const { market } = res.data;

      this._product = market;
      this._success["GET_PRODUCT_DETAIL"] = true;
    } catch (e) {
      this._failure["GET_PRODUCT_DETAIL"] = [false, e];
    } finally {
      this._pending["GET_PRODUCT_DETAIL"] = false;
    }
  });
}

export default MarketStore;
