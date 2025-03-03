import { defineStore } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import { instance } from '@/const/instance.ts'
import { useLocalStorage, whenever } from '@vueuse/core'
import { shallowReadonly, shallowRef } from 'vue'
import type { Photo } from '@/dto/photo.ts'

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

  const photos = shallowRef<Photo []>([])
  whenever(data, () => photos.value = data.value )

  function search(inputIds: string[]): void {
    ids.value = inputIds
    refetch()
  }

  return {
    ids: shallowReadonly(ids),
    photos: shallowReadonly(photos),
    loading: shallowReadonly(isFetching),

    search,
  }
})
