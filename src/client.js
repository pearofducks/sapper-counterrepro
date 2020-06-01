import * as sapper from '@sapper/app';
import { setup } from 'svelte-match-media'

setup()

sapper.start({
	target: document.querySelector('#sapper')
});
