<template>
    <div class="wapper">
        <div class="header">
            <div class="left">
                <div class="title">
                    点击打开
                </div>
                <div class="desc">
                    点击右上角----
                </div>
            </div>
            <div class="right"></div>
        </div>
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
    background-color: rgba($color: grey, $alpha: .3);
    .header {
        width: 100%;
        margin: auto;
        padding: 10px;
        height: 10vh;
        box-sizing: border-box;
        display: flex;
        .left {
            height: 100%;
            flex: 1;
            .title {
                color: white;
                font-weight: 600;
                font-size: 14px;
            }
            .desc {
                color: white;
                font-weight: 400;
                font-size: 10px;
                margin-top: 10px;
            }
        }
        .right {
            flex: 1;
            height: 100%;
            background-image: url('./images/openInDefaultBrowser.png');
            background-size: 100% 100%;
            margin-left: 30px;
        }
    }
}
</style>
