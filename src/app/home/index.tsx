import { Image, Text, TouchableOpacity, View } from 'react-native'

import { FilterStatus } from '@/@types/filter-status'
import { Button } from '@/components/button'
import { Filter } from '@/components/filter'
import { Input } from '@/components/input'

import { styles } from './styles'

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

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
      </View>
    </View>
  )
}
