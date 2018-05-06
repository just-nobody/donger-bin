import * as ConfigStore from 'configstore'
import { Donger } from './donger'

const meta = require('../package.json')

const defaults = {
  dongers: [
    new Donger('shrug', String.raw`¯\_(ツ)_/¯`),
    new Donger('shrug (markdown)', String.raw`¯\\\_(ツ)\_/¯`),
    new Donger('flower', `(◕‿◕✿)`),
    new Donger('peace', `(⌣‿⌣✿)`),
    new Donger('give', `༼ つ ◕_◕ ༽つ`),
    new Donger('OG', `ヽ༼ຈل͜ຈ༽ﾉ`),
    new Donger('lenny', `( ͡° ͜ʖ ͡°)`),
    new Donger('dance', `ᕕ( ᐛ )ᕗ`),
    new Donger('stars', `(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`),
    new Donger('shige', `(´・◡ ・｀)`),
    new Donger('lenny-drugs', '( ͡☉ ͜ʖ ͡☉)'),
  ],
}

const store = new ConfigStore(meta.name, defaults)

export function getDongers(): Donger[] {
  return store.get('dongers')
}

export function addDonger(donger: Donger) {
  store.set('dongers', getDongers().concat(donger))
}

export function removeDonger(id: string) {
  store.set('dongers', getDongers().filter(d => d.id !== id))
}

export function updateLastUsed(id: string, date: number) {
  const dongerList = getDongers()
  const donger = dongerList.find(d => d.id === id)
  if (donger) {
    donger.dateLastUsed = date
    store.set('dongers', dongerList)
  }
}