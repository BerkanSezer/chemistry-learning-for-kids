<template>
    <div class="container">
        <header>
            <h1>Video 1 - Asitler ve Bazlar</h1>
            <span class="info">
                <BIconInfoCircle/>
                Bu videoda size asitler ve bazları anlatacağız
            </span>
        </header>
        <div style="margin-top:20px">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TRRMSVCSl6Y" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Video',
        created() {
            this.$store.state.canGoToNextPage = true;
            //this.$store.state.canGoToPreviousPage = false;

        }
    }
</script>
<style lang="scss" scoped>
    iframe{
        height: 45vw;
        width: 80vw;
        max-width: 800px;
        max-height: 450px;
    }
</style>