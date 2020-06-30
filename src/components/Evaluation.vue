<template>
    <div class="container" id="evaluation">
        <header>
            <h1>Değerlendirme</h1>
            <!-- <span class="info">
                <BIconInfoCircle />
                Bu etkinlikte aşağıdaki pH değerkerini uygun maddelere göre yerleştiriniz.
            </span> -->
        </header>
        <div>

            <section class="container">


                <div class="questionBox" id="app">


                    <transition :duration="{ enter: 500, leave: 300 }" enter-active-class="animated zoomIn"
                        leave-active-class="animated zoomOut" mode="out-in">


                        <div class="questionContainer" v-if="questionIndex<questions.length" v-bind:key="questionIndex">

                            <header>
                                <div class="progressContainer">
                                    <progress class="progress is-info is-small"
                                        :value="(questionIndex/questions.length)*100"
                                        max="100">{{(questionIndex/questions.length)*100}}%</progress>
                                    <p>{{(questionIndex/questions.length)*100}}% tamamlandı</p>
                                </div>
                            </header>
                            <h3 class="titleContainer title">{{ questions[questionIndex].text }}</h3>
                            <div class="optionContainer">
                                <div class="option" v-for="(response, index) in questions[questionIndex].responses"
                                    @click="selectOption(index)"
                                    :class="{ 'is-selected': userResponses[questionIndex] == index}" :key="index">
                                    {{ index | charIndex }}. {{ response.text }}
                                </div>
                            </div>
                            <footer class="questionFooter">
                                <nav class="pagination" role="navigation" aria-label="pagination">
                                    <button class="button" v-on:click="prev();" :disabled="questionIndex < 1">
                                        Geri
                                    </button>
                                    <button class="button"
                                        :class="(userResponses[questionIndex]==null)?'disabled':'is-active'"
                                        v-on:click="next();" :disabled="questionIndex>=questions.length">İleri
                                    </button>
                                </nav>
                            </footer>
                        </div>
                        <div v-if="questionIndex >= questions.length" v-bind:key="questionIndex"
                            class="quizCompleted has-text-centered">
                            <span class="icon">
                                <i class="fa" :class="score()>3?'fa-check-circle-o is-active':'fa-times-circle'"></i>
                            </span>
                            <h2 class="title">
                                {{getScoreMessage()}}
                            </h2>
                            <p class="subtitle">
                                Sonuç: {{ score() }} / {{ questions.length }}
                            </p>
                            <br>
                            <a class="button" @click="restart()">Yeniden Dene <i class="fa fa-refresh"></i></a>
                        </div>
                    </transition>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Evaluation',

        data() {
            return {
                questions: [{
                        text: "Aşağıdakilerden hangisi asitlerin genel özelliklerinden değildir ?",
                        responses: [{
                                text: "Sulu çözeltilerinde H+ iyonu verir."
                            },
                            {
                                text: "pH değerleri 7'den büyüktür.",
                                correct: true
                            },
                            {
                                text: "Mavi turnusol kağıdını kırmızıya çevirirler."
                            },
                            {
                                text: "Tatları ekşidir."
                            }
                        ]
                    },
                    {
                        text: "Aşağıdakilerden Hangisi bazların genel özelliklerinden değildir ?",
                        responses: [{
                                text: "Mavi turnusol kağıdını kırmızıya çevirirler.",
                                correct: true
                            },
                            {
                                text: "pH değerleri 7'den büyüktür."
                            },
                            {
                                text: "Sulu çözeltilerinde OH iyonu verir."
                            },
                            {
                                text: "Tatları acıdır."
                            }
                        ]
                    },
                    {
                        text: "Aşağıdaki şıklarda günlük hayatımızda kullandığımız ürünler ve içerdikleri asitler yanlış verilmiştir ?",
                        responses: [{
                                text: "Limon --> Asetik Asit"
                            },
                            {
                                text: "Elma --> Nitrik Asit",
                                correct: true
                            },
                            {
                                text: "Yoğurt --> Laktik Asit"
                            },
                            {
                                text: "Çilek --> Folik Asit"
                            }
                        ]
                    },
                    {
                        text: "Aşağıdakilerden Hangisi Kuvvetli Asittir ?",
                        responses: [{
                                text: "HCl",
                                correct: true
                            },
                            {
                                text: "H3PO4"
                            },
                            {
                                text: "NaOH"
                            },
                            {
                                text: "H2CO3"
                            }
                        ]
                    },
                    {
                        text: "Aşağıdakilerden hangisi Tuz ruhu olarak da bilinen Hidroklorür Asit (HCl)'in genel özelliklerindendir ??",
                        responses: [{
                                text: "Dinamit yapımında kullanılır."
                            },
                            {
                                text: "Su ile tepkimesinde OH- iyonu verir."
                            },
                            {
                                text: "Kuvvetli bir asittir.",
                                correct: true
                            },
                            {
                                text: "pH değeri 7'den büyüktür."
                            }
                        ]
                    },
                    {
                        text: "Aşağıdakilerden hangisi Asit yağmurlarının özelliklerinden biri değildir ?",
                        responses: [{
                                text: "Ormanlara zarar verir."
                            },
                            {
                                text: "Toprağın verimliliğini düşürür."
                            },
                            {
                                text: "pH değeri 10'a kadar çıkabilir.",
                                correct: true
                            },
                            {
                                text: "Tarihi eserlere zarar verir."
                            }
                        ]
                    },
                    {
                        text: "Aşağıdakilerden hangisi asit yağmurlarına karşı alınabilecek önlemlerden biri değildir ? ",
                        responses: [{
                                text: "Ormanları ve yeşil alanları arttırmalıyız."
                            },
                            {
                                text: "Sanayi tesislerinin bacalarına filtre takılmalıdır. "
                            },
                            {
                                text: "Yenilenebilir enerji kaynaklarını kullanmalıyız."
                            },
                            {
                                text: "Toplu taşıma yerine özel araçlarımızı kullanmalıyız.",
                                correct: true
                            }
                        ]
                    },
                    {
                        text: "Aşağıdakilerden hangisinde Asit ve Bazların isimleriyle formülleri doğru verilmiştir ?",
                        responses: [{
                                text: "Kalsiyum Hidroksit --> NaOH"
                            },
                            {
                                text: "Hidroklorik Asit --> HCl",
                                correct: true
                            },
                            {
                                text: "Potasyum Hidroksit --> KHO3"
                            },
                            {
                                text: "Sodyum Hidroksit --> NaO2"
                            }
                        ]
                    },

                    {
                        text: "Aşağıdaki ifadelerden hangisi doğrudur ?",
                        responses: [{
                                text: "Bazların tatları ekşidir."
                            },
                            {
                                text: "Asitleri metal kaplarda saklayamayız.",
                                correct: true
                            },
                            {
                                text: "pH değeri 7'den büyük olan maddelere asit denir."
                            },
                            {
                                text: "Asitler kırmızı turnusol kağdını maviye çevirir."
                            }
                        ]
                    },
                    {
                        text: "Aşağıdaki ifadelerden hangisi yanlıştır ?",
                        responses: [{
                                text: "Asitler su ile tepkimelerinde H+ iyonu verir."
                            },
                            {
                                text: "HCl zayıf bir asittir..",
                                correct: true
                            },
                            {
                                text: "pH değeri 7'den büyük olan maddelere baz denir."
                            },
                            {
                                text: "pH değeri 12'den büyük olan bazlara kuvvetli bazlar denir.."
                            }
                        ]
                    }
                ],

                questionIndex: 0,
                userResponses: Array(10).fill(null),
                isActive: false
            }
        },
        methods: {
            restart: function () {
                this.questionIndex = 0;
                this.userResponses = Array(this.questions.length).fill(null);
            },
            selectOption: function (index) {
                this.$set(this.userResponses, this.questionIndex, index);
                //console.log(this.userResponses);
            },
            next() {
                if (this.userResponses[this.questionIndex] === null) {
                    this.$swal('Soruyu boş geçemezsin. Lütfen Bir cevap seç');
                    return;
                }
                
                console.log(this.userResponses);
                if (this.questionIndex < this.questions.length)
                    this.questionIndex++;
            },

            prev: function () {
                if (this.questions.length > 0 && this.questionIndex > 0) this.questionIndex--;
            },
            // Return "true" count in userResponses
            score: function () {
                var score = 0;
                for (let i = 0; i < this.userResponses.length; i++) {
                    if (
                        typeof this.questions[i].responses[
                            this.userResponses[i]
                        ] !== "undefined" &&
                        this.questions[i].responses[this.userResponses[i]].correct
                    ) {
                        score = score + 1;
                    }
                }
                return score;
            },
            getScoreMessage() {
                if (this.score() == 10) {
                    return "Vay canına! Sen resmen bir kimyacısın. Asitler ve bazlar senden sorulur."
                } else if (this.score() > 7) {
                    return "Muhteşem bir iş çıkattın!"
                } else if (this.score() > 5) {
                    return "Kötü değil ama biraz daha çalışman lazım!"
                } else {
                    return "Dersi yeniden tekrar etmeye ne dersin? Bence daha iyisini yapabiliriz"
                }
            }
        },
        filters: {
            charIndex: function (i) {
                return String.fromCharCode(97 + i);
            }
        },
        created() {
            console.log(this);

        }
    }
</script>
<style lang="scss" scoped>
    .container#evaluation {
        $trans_duration: 0.3s;
        $primary_color: #3D5AFE;
        // color: black;
        @import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
        @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

        body {
            font-family: "Open Sans", sans-serif;
            font-size: 14px;
            height: 100vh;
            background: #CFD8DC;
            cursor: default !important;
            user-select: none;
            user-drag: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .button {
            transition: $trans_duration;
        }

        .title,
        .subtitle {
            font-family: Montserrat, sans-serif;
            font-weight: normal;
        }

        .subtitle {
            margin-top: 20px;
        }

        .animated {
            transition-duration: $trans_duration/2;
        }

        .container {
            margin: 0 0.5rem;
        }

        .questionBox {
            user-select: none;
            margin-top: 20px;
            border: 3px solid white;
            // max-width: 30rem;
            // width: 30rem;
            min-height: 40rem;

            background: #023c4c;
            position: relative;
            display: flex;

            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

            header {
                background: rgba(0, 0, 0, 0.025);
                padding: 1.5rem;
                text-align: center;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);

                h1 {
                    font-weight: bold;
                    margin-bottom: 1rem !important;
                }

                .progressContainer {
                    margin: 0 auto;

                    >progress {
                        width: 100%;
                        margin: 0;
                        border-radius: 5rem;
                        overflow: hidden;
                        border: none;

                        color: $primary_color;

                        &::-moz-progress-bar {
                            background: $primary_color;
                        }

                        &::-webkit-progress-value {
                            background: $primary_color;
                        }
                    }

                    >p {
                        margin: 0;
                        margin-top: 0.5rem;
                    }
                }
            }

            .titleContainer {
                font-weight: bold;
                text-align: center;
                margin: 0 auto;
                padding: 1.5rem;

            }

            .quizForm {
                display: block;
                white-space: normal;

                height: 100%;
                width: 100%;

                .quizFormContainer {
                    height: 100%;
                    margin: 15px 18px;

                    .field-label {
                        text-align: left;
                        margin-bottom: 0.5rem;
                    }
                }
            }

            .quizCompleted {
                width: 100%;
                padding: 1rem;
                text-align: center;

                >.icon {
                    color: #FF5252;
                    font-size: 5rem;

                    .is-active {
                        color: #00E676;
                    }
                }
            }

            .questionContainer {
                white-space: normal;

                height: 100%;
                width: 100%;

                .optionContainer {
                    margin-top: 12px;
                    flex-grow: 1;

                    .option {
                        font-size: 20px;
                        text-align: left;
                        border-radius: 290486px;
                        padding: 15px 18px;
                        margin: 0 18px;
                        margin-bottom: 20px;
                        transition: $trans_duration;
                        cursor: pointer;
                        background-color: rgba(0, 0, 0, 0.05);
                        color: white;
                        border: white 1px solid;

                        &.is-selected {
                            border-color: var(--info);
                            background-color: var(--info);
                        }

                        &:hover {
                            background-color: rgba(255, 193, 7, 0.73);
                        }

                        &:active {
                            transform: scaleX(0.9);
                        }
                    }
                }

                .questionFooter {
                    background: rgba(0, 0, 0, 0.025);
                    border-top: 1px solid rgba(0, 0, 0, 0.1);
                    width: 100%;
                    align-self: flex-end;

                    .pagination {
                        //padding: 10px 15px;
                        margin: 15px 25px;

                        button.button {
                            outline:none;
                            background-color: var(--green);
                            border: 1px solid transparent;
                            color: white;
                            &:hover {
                                border-color: white;
                                background-color: #0a9028;
                            }
                            &.disabled {
                                background: red;
                            }
                        }
                    }
                }
            }
        }

        .pagination {
            display: flex;
            justify-content: space-between;
        }

        .button {
            padding: 0.5rem 1rem;
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 5rem;
            margin: 0 0.25rem;

            transition: 0.3s;

            &:hover {
                cursor: pointer;
                // background: #ECEFF1;
                background-color: #0a9028;
                border-color: rgba(0, 0, 0, 0.25);
            }

            &.is-active {
                background: $primary_color;
                color: white;
                border-color: transparent;

                &:hover {
                    background: darken($primary_color, 10%);

                }
            }
        }

        @media screen and (min-width: 769px) {
            .questionBox {
                align-items: center;
                justify-content: center;

                .questionContainer {
                    display: flex;
                    flex-direction: column;
                }
            }
        }

        @media screen and (max-width: 768px) {
            .sidebar {
                height: auto !important;
                border-radius: 6px 6px 0px 0px;
            }
        }

    }
</style>