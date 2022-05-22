import { RootObject } from "~~/types"

let chinaDetail = {
  chinaTotal: {
    dead: 0,
    localConfirm: 0,
    nowConfirm: 0,
    confirm: 0,
    noInfect: 0,
    importedCase: 0,
  },
  chinaAdd: {
    dead: 0,
    localConfirmH5: 0,
    nowConfirm: 0,
    confirm: 0,
    noInfect: 0,
    importedCase: 0,
  }
}

let cityDetail = []

export const useCovData = () => {
  return {
    chinaDetail,
    cityDetail
  }
}