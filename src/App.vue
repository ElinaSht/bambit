<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ThemeToggle from '@/components/ThemeToggle.vue'
import SearchPanel from '@/components/SearchPanel.vue'
import PhotosTable from '@/components/PhotosTable.vue'
</script>

<template>
  <div class="flex size-full py-[20px] overflow-auto max-sm:p-[10px]">
    <Card class="flex flex-col max-w-max max-h-max mx-auto rounded-md size-full overflow-auto max-sm:shadow-none max-sm:border-none">
      <CardHeader class="max-sm:px-0">
        <CardTitle class="flex items-center">
          <div class="flex-1 text-center">Photos list</div>

          <ThemeToggle />
        </CardTitle>
      </CardHeader>

      <CardContent class="mt-[20px] flex flex-col gap-[20px] overflow-auto max-sm:p-0 max-sm:mt-0">
        <SearchPanel />

        <PhotosTable />
      </CardContent>
    </Card>
  </div>
</template>
