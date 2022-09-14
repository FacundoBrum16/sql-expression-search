<template>
  <div
    class="pb-16 relative px-6 pt-3 rounded-2xl bg-white shadow-table-shadow"
  >
    <div class="overflow-x-auto relative max-w-full">
      <table class="w-full text-sm text-left">
        <thead class="text-xs text-slate-500 font-semibold">
          <tr>
            <th
              v-for="th in getArrayKeys"
              :key="th"
              class="py-3 px-6 border-b pb-6"
            >
              <span>{{ th }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="tr in tableData"
            :key="tr"
            class="bg-white border-b text-slate-800 font-normal"
          >
            <td v-for="td in getArrayKeys" :key="td" class="py-4 px-6 truncate">
              {{ tr[td] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="h-16 absolute bottom-0 right-0 flex items-center px-6 w-full">
      <div
        class="
          gap-x-8
          items-center
          bottom-0
          right-0
          w-full
          flex
          justify-end
          text-slate-500
          font-light
        "
      >
        <span>Page {{ this.currentPage }} of {{ this.amountOfPages() }}</span>
        <button class="flex items-center" @click="getPreviousPage()">
          <img class="w-3 h-3" src="../assets/icons/previous-icon.svg" alt="" />
        </button>
        <button class="flex items-center" @click="getNextPage()">
          <img class="w-3 h-3" src="../assets/icons/next-icon.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomTable",
  props: {
    dataTable: Object,
  },
  data() {
    return {
      paginatedSource: [],
      currentPage: 1,
    };
  },

  computed: {
    tableData() {
      return this.paginatedSource || [];
    },

    getArrayKeys() {
      return Object.keys(this.dataTable.source[0] || []);
    },
  },

  methods: {
    amountOfPages() {
      return Math.ceil(
        this.dataTable.source.length / this.dataTable.elementsPerPage
      );
    },

    getPageData(nroPagina) {
      this.paginatedSource = [];
      this.currentPage = nroPagina;
      let start =
        nroPagina * this.dataTable.elementsPerPage -
        this.dataTable.elementsPerPage;
      let end = nroPagina * this.dataTable.elementsPerPage;

      this.paginatedSource = this.dataTable.source.slice(start, end);
    },

    getPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
      this.getPageData(this.currentPage);
    },

    getNextPage() {
      if (this.currentPage < this.amountOfPages()) {
        this.currentPage++;
      }
      this.getPageData(this.currentPage);
    },
  },

  created() {
    this.getPageData(1);
  },
};
</script>