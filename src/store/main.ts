import { acceptHMRUpdate, defineStore } from 'pinia'

export const useMainStore = defineStore('user', () => {
  const templateName = ref('Mango Boilerplate')
  
  return {
    templateName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
