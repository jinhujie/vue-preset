import axios, { AxiosRequestConfig} from 'axios';

export default class Service{
  public imageFecher(){
    return new Http().get('/v3/homepagev2/images/logo.png?v=1');
  }
}

class Http{
  private init(): void {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  }
  constructor() {
    this.init();
  }
  public async get(url: string, options?: AxiosRequestConfig) {
    return axios.get(url, options)
  }
}
