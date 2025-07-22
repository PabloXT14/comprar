import { Image, View } from 'react-native'

import { Button } from '@/components/button'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        alt="Logo da aplicação"
        source={require('@/assets/logo.png')}
        style={styles.logo}
      />

      <Button title="Entrar" />
      <Button title="Criar conta" />
      <Button title="Salvar" />
      <Button title="Voltar" />
    </View>
  )
}
