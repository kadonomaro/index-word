<template>
	<canvas ref="canvas" id="canvas"></canvas>
</template>

<script>
import { words } from './words';

export default {
	name: 'AppCanvas',
	data() {
		return {
			context: ''
		}
	},
	mounted() {
		this.initialSettings();
		this.drawText({
			font: 'bold 16px Roboto',
			colors: ['#9b9b9b','#828282', '#696969', '#505050'],
			words: this.shuffle(words),
			delay: window.innerWidth <= 767 ? 500 : 10
		})
	},
	methods: {
		initialSettings() {
			this.context = this.$refs.canvas.getContext('2d')
			this.$refs.canvas.width = document.body.clientWidth;
			this.$refs.canvas.height = 450;
		},

		drawText({font, colors, words, delay}) {
			this.context.font = font;
			const HEIGHT = 15;
			let counter = 0;
			const positions = [];


			const interval = setInterval(() => {
					const position = {
							x: Math.ceil(this.getRandomRange(0, this.$refs.canvas.width) / getTextWidth(words[counter])) * getTextWidth(words[counter]),
							y: Math.ceil(this.getRandomRange(0, this.$refs.canvas.height) / HEIGHT) * HEIGHT,
					};

					if (!positions.some(pos => pos.x === position.x && pos.y === position.y)) {
							this.context.fillStyle = colors[this.getRandomRange(0, colors.length - 1)];
							this.context.fillText(words[counter], position.x, position.y);
							counter++;
					}
					positions.push(position);

					if (counter >= words.length) {
							clearInterval(interval);
					}
			}, delay);

			const getTextWidth = (text) => {
				return this.context.measureText(text).width;
			}
		},

		getRandomRange(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},

		shuffle(array) {
			for (let i = array.length - 1; i > 0; i--) {
					let j = Math.floor(Math.random() * (i + 1));
					[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

	}
}
</script>
