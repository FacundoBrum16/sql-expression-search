<template>
<!-- STADISTICS BAR -->
<div class="flex bg-white dark:bg-blue-big-sidebar-dark rounded-xl shadow-table-shadow w-full overflow-hidden">
    <div class="py-4 px-7 min-w-max">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-11 z-10 font-medium">
                <div  v-for="statusItem in dataForStatusBarComponent" :key="statusItem">
                    <span class="block text-xs font-medium text-slate-500">{{statusItem.columnName}}</span>
                    <span class="mt-2 font-medium text-2xl text-slate-800">{{statusItem.columnValue}}</span>
                </div>
            </div>

        </div> 
    </div>
    <div class="w-full relative py-9 px-8 flex justify-end">
        <img class="absolute h-[40rem] w-min -top-[17.2rem] -right-72 z-0" src="../assets/splash/status-bar-splash.svg" alt="status-bar-splash">
    </div>
</div>
</template>

<script>
export default {
  name: 'StadisticsBar',
  props: {
    dataForStatusBarComponent: Array
  }
}
</script>