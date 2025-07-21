import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export function Button() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Text style={styles.text}>Adicionar</Text>
    </TouchableOpacity>
  )
}
