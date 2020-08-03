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
		this.drawRects();
	},
	methods: {
		initialSettings() {
			this.context = this.$refs.canvas.getContext('2d')
			this.$refs.canvas.width = document.body.clientWidth;
			this.$refs.canvas.height = 450;
		},

		drawRects() {
			const WIDTH = 50;
			const HEIGHT = WIDTH;
			const X_LIMIT = this.$refs.canvas.width / WIDTH;
			const Y_LIMIT = this.$refs.canvas.height / HEIGHT;

			for (let x = 0; x < X_LIMIT; x++) {
				for (let y = 0; y < Y_LIMIT; y++) {
					this.context.rect(x * WIDTH, y * HEIGHT, WIDTH * this.getRandomRange(0.5, 1.5), HEIGHT * this.getRandomRange(0.5, 1.5));
				}
			}

			this.context.strokeStyle = '#101010';
			this.context.lineWidth = 5;
			this.context.stroke();
			this.context.fillStyle = '#303030';
			this.context.fill();
		},

		getRandomRange(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
}
</script>
