
<template>
  <router-view/>
</template>

<script setup>
import {database} from './supabase.js'
import { onMounted } from 'vue'

async function getNannies(){

  try {
    const {data} = await database
.from('nannies')
.select('*')

localStorage.setItem('@nannies', JSON.stringify(data))
//console.log('nannies, ', data)
  } catch (error) {
    console.log(error)
  }

}

onMounted(() => {
  getNannies()
})

</script>
