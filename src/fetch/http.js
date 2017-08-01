import CONFIG from '../base.config'
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    // error = response
    // throw error
    const obj = {
      errMes: '服务器开小差了，请稍后再试~',
      httpFalse: true
    }
    throw obj
  }
}

const parseJSON = (response) => {
  return response.json()
}
export default {
  get(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'image/webp,image/*,*/*;q=0.8',
        'Content-Type': 'image/png'
      }
    })
      .then(checkStatus)
      .then(function (data) {
        console.log('request succeeded with JSON response', data)
        return data
      }).catch(function (error) {
        console.log('request failed', error)
        return error
      })
  },
  post(url, obj = {}) {
    obj.AppKey = CONFIG.AppKey
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      body: JSON.stringify(obj)
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(function (data) {
        console.log('request succeeded with JSON response', data)
        return data
      }).catch(function (error) {
        console.log('request failed', error)
        return error
      })
  }

}

