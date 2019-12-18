const state = {
  pageData: {
    list: [],
    title: "金鑫智慧",
    statsCode: "",
    theme: "theme1",
    style: {
      backgroundColor: "#fff",
      backgroundImage: "",
    },
    cmdInfo:[]
  },
  wgConfig: {
    topFixed: '',
    bottomFixed: ''
  },
  selectWg: [],
  configTab: 'page',
  wgCollapse: "base",
  cmdInfo:{
    
  }
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
  setcmd(state, payload) {
    state.cmdInfo = payload;
    state.pageData.cmdInfo = payload;
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

const getters = {
  getcmd:state=>{
    return state.cmdInfo
  }
}

export default {
  state,
  mutations,
  getters
}