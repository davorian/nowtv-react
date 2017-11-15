import {find, defaultTo} from 'ramda'

export const findMemberWithId = (members, id) => defaultTo(null, find(m => m.id === id)(members));