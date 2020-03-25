import Vue from 'vue'
import utils from '@/addons/utils'

export default {

  namespaced: true,

  state: {
    all: [],
    selected: [],
    history: []
  },

  actions: {
    async refresh ({ commit }) {
      commit('setAll', [])
      commit('setSelected', [])
      const url = new URL(Vue.$config['api-address'] + 'launches?')
      const params = { limit: 100 }
      url.search = new URLSearchParams(params).toString()

      const response = await fetch(url)
      if (response.ok) {
        const launches = await response.json()
        commit('setAll', launches)
      } else {
        console.log('error')
      }
    },
    select ({ commit }, launch) {
      try {
        commit('switch', { launch, from: 'all', to: 'selected' })
        commit('saveToHistory', { launch, action: 'select' })
      } catch (e) {
        commit('saveToHistory', { launch, action: 'error' })
      }
    },
    remove ({ commit }, launch) {
      try {
        commit('switch', { launch, from: 'selected', to: 'all' })
        commit('saveToHistory', { launch, action: 'remove' })
      } catch (e) {
        commit('saveToHistory', { launch, action: 'error' })
      }
    }
  },

  mutations: {
    setAll (state, all) {
      state.all = all
    },
    setSelected (state, selected) {
      state.selected = selected
    },
    switch (state, { launch, from, to }) {
      const oldLaunchIndex = utils.findBy(state[from], 'flight_number', launch.flight_number)
      if (oldLaunchIndex > -1) {
        const oldLaunch = state[from][oldLaunchIndex]
        state[from].splice(oldLaunchIndex, 1)
        state[to].push(oldLaunch)
        state[to].sort((launch1, launch2) => {
          return launch1.flight_number - launch2.flight_number
        })
        state[from].sort((launch1, launch2) => {
          return launch1.flight_number - launch2.flight_number
        })
      } else {
        throw new Error('Cannot find element')
      }
    },
    saveToHistory (state, { launch, action }) {
      state.history.push({
        action,
        launch,
        datetime: new Date()
      })
    }
  },

  getters: {

    filter: state => query => {
      const temp = []
      if (!query) return state.all
      for (const launch of state.all) {
        let count = 0
        if (launch.ships) {
          for (const ship of launch.ships) {
            if (ship.toLowerCase().includes(query.toLowerCase())) {
              count++
            }
          }
        }
        if (launch.mission_name.toLowerCase().includes(query.toLowerCase())) {
          count++
        }
        if (count > 0) {
          temp.push({
            launch,
            count
          })
        }
      }
      temp.sort((launch1, launch2) => {
        return launch2.count - launch1.count
      })
      return temp.map(x => x.launch)
    },

    history: state => type => {
      if (!type) {
        return state.history
      } else {
        return state.history.filter(({ action }) => action === type)
      }
    }
  }

}
