<template>
  <div class="h-screen bg-slate-100 flex w-screen overflow-x-hidden">
    <!-- LEFT SIDEBAR -->
    <div class="w-72 h-screen bg-slate-900 fixed">
      <div class="pt-6 px-3">
        <div
          class="
            bg-blue-600
            rounded-lg
            flex
            items-center
            justify-center
            w-10
            h-10
            mx-3
          "
        >
          <span class="text-white">SQL</span>
        </div>

        <div class="mt-9">
          <div class="p-3 leading-none">
            <span class="block text-blue-400 text-xs font-bold"
              >FILTER DATA</span
            >
            <span class="text-[11px] text-slate-400 font-medium"
              >Filter by any col of the table</span
            >
          </div>
          <div class="px-3">
            <SearchInput
              ref="searchInput"
              @filtredData="fillSourceTable"
              :data-for-search="dataForSearch"
            />
          </div>
        </div>

        <div class="mt-9">
          <div class="p-3 leading-none">
            <span class="block text-blue-400 text-xs font-bold"
              >RECENT EXPRESSIONS</span
            >
            <span class="text-[11px] text-slate-400 font-medium"
              >Select one of your recent expressions</span
            >
          </div>
        </div>
        <div class="h-[38rem] overflow-y-auto">
          <RecentExpression />
        </div>
      </div>

      <div class="h-full w-full">
        <button
          class="
            bg-slate-900
            w-full
            bottom-0
            absolute
            py-4
            text-white text-base
          "
        >
          Add Location
        </button>
      </div>
    </div>

    <div class="h-full ml-72 w-full grow-1 px-10 pb-10 py-6 overflow-x-hidden">
      <div class="flex items-center justify-between w-full mb-8">
        <span class="text-slate-800 text-lg font-semibold"
          >SQL Expression Searcher</span
        >
        <UploadCsv @getCsvInJsonFormat="getCsvInJsonFormat" />
      </div>
      <StadisticsBar
        class="mb-8"
        :data-for-status-bar-component="dataForStatusBarComponent"
      />
      <SqlInput class="mb-8" />
      <CustomTable ref="customTable" :data-table="dataTable" />
    </div>
  </div>
</template>

<script>
import CustomTable from "../components/CustomTable.vue";
import StadisticsBar from "../components/StadisticsBar.vue";
import SqlInput from "../components/SqlInput.vue";
import UploadCsv from "../components/UploadCsv.vue";
import RecentExpression from "../components/RecentExpression.vue";
import SearchInput from "../components/SearchInput.vue";

export default {
  name: "SqlExpressionSearch",
  components: {
    CustomTable,
    StadisticsBar,
    SqlInput,
    UploadCsv,
    RecentExpression,
    SearchInput,
  },
  props: {},
  data() {
    return {
      dataForSearch: {
        source: [],
        filterFields: [],
      },

      dataForStatusBarComponent: [
        {
          columnName: "SQL queries results",
          columnValue: "56",
        },

        {
          columnName: "Filter results",
          columnValue: "-",
        },
      ],

      dataTable: {
        elementsPerPage: 8,
        source: [],
      },

      hardCodedResults: {
        first: [
          {
            territoryID: "01581",
            territoryDescription: "Westboro",
            regionID: 1,
          },
          {
            territoryID: "01730",
            territoryDescription: "Bedford",
            regionID: 1,
          },
          {
            territoryID: "01833",
            territoryDescription: "Georgetow",
            regionID: 1,
          },
          {
            territoryID: "02116",
            territoryDescription: "Boston",
            regionID: 1,
          },
        ],
        second: [],
        xjasdjad: [],
      },
    };
  },
  methods: {
    fillSourceTable(value) {
      //fill dataForStatusBarComponent
      this.dataForStatusBarComponent[1].columnValue = value.length.toString();

      //set new data for the table on filter action
      this.dataTable.source = value || [];
      //reload table on filter action
      this.$refs.customTable.getPageData(1);
    },

    getCsvInJsonFormat(value) {
      this.dataTable.source = value;

      //search
      this.dataForSearch.source = value;
      this.dataForStatusBarComponent[1].columnValue = "-";
      this.$refs.searchInput.clearInput();

      //reload table on upload CSV action
      this.$refs.customTable.getPageData(1);
      this.dataForSearch.filterFields = this.getArrayKeys();
    },

    getArrayKeys() {
      return Object.keys(this.dataTable?.source[0] || []);
    },
  },

  created() {
    let source = [
      {
        territoryID: "01581",
        territoryDescription: "Westboro",
        regionID: 1,
      },
      {
        territoryID: "01730",
        territoryDescription: "Bedford",
        regionID: 1,
      },
      {
        territoryID: "01833",
        territoryDescription: "Georgetow",
        regionID: 1,
      },
      {
        territoryID: "02116",
        territoryDescription: "Boston",
        regionID: 1,
      },
    ];
    this.dataTable.source = source || [];
    this.dataForSearch.source = source || [];
    this.dataForSearch.filterFields = this.getArrayKeys();
  },
};
</script>

