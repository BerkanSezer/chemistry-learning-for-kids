<template>
    <div class="container">
        <header>
            <h1>Etkinlik 1</h1>
            <span class="info">
                <BIconInfoCircle/>
                Bu etkinlikte aşağıdaki pH değerkerini uygun maddelere göre yerleştiriniz.
            </span>
        </header>
        <div>
            <div class="col-md-12" style="height: 110px; padding: 0;">
                <drop class="drop__menu" @drop="handleDrop('inventory', list, ...arguments)">
                    <drag v-for="item in shuffledArray" class="drag" :key="item" :data-value="item"
                        :transfer-data="{ item: item, list: shuffledArray, example: 'lists' }">
                        {{ item }}
                    </drag>
                </drop>
            </div>
            <div class="row" id="dropable-row">
                <div class="col-md-4" id="acid">
                    <h3>Asit</h3>
                    <drop class="drop list" @drop="handleDrop('acid', acids, ...arguments)">
                        <drag v-for="item in acids" class="drag" :key="item" :data-value="item"
                            :transfer-data="{ item: item, list: acids, example: 'lists' }">
                            {{ item }}
                        </drag>
                    </drop>
                </div>
                <div class="col-md-4" id="base">
                    <h3>Baz</h3>
                    <drop class="drop list" @drop="handleDrop('base', bases, ...arguments)">
                        <drag v-for="item in bases" class="drag" :key="item" :data-value="item"
                            :transfer-data="{ item: item, list: bases, example: 'lists' }">
                            {{ item }}
                        </drag>
                    </drop>
                </div>
            </div>

        </div>

    </div>

</template>
<script>
    import {
        Drag,
        Drop
    } from 'vue-drag-drop';
    import {BIconInfoCircle} from 'bootstrap-vue';
    export default {
        name: 'Practice1',
        components: {
            Drag,
            Drop,
            BIconInfoCircle
        },
        props: {

        },
        data() {
            return {
                acids: [],
                salts: [],
                bases: [],
                phPageCounter: 1
            }
        },
        created(){
            this.$store.state.canGoToNextPage = false;
            this.$store.state.canGoToPreviousPage = false;
            
        },
        methods: {
            showAlert() {
            // Use sweetalert2
                this.$swal('Hello Vue world!!!');
            },
            handleDrop(type = null, toList, data) {
                const fromList = data.list;
                let dropable = false
                switch (type){
                    case 'acid':
                        if(data.item < 7){
                            dropable = true
                        }
                        
                    break;
                    case 'salt':

                    break;
                    case 'base':
                        if(data.item > 7){
                            dropable = true
                        }
                    break;
                }
                if (dropable) {
                    toList.push(data.item);
                    fromList.splice(fromList.indexOf(data.item), 1);
                    toList.sort((a, b) => a > b);
                }else{
                    this.showAlert();
                }
                if(this.shuffledArray.length === 0){
                    this.$store.state.canGoToNextPage = true;
                }
            },       
        },
        computed: {
            shuffledArray() {
                return [1.2, 5.4, 13.8, 7.5, 3, 9, 0, 4.3].sort(() => Math.random() - 0.5);
            }
        },
    }
</script>
<style lang="scss">
    body{
        background: url(/bottles.png);
        background-size: contain;
        background-position: left bottom;
        background-color: black;
        overflow: hidden;
        background-repeat: no-repeat;
    }
    .btn.disabled, .btn:disabled{
        opacity: 0.65;
        background: red;
        cursor: not-allowed;
    }
</style>
<style lang="scss">
    @import '../assets/scss/main';
    
    #dropable-row {
        margin-top: 20px;
        h3{
            @include centerFlex;
            color: white;
            font-weight: bold;
            border: 3px solid white;
            font-size: 30px;
            width: 100%;
            height: 50px;
            border-radius: 4px;
        }
        #acid{
            h3{
                background-color: $pink;
            }
            > .list{
                background-color: $pink;
                width: 100%;
                height: 60vh;
            }
        }
        #base{
            h3{
                background-color: $cyan;
            }
            > .list{
                background-color: $cyan;
                width: 100%;
                height: 60vh;
            }
        }
        .list{
            padding: 0 0 20px 20px;
            display: flex;
            flex-wrap: wrap;
            border-radius: 4px;
            align-items: center;
            justify-content: center;
            border: 3px solid white;
        }
        
    }
    .drop{
        &__menu{
            display: flex;
        }
    }
    // PH items
    .drag{
        width: 89px;
        height: 89px;
        border-radius: 5px;
        background-color: $purple;
        color: white;
        @include centerFlex;
        margin-right: 20px;
        margin-top: 20px;
        font-size: 25px;
        font-weight: bold;
        
    }
</style>