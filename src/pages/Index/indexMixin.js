import { routeNameArr, menu } from "./routeNameArr";
export default {
    data() {
        return {
            menu: [],
            menuActiveName: "1",
            menuOpenNames: [],
            currentPageName: "",
            dataMenu: [],
            routeNameArr: []
        };
    },
    methods: {
        getFirstPage() {
            this.menu.forEach((item, index) => {
                if (item) {
                    return item.path;
                } else if (item.items && item.items.length > 0 && item.items[0].path) {
                    return item.items[0].path;
                }
            });
            return "/";
        },
        gotoPage(item) {
            this.$router.push(item.path);
        },
        showOrCloseMenu(open) {
            let menuEle = document.getElementById("siderId");
            if (open) {
                menuEle.style.marginLeft = "0px";
            } else {
                menuEle.style.marginLeft = "-190px";
            }
        },
        removeBut(path, andGoNext) {
            for (let i = 0; i < this.dataMenu.length; i++) {
                if (this.dataMenu[i].path != path) {
                    continue;
                }
                this.dataMenu.splice(i, 1);
                if (!andGoNext) {
                    return;
                }
                if (this.dataMenu.length == 0) {
                    this.gotoPage(this.getFirstPage);
                } else {
                    if (i > 0) {
                        this.gotoPage(this.dataMenu[i - 1].path);
                    } else {
                        this.gotoPage(this.dataMenu[this.dataMenu.length - 1].path);
                    }
                }
            }
        },
        initData() {
            let path = this.$route.path;
            if (!path || this.menu.length == 0) {
                return;
            }
            let indexSelected = -1;
            for (let i in this.dataMenu) {
                this.dataMenu[i].isCurrent = false;
            }
            for (let index = 0; index < this.dataMenu.length; index++) {
                if (path == this.dataMenu[index].path) {
                    this.dataMenu[index].isCurrent = true;
                    indexSelected = index;
                    this.currentPageName = this.dataMenu[index].name;
                    break;
                }
            }
            if (indexSelected == -1) {
                for (let index = 0; index < this.routeNameArr.length; index++) {
                    if (this.routeNameArr[index].path != path) {
                        continue;
                    }
                    let obj = this.$deepCopy(this.routeNameArr[index]);
                    obj.key = this.uuid();
                    obj.isCurrent = true;
                    this.currentPageName = obj.name;
                    this.dataMenu.push(obj);
                    while (this.dataMenu.length > 7) {
                        this.dataMenu.splice(0, 1);
                    }
                    indexSelected = this.dataMenu.length - 1;
                    break;
                }
            }
        },
        uuid() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";
            var uuid = s.join("");
            return uuid;
        }
    },
    created() {
        this.menu = menu;
        this.routeNameArr = routeNameArr;
        if (this.$route.path == "/") {
            this.$router.push(this.getFirstPage);
        } else {
            this.routeNameArr.forEach((item, index) => {
                let obj = this.$deepCopy(item);
                obj.key = this.uuid();
                this.dataMenu.push(obj);
            });
        }
        this.initData();
    },
    mounted() { },
    watch: {
        $route(to, from) { //********************路由更新后，更新面包屑和其下部按钮数据**********************************
            console.log(to, '==================', from)
            this.initData()
        }
    }
}
