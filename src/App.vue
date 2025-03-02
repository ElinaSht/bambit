<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ThemeToggle from '@/components/ThemeToggle.vue'
import SearchPanel from '@/components/SearchPanel.vue'
import PhotosTable from '@/components/PhotosTable.vue'
</script>

<template>
  <div class="size-full py-[20px]">
    <Card class="flex flex-col mx-auto rounded-md size-fit">
      <CardHeader>
        <CardTitle class="flex items-center">
          <div class="flex-1 text-center">Photos list</div>

          <ThemeToggle />
        </CardTitle>
      </CardHeader>

      <CardContent class="m-[40px] flex flex-col gap-[40px]">
        <SearchPanel />

          <PhotosTable />
      </CardContent>
    </Card>
  </div>
</template>
