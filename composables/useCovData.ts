import { Diseaseh5Shelf, RootObject, StatisGradeCityDetail } from "~~/types"

let chinaDetail: Diseaseh5Shelf = {
  chinaTotal: {
    heal: 0,
    nowSevere: 0,
    dead: 0,
    localConfirm: 0,
    confirm: 0,
    nowConfirm: 0,
    suspect: 0,
    noInfect: 0,
    noInfectH5: 0,
    importedCase: 0,
    showLocalConfirm: 0,
    showlocalinfeciton: 0,
    localConfirmH5: 0,
    local_acc_confirm: 0,
  },
  chinaAdd: {
    noInfectH5: 0,
    localConfirmH5: 0,
    confirm: 0,
    dead: 0,
    suspect: 0,
    noInfect: 0,
    localConfirm: 0,
    heal: 0,
    nowConfirm: 0,
    nowSevere: 0,
    importedCase: 0,
  },
  areaTree: [{
    children: [],
    name: '',
    today: {
      confirm: 0,
      confirmCuts: 0,
      isUpdated: false,
      tip: '',
      wzz_add: 0,
    },
    total: {
      confirm: 0,
      dead: 0,
      showRate: false,
      heal: 0,
      showHeal: false,
      wzz: 0,
      provinceLocalConfirm: 0,
      nowConfirm: 0,
    }
  }]
}

let cityDetail:StatisGradeCityDetail[] = []

export const useCovData = (): RootObject => {
  return {
    diseaseh5Shelf: chinaDetail,
    statisGradeCityDetail: cityDetail
  }
}