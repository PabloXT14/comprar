import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import { FilterStatus } from '@/@types/filter-status'
import { Button } from '@/components/button'
import { Filter } from '@/components/filter'
import { Input } from '@/components/input'
import { Item } from '@/components/item'

import { styles } from './styles'

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const ITEMS = [
  { id: '1', status: FilterStatus.DONE, description: '1 pacote de café' },
  {
    id: '2',
    status: FilterStatus.PENDING,
    description: '3 pacotes de macarrão',
  },
  { id: '3', status: FilterStatus.PENDING, description: '1 pacote de pão' },
  { id: '4', status: FilterStatus.PENDING, description: '1 pacote de leite' },
  { id: '5', status: FilterStatus.PENDING, description: '1 pacote de queijo' },
]

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        alt="Logo da aplicação"
        source={require('@/assets/logo.png')}
        style={styles.logo}
      />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />

        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} />
          ))}

          <TouchableOpacity activeOpacity={0.8} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={styles.listContent}
          data={ITEMS}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item aqui</Text>
          )}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => {
                // biome-ignore lint/suspicious/noConsole: debug
                console.log('Removendo item...')
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
