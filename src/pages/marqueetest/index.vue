<template>
<div class = "main_div">
<Marquee duration="6000" interval="20000" direction="up" class = "quee_main">
                <div v-for="i in listData" :content="i" :key="i">{{i}}</div>
</Marquee>
</div>
</template>

<script>
export default{
    data(){
        return {
            listData: ['item1', 'item2', 'item3']
        }
    }
    
}

</script>

<style scoped>
.main_div{
    width:500px;
    height:500px;
}
.quee_main{
    width:500px;
    height:500px;
}
.quee_main div{
    width:50px;
    height:50px;
}
</style>