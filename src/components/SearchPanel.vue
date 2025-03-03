<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { usePhotosStore } from '@/stores/photos-store.ts'
import { computed, onMounted, ref } from 'vue'

const store = usePhotosStore()

const idsValue = ref<string>('')
onMounted(() => idsValue.value = store.ids.join(' '))

function search() {
  const ids = computed<string[]>(() => idsValue.value.split(' ').filter(id => id.length))
  store.search(ids.value)
}
</script>

<template>
  <div class="flex gap-[20px] items-center">
    <Input v-model="idsValue" type="text" placeholder="Введите ID альбома через пробел (например '1 2 3')" />
    <Button variant="outline" :disabled="store.loading" @click="search()">
      <Loader2 v-if="store.loading" class="w-4 h-4 mr-2 animate-spin" />
      Поиск
    </Button>
  </div>
</template>
