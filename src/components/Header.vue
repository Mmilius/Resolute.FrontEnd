<template>
    <header class="header">
        <h1 class="head-line">RES·O·LUTE</h1>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap');
    .header {
        background:white;
        color: #474787;
        text-align: center;
        padding: 20px;
        font-family: 'Noto Sans SC', sans-serif;
        font-size: 30px;
        height: 220px;
    }
    .header a{
        color: #ffff;
        padding-right: 5px;
    }
    .head-line{
        border: 4px solid #474787;
        padding: 12px;
        letter-spacing: 2px;
    
    }
    .sub-head{
      margin-top: -20px;
    }
</style>