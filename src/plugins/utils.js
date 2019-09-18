import * as d3collection from 'd3-collection'
let UtilsPlugin = {};
UtilsPlugin.install = Vue => {
    String.prototype.endWidth = (s) => {
        let reg = new RegExp(s + '');
        return reg.test(this);
    }
    // 引入d3.js 库里的集合相关方法，很实用的库
    Vue.$collection = Vue.prototype.$collection = d3collection;
    // 深克隆一个JS 对象
    Vue.$deepCopy = Vue.prototype.$deepCopy = obj => {
        return JSON.parse(JSON.stringify(obj));
    }
    // 浅克隆一个 JS 对象
    Vue.$shallowCopy = Vue.prototype.$shallowCopy = obj => {
        return Object.assign({}, obj);
    }

    Vue.$addData = Vue.prototype.$addData = (arrTo, arrFrom) => {
        for (let i in arrFrom) {
            arrTo.push(arrFrom[i]);
        }
    }

    // 将Date 转成 yyyy-MM-dd HH:mm:ss 字符串
    Vue.$formatDateTime = Vue.prototype.$formatDateTime = (date, end = 's') => {
        if (!date) {
            return '';
        }
        if (!(date instanceof Date)) {
            return date;
        }
        try {
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            let d = date.getDate();
            let h = date.getHours();
            let mi = date.getMinutes();
            let s = date.getSeconds();

            m = m < 10 ? '0' + m : '' + m;
            d = d < 10 ? '0' + m : '' + d;
            h = h < 10 ? '0' + h : '' + h;
            mi = mi < 10 ? '0' + mi : '' + mi;
            s = s < 10 ? '0' + s : '' + s;

            return {
                'd': `${y}-${m}-${d}`,
                'h': `${y}-${m}-${d}` + " " + `${h}`,
                'm': `${y}-${m}-${d} ${h}:${mi}`,
                's': `${y}-${m}-${d} ${h}:${mi}:${s}`
            }[end];

        } catch (e) {
            return date;
        }
    }

}

export default UtilsPlugin;