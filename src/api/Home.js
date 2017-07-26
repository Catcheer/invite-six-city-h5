import Http from '../fetch/http'
import CONFIG from '../base.config'


export default {
  country() {
    const url = `${CONFIG.host}/catelog/country`
    const obj = {
      "host": "www.amazon.com",
      "CurrencyCode": "CNY"
    }
    return Http.post(url, obj)
  }
}