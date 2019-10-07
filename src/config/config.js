let Path = {};
Path.install = Vue => {
    let host = "http://localhost";
    let basePath = host + ':8080/';
    Vue.prototype.$path = {
        basePath : basePath,
        basic : {
            test : basePath + 'test/test'
        },
        con : {
            toGetBase : basePath + 'con/toGetBase'
        }
    }
};
export default Path;

