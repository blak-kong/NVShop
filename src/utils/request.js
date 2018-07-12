import axios from 'axios';
import {loading} from 'imcat-ui';
import _CONFIG from '../../static/config/global.confgi';

axios.defaults.baseURL = _CONFIG.REQUEST_BASE_URL || '';

const config = {

}

function ajax(options){
    const {
        url = '',
        method = 'get',
        data = {},
        timeout = 60 * 1000,            //1分钟
        withCredentials = false,        //`withCredentials`选项表明了是否是跨域请求
        loadingText = '加载中...',       //loading提示文字
        describe = '',                  //接口介绍
    } = options;

    loading.open({
        text: loadingText,
        spinnerType: 'rainbow',
    });

    return new Promise((resolve,reject)=>{
        axios({
            url: url,
            method: method,
            data: data,
            timeout: timeout,               //1分钟
            withCredentials: withCredentials,        //`withCredentials`选项表明了是否是跨域请求
        }).then(data=>{
            loading.close();
            console.log("")
            console.log("请求：" + (describe || url))
            console.log("返回：",data)
            console.log("")

            resolve(data)
        }).catch(err=>{
            loading.close();
            console.log("")
            console.log("请求：" + (describe || url))
            console.log("返回：",data)
            console.log("")

            reject(err)
        });
    })
}


function getTest(onsuccess,onfail){
    ajax({
        url:'/test.php',
        describe: '请求test'
    }).then(data=>{
        if(onsuccess) onsuccess(data);
    }).catch(err=>{
        if(onfail) onfail(err);
    })
}

export {
    getTest,
}