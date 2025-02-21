import { LinearGradient } from 'expo-linear-gradient'
import { Image, Text, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { COLORS } from '@/constants/colors'

export function ShopeeLive() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingInline: 6,
        paddingBlock: 12,
        borderRadius: 8,
        gap: 6,
        flex: 1,
        minHeight: 170,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          height: 20,
        }}
      >
        <Text
          style={{
            fontWeight: 700,
            color: COLORS.primary400,
          }}
        >
          Shopee Live
        </Text>
        <Svg
          width={8}
          height={8}
          className="stardust-icon stardust-icon-arrow-right"
          viewBox="0 0 11 11"
        >
          <Path
            fillOpacity={0.54}
            d="M2.5 11c.1 0 .2 0 .3-.1l6-5c.1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"
          />
        </Svg>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 4,
          flex: 1,
        }}
      >
        {[1, 2].map((v) => {
          return (
            <View
              key={v}
              style={{
                flex: 1,
                backgroundColor: 'grey',
                borderRadius: 8,
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
                  position: 'absolute',
                }}
                source={require('../../assets/images/mock/#808080.webp')}
              />
              <LinearGradient
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 1]}
                colors={[COLORS.primary400, COLORS.primary200]}
                style={{
                  position: 'absolute',
                  top: 4,
                  left: 4,
                  flexDirection: 'row',
                  gap: 4,
                  alignItems: 'center',
                  paddingInline: 3,
                  borderRadius: 4,
                }}
              >
                <View
                  style={{
                    height: 7,
                    width: 7,
                    borderRadius: '100%',
                    backgroundColor: COLORS.white,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 9,
                    fontWeight: 600,
                  }}
                >
                  LIVE
                </Text>
              </LinearGradient>

              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 10,
                  padding: 4,
                }}
                numberOfLines={2}
              >
                Ketahanan 7 - 15 Hari Ketahanan 7 - 15 Hari Ketahanan 7 - 15
                Hari
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}
