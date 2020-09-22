import servier from '../ulit/request.js'

export function demo(){
  return new Promise((resolve,reject)=>{
    return servier.request({
      url:'http://api.artgoer.cn:8084/artgoer/api/v1/user/324380/v3/topic/topicHomeByLabel?pageIndex=1&token=b544cd63-6d42-46fe-a96c-3cf96bae3113&topicId=62187',
      method:'get'
    }).then((ok)=>{
      resolve(ok)
    }).catch((err)=>{
      reject(err)
    })
  })
}