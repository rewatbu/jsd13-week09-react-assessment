import { getMembers } from '../api.js'

const members = await getMembers()

console.log(members[0].name);