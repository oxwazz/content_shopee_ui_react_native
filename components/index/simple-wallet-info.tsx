import { LinearGradient } from 'expo-linear-gradient'
import { Image, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '@/constants/colors'
import {
  SvgShopeePay,
  SvgShopeeQrCode,
  SvgShopeeTransfer,
  SvgSolarDollarBold,
} from '@/constants/svg-icons'

export function SimpleWalletInfo() {
  return (
    <LinearGradient
      locations={[0.5, 0.5]}
      colors={[COLORS.primary400, 'transparent']}
      style={{
        paddingInline: 10,
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          minHeight: 70,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <SvgShopeeQrCode size={30} color={COLORS.grey500} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            height: '100%',
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.black,
              width: StyleSheet.hairlineWidth,
              height: '70%',
              opacity: 0.2,
            }}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <SvgShopeePay size={14} color={COLORS.primary400} />
              <Text
                style={{
                  fontSize: 14,
                }}
              >
                Rp10.543
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.grey500,
                fontSize: 12,
              }}
            >
              Gratis Koin
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            height: '100%',
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.black,
              width: StyleSheet.hairlineWidth,
              height: '70%',
              opacity: 0.2,
            }}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Image
                style={{
                  width: 17,
                  height: 17,
                  resizeMode: 'contain',
                }}
                source={require('../../assets/images/other/coin-shopee.webp')}
              />
              <Text
                style={{
                  fontSize: 14,
                }}
              >
                Cek-in!
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.primary400,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Klaim 25RB!
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            height: '100%',
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.black,
              width: StyleSheet.hairlineWidth,
              height: '70%',
              opacity: 0.2,
            }}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <SvgShopeeTransfer size={15} color={COLORS.primary400} />
              <Text
                style={{
                  fontSize: 14,
                }}
              >
                Transfer
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.grey500,
                fontSize: 12,
              }}
            >
              Gratis
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: COLORS.black,
            width: StyleSheet.hairlineWidth,
            height: '70%',
            opacity: 0.2,
          }}
        />
        <SvgSolarDollarBold size={28} color={COLORS.primary400} />
      </View>
    </LinearGradient>
  )
}
