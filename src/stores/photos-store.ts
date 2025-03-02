import { defineStore } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import { instance } from '@/const/instance.ts'
import { useLocalStorage } from '@vueuse/core'
import { shallowReadonly } from 'vue'

export const usePhotosStore = defineStore('photos-store', () => {
  const ids = useLocalStorage<string[]>('photo-store:ids', [])

  const { data, refetch, isFetching } = useQuery({
    queryKey: ['albums', ids],
    queryFn: () => instance.request( {
      method: 'GET',
      url: '',
      params: {albumId: ids.value},
      paramsSerializer: { indexes: null }
    }),
    select: ({ data }) => data
  })

  function search(inputIds: string[]): void {
    ids.value = inputIds
    refetch()
  }

  return {
    data: shallowReadonly(data),
    loading: shallowReadonly(isFetching),

    search,
  }
})
