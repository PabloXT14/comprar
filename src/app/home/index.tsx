import { Image, View } from 'react-native'
import { FilterStatus } from '@/@types/filter-status'
import { Button } from '@/components/button'
import { Filter } from '@/components/filter'
import { Input } from '@/components/input'
import { styles } from './styles'

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
        <View style={styles.filters}>
          <Filter status={FilterStatus.PENDING} />
          <Filter isActive status={FilterStatus.DONE} />
        </View>
      </View>
    </View>
  )
}
