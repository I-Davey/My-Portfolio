// titleStore.js
import { writable } from 'svelte/store';

export const title = writable('Default Title');



export function setTitle(newTitle) {
    title.set(newTitle);
    //also set the document title
    //if document is available
    if (typeof document !== 'undefined')
    {
        document.title = newTitle;
    }
}
