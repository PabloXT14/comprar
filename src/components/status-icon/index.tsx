import { CircleCheck, CircleDashed } from 'lucide-react-native'

import { FilterStatus } from '@/@types/filter-status'

import { colors } from '@/styles/colors'

type StatusIconProps = {
  status: FilterStatus
}

export function StatusIcon({ status }: StatusIconProps) {
  return (
    <>
      {status === FilterStatus.DONE ? (
        <CircleCheck color={colors.accentBrand} size={18} />
      ) : (
        <CircleDashed color={colors.textContent} size={18} />
      )}
    </>
  )
}
