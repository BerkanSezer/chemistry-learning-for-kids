<template>
    <div>
        <h1>Etkinlik 1</h1>
        <div class="container">
            <!-- <div v-for="item in phValues" :key="item">
                {{item}}
            </div> -->
            <div class="col-md-12" style="height: 110px;">
                <drop class="drop__menu" @drop="handleDrop(list, ...arguments)">
                    <drag v-for="item in phValues" class="drag" :key="item" :data-value="item"
                        :transfer-data="{ item: item, list: phValues, example: 'lists' }">
                        {{ item }}
                    </drag>
                </drop>
            </div>
            <div class="row" id="dropable-row">
                <div class="col-md-4" id="acid">
                    <h3>Asit</h3>
                    <drop class="drop list" @drop="handleDrop(acids, ...arguments)">
                        <drag v-for="item in acids" class="drag" :key="item" :data-value="item"
                            :transfer-data="{ item: item, list: acids, example: 'lists' }">
                            {{ item }}
                        </drag>
                    </drop>
                </div>
                <div class="col-md-4" id="salt">
                    <h3>Tuz</h3>
                    <drop class="drop list" @drop="handleDrop(salts, ...arguments)">
                        <drag v-for="item in salts" class="drag" :key="item" :data-value="item"
                            :transfer-data="{ item: item, list: salts, example: 'lists' }">
                            {{ item }}
                        </drag>
                    </drop>
                </div>
                <div class="col-md-4" id="base">
                    <h3>Baz</h3>
                    <drop class="drop list" @drop="handleDrop(bases, ...arguments)">
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
    export default {
        name: 'Practice1',
        components: {
            Drag,
            Drop
        },
        props: {

        },
        data() {
            return {
                phValues: [1.2, 5.4, 7, 13.8, 7.5, 3, 9],
                acids: [],
                salts: [],
                bases: [],
                phPageCounter: 1
            }
        },
        created(){
            this.showAlert();
        },
        methods: {
            showAlert() {
            // Use sweetalert2
            this.$swal('Hello Vue world!!!');
            },
            handleDrop(toList, data) {
                const fromList = data.list;
                if (fromList) {
                    toList.push(data.item);
                    fromList.splice(fromList.indexOf(data.item), 1);
                    toList.sort((a, b) => a > b);
                }
            },
        }
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
</style>
<style lang="scss" scoped>
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
        #salt{
            h3{
                background-color: $teal;
            }
            > .list{
                background-color: $teal;
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