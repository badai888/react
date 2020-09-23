import servier from '../ulit/request.js'
import url from '../ulit/url'
export function demo(){
  return new Promise((resolve,reject)=>{
    return servier.request({
      url:url,
      method:'get'
    }).then((ok)=>{
      resolve(ok)
    }).catch((err)=>{
      reject(err)
    })
  })
}