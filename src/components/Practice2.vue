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
            <div class="col-md-12" style="padding: 0;">
                <drop class="drop__menu" @drop="handleDrop(list, ...arguments)" drop-effect="copy">
                    <drag class="drag" :data-value="shuffledItems" v-for="(item, index) in shuffledItems" :key="index"
                        :transfer-data="{ item: item, list: shuffledItems, example: 'lists' }" drop-effect="copy">
                        <BIconCheck2Circle class="check-icon" :id="item.name"/>
                        <img src="/bottle.webp" alt="Chemical Icon" width="100">
                        <span style="font-size: 12px;">{{item.name}}</span>
                        <span>{{item.formula}}</span>
                        
                    </drag>
                </drop>
            </div>
            <div class="col-md-12" id="dropable-row">
                <drop class="drop list" @drop="handleDrop(solved, ...arguments)" drop-effect="copy"
                    @dragenter="waveHandler(true)" @dragleave="waveHandler(false)">
                    <img src="/hand.png" alt="Hand Icon" width="300" id="hand">
                </drop>
            </div>

        </div>

    </div>
</template>
<script>
    import {
        Drag,
        Drop
    } from 'vue-drag-drop';
    import {BIconCheck2Circle} from 'bootstrap-vue';
    export default {
        name: 'Practice2',
        components: {
            Drag,
            Drop,
            BIconCheck2Circle
        },
        data() {
            return {
                solved: [],
                items: [{
                        name: "Hidroklorikasit",
                        formula: "(HCL)",
                        type: "acit",
                        action: "Temas Halinde Deriyi Yakar",
                    },
                    {
                        name: "Nitrikrasit",
                        formula: "(HNO₃)",
                        type: "acit",
                        action: "Temas Halinde Deriyi Yakar",
                    },
                    {
                        name: "Sülfürikasit",
                        formula: "(H₂SO₄)",
                        type: "acit",
                        action: "Temas Halinde Deriyi Yakar",
                    },
                    {
                        name: "Sodyumhidroksit",
                        formula: "(NaOH)",
                        type: "base",
                        action: "Temas Halinde Kaşındırır",
                    },
                    {
                        name: "Amonyak",
                        formula: "(NH₃)",
                        type: "base",
                        action: "Temas Halinde Zehirler",
                    },
                    {
                        name: "Sodyumkarbonat",
                        formula: "(Na₂CO₃)",
                        type: "base",
                        action: "Temas Halinde Tahriş Eder",
                    },
                ]
            }
        },
        methods: {
            waveHandler(state) {
                if (state) {
                    event.target.classList.add('wave');
                } else {
                    event.target.classList.remove('wave');
                }

            },
            async handleDrop(toList, data) {
                const isSuccess = await this.showAlert(data.item)
                if (isSuccess) {
                    toList.push(data.item);
                    console.log(data);
                    document.querySelector(`#${data.item.name}`).style.display = 'block'
                    // this.items.splice(this.items.indexOf(data.item), 1);
                    
                    toList.sort((a, b) => a > b);
                } else {
                    document.querySelector("#hand").classList.remove('wave');
                }

            },
            async showAlert(item) {
                return this.$swal({
                    position: 'center',
                    toast: false,
                    timer: false,
                    customClass: {
                        confirmButton: 'btn btn-acit',
                        cancelButton: 'btn btn-base'
                    },
                    title: `${item.name} ${item.formula} maddesi ${item.action}`,
                    text: "Sence Bu nedir?",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Asit',
                    cancelButtonText: 'Baz',
                }).then(async res => {
                    const type = res.value ? 'acit' : res.dismiss === 'cancel' ? 'base' : null;

                    if (type === null) return false;
                    if (type === item.type) {
                        this.$swal({
                            toast: false,
                            position: 'center',
                            icon: 'success',
                            title: 'Tebrikler! Doğru Cevap',
                            showConfirmButton: false,
                            timer: 1200
                        })
                        document.querySelector("#hand").classList.remove('wave');
                        return true
                    }
                    document.querySelector("#hand").classList.remove('wave');
                    this.$swal({
                        toast: false,
                        position: 'center',
                        icon: 'warning',
                        title: 'I Ihh! Yanlış Cevap. Yeniden Kontol Et',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    return false


                });
            }
        },
        computed: {
            shuffledItems() {
                return this.items
            }
        }
    }
</script>
<style lang="scss">
    @import "@/assets/scss/main";

    .swal2-actions {
        .btn {
            width: calc(50% - 15px);
        }

        .btn-acit {
            background: $pink !important;
            outline: none !important;
            border: none !important;
        }

        .btn-base {
            background: $cyan !important;
            outline: none !important;
            border: none !important;
        }

    }

    .__practice2 {
        .bottle {
            background-image: url("/bottle.webp");
            background-size: cover;
            width: 60px;
            height: 60px;
        }

        .drag {
            flex-direction: column;
            background-color: transparent;
            margin: 20px 25px;
        }

        .drop__menu {
            justify-content: space-between;
            height: 200px;
            margin-top: 30px;
        }
        .check-icon{
            display: none;
            position: absolute;
            font-size: 90px;
            color: var(--green),
        }
    }

    #dropable-row {
        display: flex;
        justify-content: space-evenly;

        >.drop {
            border: none;
            padding: 0;
        }

        .circle {
            width: 200px;
            height: 200px;
            background-color: var(--blue);
            border-radius: 50%;
        }

        #hand {
            &.wave {
                // padding: 20px;
                // position: absolute;
                // top: 50%;
                // left: 50%;
                // margin: -70px 0 0 -70px;
                -webkit-transform: rotate(-10deg);
                -moz-transform: rotate(-10deg);
                -o-transform: rotate(-10deg);
                -ms-transform: rotate(-10deg);
                transform: rotate(-20deg);
                -webkit-animation: wink 0.5s alternate infinite;
                -moz-animation: wink 0.5s alternate infinite;
                -o-animation: wink 0.5s alternate infinite;
                animation: wink 0.5s alternate infinite;
                -webkit-transform-origin: 50% 100%;
                -moz-transform-origin: 50% 100%;
                -o-transform-origin: 50% 100%;
                -ms-transform-origin: 50% 100%;
                transform-origin: 50% 100%;
                -webkit-animation-timing-function: ease;
                animation-timing-function: ease;
            }

        }
    }

    /* Chrome, Safari, Opera */
    @-webkit-keyframes wink {
        0% {
            -webkit-transform: rotate(-10deg);
            -moz-transform: rotate(-10deg);
            -o-transform: rotate(-10deg);
            -ms-transform: rotate(-10deg);
            transform: rotate(-10deg);
        }

        100% {
            -webkit-transform: rotate(20deg);
            -moz-transform: rotate(10deg);
            -o-transform: rotate(10deg);
            -ms-transform: rotate(10deg);
            transform: rotate(10deg);
        }
    }

    /* Standard syntax */
    @keyframes wink {
        0% {
            -webkit-transform: rotate(-10deg);
            -moz-transform: rotate(-10deg);
            -o-transform: rotate(-10deg);
            -ms-transform: rotate(-10deg);
            transform: rotate(-10deg);
        }

        100% {
            -webkit-transform: rotate(20deg);
            -moz-transform: rotate(10deg);
            -o-transform: rotate(10deg);
            -ms-transform: rotate(10deg);
            transform: rotate(10deg);
        }
    }
</style>