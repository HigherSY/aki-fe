<template>
    <div id="app">
        <h1 style="font-size: 100px; color: #409EFF">401</h1>
        <h1>啊哦——链接已经过期了</h1>
        <p>
            给 Aki 发送
            <br>
            <el-link type="primary" style="font-size: 20px; margin: 10px">-点歌 投票</el-link>
            <br>
            获取新链接吧
        </p>
    </div>
</template>

<script>
export default {
    name: 'tokenExpired'
}
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
