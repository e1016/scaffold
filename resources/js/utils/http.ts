
export default class Http {
  static BEELTAXI_HOST: string = 'http://localhost:3000'
  private host: string = ''
  private headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  public static globalBearerToken: string = ''

  constructor(host: string, headers?: any) {
    this.host = host
    this.headers['Authorization'] = `Bearer ${Http.globalBearerToken}`
    if (headers) {
      this.headers = {
        ...this.headers,
        ...headers
      }
    }
  }

  setHeader(key: string, value: string) {
    this.headers[key] = value
  }

  setAuthorization(token: string) {
    this.setHeader('Authorization', `Bearer ${token}`)
  }

  static setAuthorization(token: string) {
    Http.globalBearerToken = token
  }

  async get(url: string) {
    const response = await fetch(this.host + url, { method: 'GET', headers: this.headers })
    const result = await response.json()
    this.l(url, null, result)
    return result
  }

  async post(url: string, data: any) {
    const response = await fetch(this.host + url, { method: 'POST', headers: this.headers, body: JSON.stringify(data), })
    const result = await response.json()
    this.l(url, data, result)
    return result
  }

  l(url: string, data: any, result: any) {
    if (/*this.debug*/ false) {
      console.log(this.host + url, 'withbody:', data || '(empty)', Object.keys(result))
    }
  }
}