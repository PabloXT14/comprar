import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { styles } from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
