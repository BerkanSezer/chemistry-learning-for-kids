<template>
    <div class="container __practice2">
        <header>
            <h1>Etkinlik 2</h1>
            <span class="info">
                <BIconInfoCircle />
                Bu etkinlikte şişedeki maddenin diğer maddelerle tepkimesine göre ne oldugunu bulmaya çalısaksın.
            </span>
        </header>
        <div class="row">
            <!-- <div v-for="item in phValues" :key="item">
                {{item}}
            </div> -->
            <div class="col-md-12" style="padding: 0;">
                <drop class="drop__menu" @drop="handleDrop('inventory', list, ...arguments)">
                    <drag class="drag" :data-value="phIndex"
                        :transfer-data="{ item: phValues[phIndex], list: phValues, example: 'lists' }">
                        <div class="bottle"></div>
                        <span style="font-size: 12px;">{{ phValues[phIndex].name }}</span>
                    </drag>
                </drop>
            </div>
            <div class="col-md-12" id="dropable-row">
                    <div class="circle"></div>
                    <div class="circle"></div>
                <!-- <div class="col-md-6" id="acid">
                    <h3>Asit</h3>
                    <drop class="drop list" @drop="handleDrop('acid', acids, ...arguments)">
                        <drag v-for="item in acids" class="drag" :key="item" :data-value="item"
                            :transfer-data="{ item: item, list: acids, example: 'lists' }">
                            {{ item }}
                        </drag>
                    </drop>
                </div>
                <div class="col-md-6" id="base">
                    <h3>Baz</h3>
                    <drop class="drop list" @drop="handleDrop('base', bases, ...arguments)">
                        <drag v-for="item in bases" class="drag" :key="item" :data-value="item"
                            :transfer-data="{ item: item, list: bases, example: 'lists' }">
                            {{ item }}
                        </drag>
                    </drop>
                </div> -->
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
        name: 'Practice2',
        components: {
            Drag,
            Drop,
        },
        data() {
            return {
                phValues: [{
                        name: "PotasyumHG",
                        value: 1.2
                    },
                    {
                        name: "PotasyumHG",
                        value: 5.4
                    },
                    {
                        name: "PotasyumHG",
                        value: 7
                    },
                    {
                        name: "PotasyumHG",
                        value: 13.8
                    },
                    {
                        name: "PotasyumHG",
                        value: 7.5
                    },
                    {
                        name: "PotasyumHG",
                        value: 3
                    },
                    {
                        name: "PotasyumHG",
                        value: 9
                    },
                    {
                        name: "PotasyumHG",
                        value: 0
                    },
                    {
                        name: "PotasyumHG",
                        value: 4.3
                    },
                ],
                phIndex: 0
            }
        },
    }
</script>
<style lang="scss">
    // body {
    //     background: none;
    //     background-color: black;
    // }
    .__practice2{
        .bottle {
        background-image: url("/bottle.webp");
        background-size: cover;
        width: 60px;
        height: 60px;
        }
        .drag{
                flex-direction: column;
                background-color: transparent;
            }
    }
    #dropable-row{
        display: flex;
        justify-content: space-evenly;
        .circle{
            width: 200px;
            height: 200px;
            background-color: var(--blue);
            border-radius: 50%;
        }
    }
</style>