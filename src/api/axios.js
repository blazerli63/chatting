// import axios from 'axios'
// import qs from 'qs'

// // 在config.js文件中统一存放一些公共常量，方便之后维护
// import {baseURL} from './config'



// // 创建axios实例
// const service = axios.create({
//     baseURL: process.env.BASE_API, // node环境的不同，对应不同的baseURL
//     timeout: 5000, // 请求的超时时间
//     //设置默认请求头，使post请求发送的是formdata格式数据// axios的header默认的Content-Type好像是'application/json;charset=UTF-8',我的项目都是用json格式传输，如果需要更改的话，可以用这种方式修改
//     // headers: {  
//       // "Content-Type": "application/x-www-form-urlencoded"
//     // },
//     withCredentials: true // 允许携带cookie
//   });
  
//   // 发送请求前处理request的数据
// //   axios.defaults.transformRequest = [(data) => {
// //     let newData = ''
// //     for (let k in data) {
// //       newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
// //     }
// //     return newData
// //   }];

// // 添加请求拦截器，在发送请求之前做些什么(**具体查看axios文档**)--------------------------------------------
// service.interceptors.request.use((config) => {
//     console.log(config);
//     config.data = JSON.stringify(config.data);
//     config.headers = {
//         'Content-Type':'application/x-www-form-urlencoded'
//     }
//     return config;
// },(err) =>{
//     return Promise.reject(err);
// });

// // 添加响应拦截器(**具体查看axios文档**)----------------------------------------------------------------
// service.interceptors.response.use((response) =>{
//     return response.data;
// },(err) => {
//     return Promise.reject(err);
// })

// // 封装数据返回失败提示函数---------------------------------------------------------------------------
// function errorState(response){
//     //隐藏loading
//     //如果http状态码正常，则直接返回数据
//     if(response && response.status === 200 || response.status === 304 || response.status === 400){
//         return response
//     }else{
//         alert("数据获取错误");
//     }
// }

// // 封装数据返回成功提示函数---------------------------------------------------------------------------
// function successState(res){
//     //隐藏loading
//     //统一判断后端的错误码（错误吗与后台协商而定）
//     if(res.data.data === '000000'){
//         alert('success');
//         return ;
//     }
    
// }

// // 封装axios--------------------------------------------------------------------------------------
// function apiAxios(method,url,params){
//     let httpDefault = {
//         method : method,
//         baseURL : baseURL,
//         url : url,
//         // `params` 是即将与请求一起发送的 URL 参数
//         // `data` 是作为请求主体被发送的数据
//         params : method === 'GET' || method === 'DELETE' ? params : null,
//         data : method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
//         timeout : 10000
//     }
//     // 注意**Promise**使用(Promise首字母大写)
//     return new Promise((resolve, reject) => {
//         axios(httpDefault)
//         //此处的.then属于axios
//         .then((res) => {
//             successState(res);
//             resolve(res);
//         }).catch((response) => {
//             errorState(response);
//             reject(response);
//         })
//     })
// }


// // 输出函数getAxios、postAxios、putAxios、delectAxios，供其他文件调用-----------------------------
// // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
// export default{
//     install : function(Vue){
//         Vue.prototype.getAxios = (url , params) => apiAxios('GET',url,params)
//         Vue.prototype.postAxios = (url , params) => apiAxios('POST',url,params)
//         Vue.prototype.putAxios = (url , params) => apiAxios('PUT',url,params)
//         Vue.prototype.deleteAxios = (url , params) => apiAxios('DELETE',url,params)
//     }
// }



