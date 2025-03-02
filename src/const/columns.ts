import type { ColumnDef } from '@tanstack/vue-table'
import type { Photo } from '@/dto/photo.ts'
import { h } from 'vue'
import { Button } from '@/components/ui/button'
import { ArrowUpDown } from 'lucide-vue-next'

export const columns: ColumnDef<Photo>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [h('div', { class: 'text-center' }, 'ИД'), h(ArrowUpDown, { class: '' })])
    },
    cell: ({ row }) => h('div', { class: 'text-center' }, row.getValue('id')),
  },
  {
    accessorKey: 'albumId',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [h('div', { class: '' }, 'Альбом'), h(ArrowUpDown, { class: '' })])
    },
    cell: ({ row }) => h('div', { class: 'text-center' }, row.getValue('albumId')),
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [h('div', { class: 'text-center' }, 'Название'), h(ArrowUpDown, { class: '' })])
    },
    cell: ({ row }) => h('div', { class: 'capitalize truncate max-w-[125px]' }, row.getValue('title')),
  },
  {
    accessorKey: 'url',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [h('div', { class: 'text-center' }, 'Ссылка'), h(ArrowUpDown, { class: '' })])
    },
    cell: ({ row }) => h('div', { class: 'truncate w-[100px]' }, row.getValue('url')),
  },
  {
    accessorKey: 'thumbnailUrl',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [h('div', { class: 'text-center' }, 'Миниатюра'), h(ArrowUpDown, { class: '' })])
    },
    cell: ({ row }) => h('div', { class: 'truncate w-[100px]' }, row.getValue('thumbnailUrl')),
  },
]
