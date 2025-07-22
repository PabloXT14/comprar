import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accentBrand,
    borderRadius: 8,
    paddingHorizontal: 20,
    height: 48,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
})
