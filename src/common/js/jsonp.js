import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) //拼接url

    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            }
            else {
                reject(err)
            }
        })
    })
}

function param(data) {
    let url = ''
    for (var key in data) {
        let value = data[k] !== undefined ? data : ''
        url += `&${k}=${encodeURIComponent(value)}` //``字符串字面量语法，也称为模板字符串
    }
    return url ? url.substring(1) : '' //删除第一个data
}