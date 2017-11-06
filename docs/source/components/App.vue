<template>
	<div id="example">
		<h1>vue-fingerprints demo</h1>
		<a href="https://github.com/Normally/vue-fingerprints">https://github.com/Normally/vue-fingerprints</a>
		<fingerprints></fingerprints>
	</div>
</template>

<script>
	import Fingerprints from '../../../index.js';

	export default {
		components:{
			Fingerprints
		}
	}

</script>

<style>
	#example{
		padding:20px;
		font-family: sans-serif;
	}
</style>