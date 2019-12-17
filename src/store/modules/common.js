const state = {
  pageData: {
    list: [],
    title: "金鑫智慧",
    statsCode: "",
    theme: "theme1",
    style: {
      backgroundColor: "#fff",
      backgroundImage: "",
    }
  },
  wgConfig: {
    topFixed: '',
    bottomFixed: ''
  },
  selectWg: [],
  configTab: 'page',
  wgCollapse: "base"
}

// const actions = {

// }

// const getters = {
//   selectTheme: state => state.selectTheme
// }

const mutations = {
  setPageData(state, payload) {
    state.pageData = payload;
  },
  setSelectWg(state, payload) {
    state.selectWg = payload;
  },
  setConfigTab(state, payload) {
    state.configTab = payload;
  },
  setWgCollapse(state, payload) {
    state.wgCollapse = payload;
  },
  setPageType(state,payload){
    state.pageData.style.width = payload
  }
}

export default {
  state,
  mutations
}