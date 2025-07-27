/** biome-ignore-all lint/correctness/useExhaustiveDependencies: needed */
import { useEffect, useState } from 'react'
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { FilterStatus } from '@/@types/filter-status'
import { Button } from '@/components/button'
import { Filter } from '@/components/filter'
import { Input } from '@/components/input'
import { Item } from '@/components/item'

import { type ItemStorage, itemsStorage } from '@/storage/items-storage'

import { styles } from './styles'

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export function Home() {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>(
    FilterStatus.PENDING
  )
  const [description, setDescription] = useState('')
  const [items, setItems] = useState<ItemStorage[]>([])

  function handleChangeFilterStatus(status: FilterStatus) {
    setFilterStatus(status)
  }

  async function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert('Adicionar', 'Informe uma descrição para adicionar.')
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      status: FilterStatus.PENDING,
      description,
    }

    await itemsStorage.add(newItem)
    await fetchItemsByStatus()

    setDescription('')
    setFilterStatus(FilterStatus.PENDING)

    Alert.alert('Adicionar', `Adicionado ${description}`)
  }

  async function handleRemoveItem(id: string) {
    try {
      await itemsStorage.remove(id)
      await fetchItemsByStatus()
    } catch (error) {
      // biome-ignore lint/suspicious/noConsole: only in dev
      console.log(error)
      Alert.alert('Remover item', 'Não foi possível remover o item.')
    }
  }

  async function onClearItems() {
    try {
      await itemsStorage.clear()
      setItems([])
      setFilterStatus(FilterStatus.PENDING)
    } catch (error) {
      // biome-ignore lint/suspicious/noConsole: only in dev
      console.log(error)
      Alert.alert('Limpar itens', 'Não foi possível limpar os itens.')
    }
  }

  function handleClearItems() {
    Alert.alert('Limpar itens', 'Deseja realmente limpar todos os itens?', [
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => onClearItems(),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  async function fetchItemsByStatus() {
    try {
      const itemsFetched = await itemsStorage.getByStatus(filterStatus)

      setItems(itemsFetched)
    } catch (erro) {
      // biome-ignore lint/suspicious/noConsole: only in dev
      console.log(erro)
      Alert.alert('Obter itens', 'Não foi possível obter os itens.')
    }
  }

  useEffect(() => {
    fetchItemsByStatus()
  }, [filterStatus])

  return (
    <View style={styles.container}>
      <Image
        alt="Logo da aplicação"
        source={require('@/assets/logo.png')}
        style={styles.logo}
      />

      <View style={styles.form}>
        <Input
          onChangeText={setDescription}
          placeholder="O que você precisa comprar?"
          value={description} // atribuindo o estado aqui torna o input controlado
        />

        <Button onPress={handleAddItem} title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              isActive={status === filterStatus}
              key={status}
              onPress={() => handleChangeFilterStatus(status)}
              status={status}
            />
          ))}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleClearItems}
            style={styles.clearButton}
          >
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={styles.listContent}
          data={items}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item aqui</Text>
          )}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => {
                handleRemoveItem(item.id)
              }}
              onToggleStatus={() => {
                // biome-ignore lint/suspicious/noConsole: debug
                console.log('Trocando status...')
              }}
            />
          )}
        />
      </View>
    </View>
  )
}
