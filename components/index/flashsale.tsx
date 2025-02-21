import { LinearGradient } from 'expo-linear-gradient'
import { Image, Text, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { COLORS } from '@/constants/colors'

export function Flashsale() {
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
        <Image
          style={{
            height: '100%',
            width: 80,
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/other/logo-flash-sale.png')}
        />
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
        <LinearGradient
          locations={[0, 1]}
          colors={[COLORS.primary400, COLORS.primary50]}
          style={{
            flex: 1,
            borderRadius: 8,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 10,
              fontWeight: 700,
              padding: 4,
            }}
            numberOfLines={1}
          >
            BESOK!
          </Text>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                height: '80%',
                width: '80%',
                flex: 1,
                aspectRatio: 1,
                borderRadius: 8,
              }}
              resizeMode="cover"
              source={require('../../assets/images/mock/#808080.webp')}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              padding: 4,
            }}
          >
            <Text
              style={{
                color: COLORS.primary400,
                fontSize: 12,
                fontWeight: 700,
              }}
              numberOfLines={1}
            >
              <Text
                style={{
                  color: COLORS.primary400,
                  fontSize: 10,
                  fontWeight: 500,
                }}
                numberOfLines={1}
              >
                Rp
              </Text>
              3?9.000
            </Text>
            <Text
              style={{
                color: COLORS.black,
                fontSize: 10,
              }}
              numberOfLines={1}
            >
              STOK TERBATAS
            </Text>
          </View>
        </LinearGradient>

        <View
          style={{
            flex: 1,
            borderRadius: 8,
            position: 'relative',
          }}
        >
          <View
            style={{
              width: '100%',
            }}
          >
            <Image
              style={{
                height: '100%',
                width: '100%',
                flex: 1,
                aspectRatio: 1,
                borderRadius: 8,
              }}
              resizeMode="cover"
              source={require('../../assets/images/mock/#808080.webp')}
            />
          </View>

          <Image
            style={{
              width: 30,
              height: 30 * (72 / 96),
              top: 3,
              left: -3,
              position: 'absolute',
            }}
            resizeMode="contain"
            source={require('../../assets/images/other/label-star.png')}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              borderTopEndRadius: 8,
              flexDirection: 'row',
              overflow: 'hidden',
            }}
          >
            <LinearGradient
              start={[0, 0]}
              end={[1, 0]}
              locations={[0.5, 0.5]}
              colors={['transparent', COLORS.yellow100]}
            >
              <Image
                style={{
                  width: 17 * (1200 / 1867),
                  height: 17,
                }}
                resizeMode="contain"
                source={require('../../assets/images/other/icon-flashsale.png')}
              />
            </LinearGradient>
            <View
              style={{
                backgroundColor: COLORS.yellow100,
                justifyContent: 'center',
                paddingLeft: 2,
              }}
            >
              <Text
                style={{
                  color: COLORS.primary400,
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                -21%{' '}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              padding: 4,
              gap: 4,
            }}
          >
            <Text
              style={{
                color: COLORS.primary400,
                fontSize: 12,
                fontWeight: 700,
              }}
              numberOfLines={1}
            >
              <Text
                style={{
                  color: COLORS.primary400,
                  fontSize: 10,
                  fontWeight: 500,
                }}
                numberOfLines={1}
              >
                Rp
              </Text>
              3?9.000
            </Text>
            <LinearGradient
              start={[0, 0]}
              end={[1, 0]}
              locations={[0.3, 0.3]}
              colors={[COLORS.primary900, COLORS.primary100]}
              style={{
                borderRadius: 8,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingInline: 8,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 7,
                  fontWeight: 700,
                }}
                numberOfLines={1}
              >
                STOK TERBATAS
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  )
}
