import { LinearGradient } from "expo-linear-gradient"
import { Image, Text, View } from "react-native"

import { COLORS } from "@/constants/colors"
import { LIST_PRODUCT } from "@/constants/mocks"
import { SvgMaterialSymbolsStarRounded } from "@/constants/svg-icons"
import { MasonryFlashList } from "@shopify/flash-list"

export const ListProduct = () => {
  return (
    <LinearGradient
      style={{
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
      }}
      locations={[0.1, 0.3]}
      colors={[COLORS.white, "transparent"]}
    >
      <MasonryFlashList
        data={LIST_PRODUCT}
        numColumns={2}
        renderItem={({ item, index }) => {
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
                  backgroundColor: COLORS.white,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    aspectRatio: 1,
                    flex: 1,
                  }}
                  source={item.image}
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
                      textAlignVertical: "top",
                    }}
                  >
                    {item.label && (
                      <>
                        <Image
                          style={{
                            height: 13,
                            width: 13 * (188 / 48),
                            transform: "translateY(1px)",
                          }}
                          source={item.label}
                        />{" "}
                      </>
                    )}
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                      backgroundColor: COLORS.yellow50,
                      paddingInline: 2,
                      borderStyle: "solid",
                      borderColor: COLORS.yellow400,
                      borderWidth: 0.8,
                      alignSelf: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <SvgMaterialSymbolsStarRounded
                      size={16}
                      color={COLORS.yellow400}
                    />
                    <Text style={{ fontSize: 11 }}>{item.rating}</Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
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
                      {item.price}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        flex: 1,
                        fontSize: 10,
                      }}
                    >
                      {item.totalSold} terjual
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
  )
}
