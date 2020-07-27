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
			cell: {
				width: 20,
				height: 20
			},
			colors: ['#9b9b9b','#828282', '#696969', '#505050'],
			words: this.shuffle(words),
			delay: window.innerWidth <= 767 ? 500 : 1000
		})
	},
	methods: {
		initialSettings() {
			this.context = this.$refs.canvas.getContext('2d')
			this.$refs.canvas.width = document.body.clientWidth;
			this.$refs.canvas.height = 450;
		},

		drawText({font, colors, cell= {width: 1, height: 1}, words, delay}) {
			const maxCount = words.length;
			let counter = 0;
			const positions = [];

			this.context.font = font;

			const interval = setInterval(() => {
					const position = {
							x: Math.ceil(this.getRandomRange(0, this.$refs.canvas.width) / cell.width) * cell.width,
							y: Math.ceil(this.getRandomRange(0, this.$refs.canvas.height) / cell.height) * cell.height,
							width: words[counter].length
					};

					if (!positions.some(pos => pos.x === position.x && pos.y === position.y)) {
							this.context.fillStyle = colors[this.getRandomRange(0, colors.length - 1)];
							this.context.fillText(words[counter], position.x, position.y);
							counter++;
					}
					positions.push(position);

					if (counter >= maxCount) {
							clearInterval(interval);
					}
			}, delay);
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
