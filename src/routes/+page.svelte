<script lang="ts">
	import MenuBar from '$lib/components/menu_bar/MenuBar.svelte';
	import ControlStrip from '$lib/components/control_strip/ControlStrip.svelte';
	import Welcome from '$lib/components/pages/Welcome.svelte';
	import DesktopIcon from '$lib/components/desktop_icon/DesktopIcon.svelte';
</script>

<MenuBar />

<Welcome />

<DesktopIcon
	icon_name="itunes"
	label="iTunes"
	onOpen={() => {
		alert('OPENING ITUNES');
	}}
/>
<DesktopIcon icon_name="scrapbook" label="Scrapbook" />
<DesktopIcon icon_name="internet_explorer" label="Internet" />

<ControlStrip />
