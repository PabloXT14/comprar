import { Trash2 } from 'lucide-react-native'
import { Text, TouchableOpacity, View, type ViewProps } from 'react-native'

import type { FilterStatus } from '@/@types/filter-status'
import { colors } from '@/styles/colors'
import { StatusIcon } from '../status-icon'

import { styles } from './styles'

type ItemData = {
  status: FilterStatus
  description: string
}

type ItemProps = ViewProps & {
  data: ItemData
  onRemove: () => void
  onToggleStatus: () => void
}

export function Item({ data, onRemove, onToggleStatus, ...rest }: ItemProps) {
  const { status, description } = data

  return (
    <View style={styles.container} {...rest}>
      <TouchableOpacity activeOpacity={0.8} onPress={onToggleStatus}>
        <StatusIcon status={status} />
      </TouchableOpacity>

      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
        <Trash2 color={colors.textMuted} size={18} />
      </TouchableOpacity>
    </View>
  )
}
