import jsonp from "jsonp";
import { getServiceBaseUrl, serverRunningLocally } from "@/util/global"

export default class Http {
  public async get<T> (url: string, options): Promise<T> {
    if (!serverRunningLocally()) {
      url = getServiceBaseUrl() + url; 
    }

    let { params } = options;
    if (!params) {
      params = {}
    }
    Object.keys(params).forEach(key => {
      const value =params[key];
      if (url.indexOf('?') !== -1) {
        url += `&${key}=${value}`
      } else {
        url += `?${key}=${value}`
      }
    })

    return new Promise((resolve, reject) => {
      jsonp(url, null, (err, data) => {
        if (err) {
          console.error(err.message);
          reject(err.message)
        } else {
          resolve(data);
        }
      });
    })
  }
}