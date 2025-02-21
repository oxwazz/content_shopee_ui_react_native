import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Flashsale } from '@/components/index/flashsale'
import { Header } from '@/components/index/header'
import { ListMenu } from '@/components/index/list-menu'
import { ShopeeLive } from '@/components/index/shopee-live'
import { SimpleWalletInfo } from '@/components/index/simple-wallet-info'
import { COLORS } from '@/constants/colors'
import { MasonryFlashList } from '@shopify/flash-list'
import { LinearGradient } from 'expo-linear-gradient'
import Svg, { Path } from 'react-native-svg'

export default function Page() {
  const insets = useSafeAreaInsets()

  return (
    <>
      <ScrollView
        style={{
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: COLORS.backgroundColor,
        }}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >
        <Header />
        <SimpleWalletInfo />
        <ListMenu />
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            paddingInline: 10,
            paddingTop: 10,
          }}
        >
          <ShopeeLive />
          <Flashsale />
        </View>

        <LinearGradient
          style={{
            marginTop: 10,
            padding: 10,
            borderRadius: 8,
          }}
          locations={[0.1, 0.3]}
          colors={[COLORS.white, 'transparent']}
        >
          <MasonryFlashList
            data={[
              {
                title: 'Item 1',
              },
              {
                title: 'Item 2',
              },
              {
                title: 'Item 3',
              },
              {
                title: 'Item 4',
              },
              {
                title: 'Item 5',
              },
              {
                title: 'Item 6',
              },
            ]}
            numColumns={2}
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            renderItem={({ item, index }: any) => {
              const colNum = 2
              const gap = 8
              return (
                <View
                  style={{
                    flexGrow: 1,
                    paddingLeft: index % colNum ? gap / 2 : 0,
                    paddingRight: index % colNum ? 0 : gap / 2,
                    paddingTop: index >= colNum ? gap : 0,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 4,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      style={{
                        height: '100%',
                        width: '100%',
                        aspectRatio: 1,
                        flex: 1,
                      }}
                      source={require('../../assets/images/mock/#808080.webp')}
                    />
                    <View
                      style={{
                        padding: 8,
                        gap: 4,
                      }}
                    >
                      <Text
                        numberOfLines={2}
                        style={{
                          textAlignVertical: 'top',
                        }}
                      >
                        <Image
                          style={{
                            height: 13,
                            width: 13 * (188 / 48),
                            transform: 'translateY(1px)',
                          }}
                          source={require('../../assets/images/other/label-mall-ori.png')}
                        />{' '}
                        Samsung Galaxy S25 Ultra 12/518GB - Titanium Black -
                        Garansi Resmi
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 2,
                          backgroundColor: COLORS.yellow50,
                          paddingInline: 2,
                          borderStyle: 'solid',
                          borderColor: COLORS.yellow400,
                          borderWidth: 0.8,
                          alignSelf: 'flex-start',
                          justifyContent: 'center',
                        }}
                      >
                        <Svg width={16} height={16} viewBox="0 0 24 24">
                          <Path
                            fill={COLORS.yellow400}
                            d="m12 17.275-4.15 2.5q-.275.175-.575.15t-.525-.2-.35-.437-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562.3-.45.55-.225l4.85-.425 1.875-4.45q.125-.3.388-.45t.537-.15.537.15.388.45l1.875 4.45 4.85.425q.35.05.55.225t.3.45.038.563-.313.512l-3.675 3.175 1.1 4.725q.075.325-.05.588t-.35.437-.525.2-.575-.15z"
                          />
                        </Svg>
                        <Text style={{ fontSize: 11 }}>4.6</Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <Text
                          style={{
                            color: COLORS.primary400,
                            fontWeight: 600,
                            fontSize: 16,
                          }}
                        >
                          Rp 24.999.999
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={{
                            flex: 1,
                            fontSize: 10,
                          }}
                        >
                          2910 terjual
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }}
            estimatedItemSize={200}
          />
        </LinearGradient>
      </ScrollView>
      <StatusBar style="light" backgroundColor={COLORS.primary400} />
    </>
  )
}
