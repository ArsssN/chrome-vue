<template>
  <select v-model="selected" @change="onChange">
    <option value="volvo">Volvo</option>
    <option value="volvo">Volvo 2</option>
    <option value="volvo">Volvo 3</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selected = ref('volvo')

const onChange = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: 'CHANGE_SELECT',
        value: selected.value
      })
    }
  })
}
</script>
