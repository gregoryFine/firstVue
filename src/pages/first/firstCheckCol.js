export function firstCheckCol(){
    this.tableSelectedAll = false;
    let checkObj = {
        width:50,
        align:'center',
        renderHeader:(h)=>{
                return h('Checkbox', {
                    on:{
                        'on-change':(selectAll) => {
                            let arr = [];
                            this.data1.forEach((val, index) => {
                                this.$set(val, 'checked', selectAll);
                                if(val.checked){
                                    arr.push(val);
                                }
                            })
                            this.tableSelectionChange(arr);
                        }
                    },
                    props:{
                        'value': this.tableSelectedAll
                    }
                })
        },
        render:(h, params) =>{
            return h('Checkbox', {
                on:{
                    'on-change':(select) => {
                        this.$set(this.data1[params.index], 'checked', select);
                        let arr = [];
                        this.data1.forEach((val, index) => {
                            if(val.checked){
                                arr.push(val);
                            }
                        });
                        this.tableSelectionChange(arr);
                    }
                },
                props:{
                    'value':params.row.checked
                }
            })
        }

    }
    return checkObj;
}