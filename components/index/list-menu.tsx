import { useState } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import { COLORS } from '@/constants/colors'
import { LIST_MENU } from '@/constants/mocks'

export function ListMenu() {
  const scrollX = useSharedValue(0)
  const { width: SCREEN_WIDTH } = Dimensions.get('window')

  const [contentWidth, setContentWidth] = useState<number>(0)

  const onContentSizeChange = (width: number) => {
    setContentWidth(width)
    console.log('Content width:', width)
  }

  // Calculate scrollbar dimensions
  const scrollViewWidth = 35
  const scrollbarWidth = contentWidth <= SCREEN_WIDTH ? 35 : 17
  const maxScrollbarX = scrollViewWidth - scrollbarWidth

  // Fixed scroll handler
  const onScroll = useAnimatedScrollHandler((event) => {
    const percentage = event.contentOffset.x / (contentWidth - SCREEN_WIDTH)
    scrollX.value = percentage * maxScrollbarX
  })

  // Animate scrollbar position
  const scrollbarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(scrollX.value, {
            damping: 20,
            stiffness: 100,
          }),
        },
      ],
    }
  })

  return (
    <View style={{ paddingTop: 10, paddingInline: 10 }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: 12,
          paddingBottom: 6,
          borderRadius: 8,
          gap: 10,
        }}
      >
        <Animated.ScrollView
          horizontal
          onScroll={onScroll}
          scrollEventThrottle={16}
          onContentSizeChange={onContentSizeChange}
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          <View
            style={{
              gap: 6,
              flexDirection: 'row',
              paddingInline: 6,
            }}
          >
            {LIST_MENU.map((item, index) => (
              <View
                key={item.name}
                style={{
                  alignItems: 'center',
                  width: 70,
                  gap: 6,
                }}
              >
                <Image
                  style={{
                    width: 37,
                    height: 37,
                    resizeMode: 'contain',
                  }}
                  source={item.icon}
                />
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: 'center',
                  }}
                >
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        </Animated.ScrollView>

        {/* Scrollbar track */}
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 4,
              borderRadius: 4,
              width: scrollViewWidth,
              backgroundColor: '#E5E7EB',
            }}
          >
            {/* Scrollbar thumb */}
            <Animated.View
              style={[
                {
                  height: 4,
                  borderRadius: 4,
                  width: scrollbarWidth,
                  backgroundColor: COLORS.primary400,
                  position: 'absolute',
                },
                scrollbarStyle,
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
