<template>
    <div class="wapper">
        <div class="header">
            <div class="right"></div>
        </div>
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
  name: 'OpenInDefaultBrowser'
}
</script>
<style scoped lang="scss">
.wapper {
    width: 100vw;
    height: 100vh;
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: auto;
    background-color: rgba($color: #000000, $alpha: .3);
    .header {
        width: 100%;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        justify-content: end;
        .right {
            width: 226px;
            height: 127px;
            background-image: url('./images/open-in-browser.png');
            background-size: 100% 100%;
            margin-right: 23px;
        }
    }
}
</style>
