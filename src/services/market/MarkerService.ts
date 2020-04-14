import qs from "query-string";
import client from "lib/client";

class MarketService {
  public GetDlListAPI(page: number, order: string, query?: string) {
    return client.get(`/api/markets`, { params: { page, order, query } });
  }

  public GetAverageAPI() {
    return client.get(`/api/markets/info`);
  }

  public GetProductDetail(idx: string) {
    return client.get(`/api/markets/${idx}`);
  }
}

export default new MarketService();
