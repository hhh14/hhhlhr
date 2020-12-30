<template>
    <div>
        <h1>购买成功！</h1>
        <div>
            <p><a @click="goFirst">点击返回首页</a></p>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goFirst(){
            this.$router.push('/');
        }
    }
}
</script>
<style scoped>

</style>