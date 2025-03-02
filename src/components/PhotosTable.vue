<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { FlexRender, getCoreRowModel, getSortedRowModel, useVueTable } from '@tanstack/vue-table'
import { usePhotosStore } from '@/stores/photos-store.ts'
import { ref, shallowRef } from 'vue'
import { useIntersectionObserver, whenever } from '@vueuse/core'
import { columns } from '@/const/columns.ts'
import { valueUpdater } from '@/lib/utils.ts'

const store = usePhotosStore()

const rootRef = shallowRef<HTMLElement>()
whenever(() => store.data, () => rootRef.value?.scrollTo({ top: 0 }))

const lastRow = ref(20)
whenever(() => store.data, () => lastRow.value = 20)
const lastRowRef = shallowRef<HTMLElement>()
function onGetRef(el: HTMLElement, index: number) {
  if (index === lastRow.value - 5) {
    lastRowRef.value = el
  }
}
useIntersectionObserver(lastRowRef, ([entry]) => {
  if (entry.isIntersecting) {
    lastRow.value += 10
  }
})

const sorting = ref([])
const table = useVueTable({
  get data() {
    if (store.loading)
      return Array.from({ length: 20 }, () => ({}))

    return (store.data ?? []).slice(0, lastRow.value)
  },
  get columns() {
    return columns
  },
  state: {
    get sorting() {
      return sorting.value
    },
  },
  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
})
</script>

<template>
  <div ref="rootRef" class="border rounded-md h-[600px] w-[600px] overflow-auto">

    <Table>
      <TableHeader class="sticky top-0 bg-white z-10">
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id" class="px-1">
            <FlexRender
              class="px-2 w-full justify-between"
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow v-for="(row, i) in table.getRowModel().rows" :key="row.id" :ref="(el) => onGetRef(el, i)">
          <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
            <Skeleton v-if="store.loading" class="w-full h-5 rounded-full" />
            <TooltipProvider v-else>
              <Tooltip>
                <TooltipTrigger class="size-full">
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </TooltipTrigger>

                <TooltipContent v-if="cell.getContext().getValue()!.toString().length > 10">
                  {{ cell.getContext().getValue() }}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
