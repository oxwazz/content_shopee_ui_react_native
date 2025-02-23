import { Text, TouchableHighlight, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { COLORS } from '@/constants/colors'
import {
  SvgFluentCart,
  SvgFluentChat,
  SvgProiconsCamera,
  SvgProiconsSearch,
} from '@/constants/svg-icons'

export function Header() {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={{
        paddingTop: insets.top + 10,
        backgroundColor: COLORS.primary400,
        paddingInline: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={COLORS.grey100}
        onPress={() => alert('Pressed!')}
        style={{
          backgroundColor: COLORS.white,
          flex: 1,
          height: 45,
          borderRadius: 8,
          padding: 10,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            gap: 4,
          }}
        >
          <SvgProiconsSearch size={24} color={COLORS.primary400} />
          <Text
            style={{
              color: COLORS.primary400,
              fontWeight: '600',
              marginRight: 'auto',
              fontSize: 15,
            }}
          >
            Bangku Plastik
          </Text>
          <SvgProiconsCamera size={24} color={COLORS.grey400} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={COLORS.primary700}
        onPress={() => alert('Pressed!')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 40,
          height: 40,
        }}
      >
        <SvgFluentCart size={24} color={COLORS.white} />
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={COLORS.primary700}
        onPress={() => alert('Pressed!')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 40,
          height: 40,
        }}
      >
        <SvgFluentChat size={24} color={COLORS.white} />
      </TouchableHighlight>
    </View>
  )
}
