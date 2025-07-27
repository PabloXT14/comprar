import AsyncStorage from '@react-native-async-storage/async-storage'

import type { FilterStatus } from '@/@types/filter-status'
import { ITEMS_STORAGE_KEY } from './config'

export type ItemStorage = {
  id: string
  status: FilterStatus
  description: string
}

async function get(): Promise<ItemStorage[]> {
  try {
    const response = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)

    const items: ItemStorage[] = response ? JSON.parse(response) : []

    return items
  } catch (error) {
    throw new Error(`GET_ITEMS: ${error}`)
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
  try {
    const items = await get()

    const itemsFiltered = items.filter((item) => item.status === status)

    return itemsFiltered
  } catch (error) {
    throw new Error(`GET_ITEMS_BY_STATUS: ${error}`)
  }
}

async function save(items: ItemStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    throw new Error(`SAVE_ITEMS: ${error}`)
  }
}

async function add(newItem: ItemStorage): Promise<ItemStorage[]> {
  try {
    const items = await get()

    const updatedItems = [...items, newItem]

    await save(updatedItems)

    return items
  } catch (error) {
    throw new Error(`ADD_ITEM: ${error}`)
  }
}

export const itemsStorage = {
  get,
  getByStatus,
  save,
  add,
}
