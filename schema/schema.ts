import { pgTable, serial, boolean, integer, text } from "drizzle-orm/pg-core";


export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: text('username'),
    password: text('password'),
    email: text('email'),
    preferredseating: text('preferredseating'),
    mealoption: text('mealoption'),
    toggleclub: boolean('toggleclub'),
    statuslevel: text('statuslevel'), 
    flights: integer('flights')
})

export const galaxymarketplace = pgTable('galaxymarketplace', {
    id: serial('id').primaryKey(),
    vendor: text('vendor'),
    item: text('item'),
    cost: text('cost')
})
