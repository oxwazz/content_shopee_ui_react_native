import { Text, TouchableHighlight, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Svg, { G, Path } from 'react-native-svg'

import { COLORS } from '@/constants/colors'

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
        underlayColor={COLORS.backgroundColorTouch}
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
          <Svg width={24} height={24}>
            <Path
              fill="none"
              stroke={COLORS.primary400}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-2.107 5.42 3.08 3.08"
            />
          </Svg>
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
          <Svg width={24} height={24}>
            <G
              fill="none"
              stroke={COLORS.grey}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            >
              <Path d="M12.857 3.189h-1.714c-.681 0-1.022 0-1.331.094-.274.083-.529.22-.75.401-.25.205-.438.489-.816 1.056L7.103 6.454c-1.524 0-2.286 0-2.868.296a2.72 2.72 0 0 0-1.188 1.19c-.297.581-.297 1.343-.297 2.867v5.651c0 1.524 0 2.286.297 2.868.26.512.677.928 1.188 1.189.582.296 1.344.296 2.868.296h9.794c1.524 0 2.286 0 2.868-.296a2.72 2.72 0 0 0 1.188-1.19c.297-.581.297-1.343.297-2.867v-5.651c0-1.524 0-2.286-.297-2.868a2.72 2.72 0 0 0-1.188-1.189c-.582-.296-1.344-.296-2.868-.296L15.754 4.74c-.378-.567-.567-.85-.816-1.056a2.2 2.2 0 0 0-.75-.401c-.309-.094-.65-.094-1.331-.094" />
              <Path d="M15.775 13.212a3.775 3.775 0 1 1-7.55 0 3.775 3.775 0 0 1 7.55 0" />
            </G>
          </Svg>
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
        <Svg
          width={24}
          height={24}
          fill="none"
          className="navbar-icon-cart__icon"
          color="white"
        >
          <Path
            fill={COLORS.white}
            fillRule="evenodd"
            d="M0 2.75h3.713l4.065 14.453a.75.75 0 0 0 .722.547H20a.75.75 0 0 0 .721-.544l3-10.5A.75.75 0 0 0 23 5.75H6.115L5.003 1.797 4.85 1.25H0v1.5zm9.068 13.5-2.531-9h15.469l-2.572 9H9.068zM9.75 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm9 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
            clipRule="evenodd"
          />
        </Svg>
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
        <Svg width={19} height={19} viewBox="0 0 16 16">
          <G fill={COLORS.white}>
            <Path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            <Path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
          </G>
        </Svg>
      </TouchableHighlight>
    </View>
  )
}
