import {Telegraf } from 'telegraf'

const bot = new Telegraf('')

bot.launcher()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
