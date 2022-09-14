<template>
  <div class="h-screen bg-slate-100 flex w-screen overflow-x-hidden" @click="this.$router.push('/')">
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

        <div class="mt-9" @click="$event.stopPropagation()">
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

        <div class="mt-9" @click="$event.stopPropagation()">
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
          <router-link
            @click="$event.stopPropagation()"
            v-for="exp in historyOfExpressions"
            :key="exp"
            :to="{ query: { expressionsId: exp.id } }"
            ><RecentExpression :expression="exp"
          /></router-link>
        </div>
      </div>

      <div class="h-full w-full">
        <div
          class="
            bg-slate-900
            w-full
            bottom-0
            absolute
            py-4
            text-white text-base
          "
        >
        </div>
      </div>
    </div>

    <div class="h-full ml-72 w-full grow-1 px-10 pb-10 py-6 overflow-x-hidden">
      <div class="flex items-center justify-between w-full mb-8" @click="$event.stopPropagation()">
        <span class="text-slate-800 text-lg font-semibold"
          >SQL Expression Searcher</span
        >
        <UploadCsv  @getCsvInJsonFormat="getCsvInJsonFormat" />
      </div>
      <StadisticsBar
        @click="$event.stopPropagation()"
        class="mb-8"
        :data-for-status-bar-component="dataForStatusBarComponent"
      />
      <SqlInput
        @click="$event.stopPropagation()"
        ref="sqlInput"
        @saveExpression="saveExpression"
        :text-value-for-sql-input="textValueForSqlInput"
        class="mb-8"
      />
      <CustomTable @click="$event.stopPropagation()" ref="customTable" :data-table="dataTable" />
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

import historyOfExpressions from '../data/historyOfExpressions.json'
import defaultSource from '../data/defaultSource.json'

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
      textValueForSqlInput: "",

      dataForStatusBarComponent: [
        {
          columnName: "SQL queries results",
          columnValue: "-",
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

      //harcoded data
      historyOfExpressions: historyOfExpressions,
      defaultSource: defaultSource
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
      this.$router.push("/");

      //reload table on upload CSV action
      this.dataTable.source = value;
      this.$refs.customTable.getPageData(1);

      //search
      this.dataForSearch.source = value;
      this.dataForStatusBarComponent[0].columnValue = "-";
      this.dataForStatusBarComponent[1].columnValue = "-";
      this.$refs.searchInput.clearInput();
      this.dataForSearch.filterFields = this.getArrayKeys();

      //sqlInput
      this.$refs.sqlInput.clearInput();
    },

    getArrayKeys() {
      return Object.keys(this.dataTable?.source[0] || []);
    },

    updateComponentsValuesOnWatch(selectedExpresion) {
      //table
      this.dataTable.source = selectedExpresion.filtredData;

      //search
      this.dataForSearch.source = selectedExpresion.filtredData;
      this.dataForSearch.filterFields = this.getArrayKeys();
      this.dataForStatusBarComponent[1].columnValue = "-";

      //statusBar
      this.dataForStatusBarComponent[0].columnValue =
        selectedExpresion.filtredData.length.toString();

      //sqlInput
      this.textValueForSqlInput = selectedExpresion.expression;
    },

    expressionIsCreated(expression){
      if(this.historyOfExpressions.find((exp)=> exp.expression ==  expression)) return true
      return false
    },

    saveExpression(expression) {
      if(!this.expressionIsCreated(expression)) {
        let randomId = Math.round(Math.random() * 1000000000000000).toString()
        this.historyOfExpressions.push({
          id: randomId,
          expression: expression,
          filtredData: [
            {
              territoryID: "01asd581",
              territoryDescription: "Filter data 1",
              branch: 'Develop',
              regionID: 1,
              isActive: true
            },
            {
              territoryID: "01730asd",
              territoryDescription: "Example 2",
              branch: 'Master',
              regionID: 1,
              isActive: true
            },
            {
              territoryID: "01sad833",
              territoryDescription: "lExam 3",
              branch: 'Main',
              regionID: 1,
              isActive: true
            },
            {
              territoryID: "021asd16",
              territoryDescription: "data 4",
              branch: 'FB_access',
              regionID: 1,
              isActive: true
            },
          ],
        });
        this.$router.push("/?expressionsId="+randomId);
      } else{
        alert('The expression already exists.')
      }
    },
  },

  watch: {
    "$route.query.expressionsId": {
      inmediate: true,
      handler(currentID) {
        if (currentID) {
          let selectedExpresion = this.historyOfExpressions.find(
            (exp) => exp.id === currentID
          );
          this.updateComponentsValuesOnWatch(selectedExpresion);
          this.$refs.customTable.getPageData(1);
          this.$refs.searchInput.clearInput();
        }
      },
    },
  },

  created() {
    this.dataTable.source = this.defaultSource || [];
    this.dataForSearch.source = this.defaultSource || [];
    this.dataForSearch.filterFields = this.getArrayKeys();

    //Update values for selected expression
    if (this.$route.query.expressionsId) {
      let selectedExpresion = this.historyOfExpressions.find(
        (exp) => exp.id === this.$route.query.expressionsId
      );
      if(selectedExpresion) {
        this.updateComponentsValuesOnWatch(selectedExpresion);
      } else {
        this.$router.push("/");
      }
    }
  },
};
</script>

