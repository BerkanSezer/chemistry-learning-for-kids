<template>
    <div>
        <div v-for="(list, i) in lists" :key="i">
			<drop class="drop list" @drop="handleDrop(list, ...arguments)">
				<drag v-for="item in list"
					class="drag"
					:key="item"
					:class="{ [item]: true }"
					:transfer-data="{ item: item, list: list, example: 'lists' }">
						{{ item }}
				</drag>
			</drop>
		</div>
    </div>
</template>
<script>
    import { Drag, Drop } from 'vue-drag-drop';
    export default {
        components: { Drag, Drop },
        data() {
            return {
                lists: [
                    ['A', 'B', 'C'],
                    ['D', 'E', 'F'],
                ],
            };
        },
        methods: {
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
<style lang="scss" scoped>
	.drag {
		display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        color: red;
        
	}
	.drag.A { background: #aaa; }
	.drag.B { background: #888; }
	.drag.C { background: #666; }
	.drag.D { background: #444; }
	.drag.E { background: #222; }
	.drag.F { background: #000; }
	.drop {
		display: flex;
        flex-direction: row;
		vertical-align: top;
		padding: 15px;
		margin-bottom: 20px;
		width: auto;
		height: auto;
        align-items: center;
	}
</style>