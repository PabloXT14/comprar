import { CircleCheck } from 'lucide-react-native'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { FilterStatus } from '@/@types/filter-status'

import { styles } from './styles'

type FilterProps = TouchableOpacityProps & {
  status: FilterStatus
  isActive?: boolean
}

export function Filter({ status, isActive = false, ...rest }: FilterProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      {...rest}
    >
      <CircleCheck size={18} />

      <Text style={styles.text}>
        {status === FilterStatus.DONE ? 'Comprados' : 'Pendentes'}
      </Text>
    </TouchableOpacity>
  )
}
