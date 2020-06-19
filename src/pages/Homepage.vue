<template>
    <div>
        <Welcome v-if="pageCounter === 1" />
        <Video v-if="pageCounter === 2" />
        <Practice1 v-if="pageCounter === 3" />
        <Practice2 v-if="pageCounter === 4" />
        <Practice3 v-if="pageCounter === 5" />
        <footer>
            <button class="btn btn__black" v-if="true" @click="pageCounter > 1 ? pageCounter -- : pageCounter = 1;">Geri</button>
            <button class="btn btn__black" v-if="true" @click="pageCounter < 5 ? pageCounter ++ : finishApplication()">{{pageCounter === 5 ? 'Bitir' : 'İleri'}}</button>
            <!-- <button class="btn btn__black" v-if="pageCounter === 5" @click="">Bitir</button> -->
        </footer>
    </div>
</template>
<script>
    import Welcome from '../components/Welcome.vue';
    import Video from '../components/Video.vue';
    import Practice1 from '../components/Practice1.vue';
    import Practice2 from '../components/Practice2.vue';
    import Practice3 from '../components/Practice3.vue';
    export default {
        components: {
            Welcome,
            Video,
            Practice1,
            Practice2,
            Practice3
        },
        data() {
            return {
                pageCounter: 1
            }
        },
        methods: {
            finishApplication() {
                alert("Tebrikler, Uygulamayı Bitirdin!");
            }
        }
    }
</script>
<style lang="scss" scoped>
    footer {
        position: absolute;
        bottom: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>