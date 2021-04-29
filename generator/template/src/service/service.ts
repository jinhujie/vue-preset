import Http from './http'

export default class Service {
  public get<T> (url, options ): Promise<T>{
    return new Http().get(url, options);
  }
}