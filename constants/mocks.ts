import type { ImageSourcePropType } from 'react-native/Libraries/Image/Image'

export const LIST_MENU: {
  icon: ImageSourcePropType
  name: string
}[] = [
  {
    icon: require('./../assets/images/menu/menu-charge.png'),
    name: 'Pulsa, Tagihan, dan Tiket',
  },
  {
    icon: require('./../assets/images/menu/menu-shopee-food.png'),
    name: 'ShopeeFood',
  },
  {
    icon: require('./../assets/images/menu/menu-shopee-plus.png'),
    name: 'Shopee Plus',
  },
  {
    icon: require('./../assets/images/menu/menu-shopee-local.png'),
    name: 'Shopee Pilih Lokal',
  },
  {
    icon: require('./../assets/images/menu/menu-shopee-mall.png'),
    name: 'Shopee Mall',
  },
  {
    icon: require('./../assets/images/menu/menu-shopeepay-nearby.png'),
    name: 'ShopeePay Sekitarmu',
  },
  {
    icon: require('./../assets/images/menu/menu-all-promo.png'),
    name: 'Semua Promo',
  },
  {
    icon: require('./../assets/images/menu/menu-shopee-paylater.png'),
    name: 'SPayLater',
  },
  {
    icon: require('./../assets/images/menu/menu-discount.png'),
    name: 'Termurah di Shopee',
  },
  {
    icon: require('./../assets/images/menu/menu-in-fashion.png'),
    name: 'inFashion',
  },
  {
    icon: require('./../assets/images/menu/menu-shopee-barokah.png'),
    name: 'Shopee Barokah',
  },

  {
    icon: require('./../assets/images/menu/menu-shopee-guaranteed.png'),
    name: 'Dikelola Shopee',
  },

  {
    icon: require('./../assets/images/menu/menu-shopee-supermarket.png'),
    name: 'Shopee Supermarket',
  },
  {
    icon: require('./../assets/images/menu/menu-voucher.png'),
    name: 'Gratis Ongkir dan Voucher',
  },
]

export const LIST_PRODUCT: {
  image: ImageSourcePropType
  label?: ImageSourcePropType
  name: string
  rating: number
  price: string
  totalSold: number
}[] = [
  {
    image: require('./../assets/images/mock/#808080.webp'),
    label: require('./../assets/images/other/label-mall-ori.png'),
    name: 'Samsung Galaxy S25 Ultra 12/518GB - Titanium Black - Garansi Resmi',
    rating: 4.6,
    price: 'Rp 24.999.999',
    totalSold: 2910,
  },
  {
    image: require('./../assets/images/mock/#808080.webp'),
    label: null,
    name: 'DJI Osmo Mobile 7 - Smartphone Gimbal Stabilizer | Native Tracking With Integrated Audio & Lighting Capabilities',
    rating: 4.2,
    price: 'Rp 1.240.000',
    totalSold: 19,
  },
  {
    image: require('./../assets/images/mock/#808080.webp'),
    label: require('./../assets/images/other/label-mall-ori.png'),
    name: 'KiiP Wireless DTH3 Bluetooth Headset Headphone Earphone Over Ear',
    rating: 4.1,
    price: 'Rp 329.000',
    totalSold: 188,
  },
  {
    image: require('./../assets/images/mock/#808080.webp'),
    label: require('./../assets/images/other/label-mall-ori.png'),
    name: 'iphone 128GB 13 RESMI PINK/BLUE/WHITE/BLACK',
    rating: 4.7,
    price: 'Rp 8.499.000',
    totalSold: 9123,
  },
  {
    image: require('./../assets/images/mock/#808080.webp'),
    label: null,
    name: 'Xiaomi 14T (12/256) (12/512) | Leica Summilux Optical Lens | MediaTek Dimensity 8300-Ultra | 144Hz AI display [Official Store]',
    rating: 4.9,
    price: 'Rp 6.499.000',
    totalSold: 658,
  },
  {
    image: require('./../assets/images/mock/#808080.webp'),
    label: require('./../assets/images/other/label-mall-ori.png'),
    name: '3M Scotch-Brite Sarung Tangan Fresh Lemon Scent S / M / L Heavy Duty Outdoor Gloves Karet 3M-Id-84',
    rating: 4.4,
    price: 'Rp 17.250',
    totalSold: 19,
  },
]
