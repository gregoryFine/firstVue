export function firstPlusCol(){
    let plusObj = {
        
        renderHeader:(h) => {
            return h(
                'icon',
                {
                    attrs:{
                        type:'md-add-circle'
                    },
                    on:{
                        'click':() => {
                            this.data6.push(this.pObj);
                        }
                    }

                }
            )
        },
        render:(h, params) => {
            return h(
                'icon',
                {
                    attrs:{
                        type:'md-remove'
                    },
                    on: {
                        'click' : () => {
                            this.data6.splice(params.index, 1);
                        }
                    }
                }
            );
        }
    }
    return plusObj;
}