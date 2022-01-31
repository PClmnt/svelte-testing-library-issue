<script>
	import {  Button } from 'carbon-components-svelte'

	let loggedIn = 'yes'
	
	function changeState() {
		loggedIn = 'no'
  	}

</script>
<section>
	<div>
	  {#if loggedIn === 'yes'}
		<Button  as on:click={() => changeState()} kind="secondary">
		  <span>test</span>
		</Button>
	  {:else if loggedIn === 'no'}
	  <div>example text</div>
	  {/if}
	</div>
  </section>