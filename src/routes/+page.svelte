<script lang="ts">
	import MenuBar from '$lib/components/menu_bar/MenuBar.svelte';
	import ControlStrip from '$lib/components/control_strip/ControlStrip.svelte';
	import Welcome from '$lib/components/pages/Welcome.svelte';
	import DesktopIcon from '$lib/components/desktop_icon/DesktopIcon.svelte';
	import { openApp } from '$lib/stores/apps.store';
</script>

<MenuBar />

<Welcome defaultOpen={false} />

<DesktopIcon icon_name="internet_browse" label="Welcome!" onOpen={() => openApp('Welcome!')} />

<ControlStrip />
