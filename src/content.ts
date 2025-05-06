chrome.runtime.onMessage.addListener((msg: any) => {
    if (msg.type === 'CHANGE_SELECT') {
        const select = document.querySelector('#cars') as HTMLSelectElement | null
        if (select) {
            select.value = msg.value
            select.dispatchEvent(new Event('change'))
        }
    }
})
