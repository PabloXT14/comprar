import { Image, View } from 'react-native'

import { Button } from '@/components/button'
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

      <View style={styles.list}>{/* <FlatList /> */}</View>
    </View>
  )
}
