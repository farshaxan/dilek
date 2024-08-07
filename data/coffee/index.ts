const data = [
  {
    category: 'Hot Drinks',
    item: 'Espresso',
    description: 'espresso.',
    image: '283A9587.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Cappuccino',
    description: 'espresso double shot, milk',
    image: '283A9601.JPG',
    price: 2,
  },
  {
    category: 'Hot Drinks',
    item: 'Latte',
    description: 'espresso single shot or double , milk',
    image: '283A9606.JPG',
    price: 2,
  },
  {
    category: 'Hot Drinks',
    item: 'Spanish Latte',
    description: 'espresso, condensed milk , milk',
    image: '283A9672.JPG',
    price: 2.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Americano',
    description: 'espresso double, hot water',
    image: '283A9575.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Espresso Machiato',
    description: 'espresso , Milk foam',
    image: '283A9621.JPG',
    price: 1.5,
  },
  {
    category: 'Hot Drinks',
    item: 'Moche',
    description: 'espresso double , chocolate sauce , condensed milk, Milk',
    image: '283A9611.JPG',
    price: 2.5,
  },
  {
    category: 'Tea and more',
    item: 'Black Tea',
    description: 'tea bag , hot water',
    image: '283A9653.JPG',
    price: 1,
  },
  {
    category: 'Tea and more',
    item: 'Somali Tea',
    description: 'tea powder, cinnamon, cardamom , milk',
    image: '283A9684.JPG',
    price: 1.5,
  },
  {
    category: 'Tea and more',
    item: 'Masala Tea',
    description: 'tea powder , cinnamon, cardamom, Ginger, milk',
    image: '283A9658.JPG',
    price: 1.5,
  },
  {
    category: 'Tea and more',
    item: 'Chai Tea',
    description: 'tea powder , milk , chai tea monin syrup',
    image: '283A9649.JPG',
    price: 2,
  },
  {
    category: 'Tea and more',
    item: 'Qaxwo Somali',
    description: 'qaxwo powder, milk',
    image: '283A9627.JPG',
    price: 1.5,
  },
  {
    category: 'Tea and more',
    item: 'Hot Chocolate',
    description: 'chocolate sauce monin, milk',
    image: '283A9638.JPG',
    price: 2,
  },
  {
    category: 'Tea and more',
    item: 'Dawa Tea',
    description: 'lemon , honey , Ginger , hot water',
    image: '283A9624.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced cappuccino',
    description: 'espresso, milk, ice.',
    image: '283A0376.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced latte',
    description: 'espresso, milk , ice',
    image: '283A0370.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced mocha',
    description: 'espresso, milk, chocolate powder, ice',
    image: '283A0394.JPG',
    price: 2,
  },
  {
    category: 'Ice Coffee',
    item: 'iced americano',
    description: 'espresso, water , ice',
    image: '283A0365.JPG',
    price: 1.5,
  },
  {
    category: 'Ice Coffee',
    item: 'iced spanish latte',
    description: 'espresso, condensed milk, milk, ice',
    image: '283A0384.JPG',
    price: 2,
  },
  {
    category: 'Ice Tea',
    item: 'Classic Iced Tea',
    description: 'tea, lemon , Sugar syrup , water, ice',
    image: 'DSC02239.JPG',
    price: 2,
  },
  {
    category: 'Ice Tea',
    item: 'Strawberry Iced Tea',
    description: 'tea, lemon, strawberry puree, water , ice',
    image: 'DSC02176.JPG',
    price: 2.5,
  },
  {
    category: 'Ice Tea',
    item: 'Peach Iced Tea',
    description: 'tea, lemon, peach puree, wate, ice',
    image: 'DSC02247.JPG',
    price: 2.5,
  },
  {
    category: 'Ice Tea',
    item: 'mango Iced Tea',
    description: 'tea, lemon , mango puree, water, ice',
    image: '283A0349.JPG',
    price: 2.5,
  },
  {
    category: 'Frappuccino',
    item: 'Caramel cafe frappe',
    description: 'vanilla frappe powder, caramel sauce, espresso, milk, ice',
    image: '283A0276 (1).JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'vanilla cafe frappe',
    description: 'vanilla frappe powder, vanilla syrup , espresso, milk, ice',
    image: '283A0274.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'mocha frappe',
    description: 'vanilla frappe powder , chocolate sauce, espresso, milk, ice',
    image: '283A0261.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'strawberry frappe',
    description: 'vanilla frappe powder , strawberry puree , milk, ice',
    image: '283A0187.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'blueberry frappe',
    description: 'vanilla frappe powder , blueberry puree , milk, ice',
    image: '283A0205.JPG',
    price: 3,
  },
  {
    category: 'Frappuccino',
    item: 'Peach frappe',
    description: 'vanilla frappe powder, Peach puree, milk , ice',
    image: '283A0229.JPG',
    price: 3,
  },
  {
    category: 'Mojito',
    item: 'Classic Mojito',
    description: 'mint, lemon, Sugar syrup , spirit, ice',
    image: 'DSC02155.JPG',
    price: 2,
  },
  {
    category: 'Mojito',
    item: 'Strawberry Mojito',
    description: 'mint , lemon, Strawberry puree, spirit, ice',
    image: 'DSC02176.JPG',
    price: 2.5,
  },
  {
    category: 'Mojito',
    item: 'Blueberry Mojito',
    description: 'mint, lemon, Blueberry puree, spirit, ice',
    image: 'DSC02192.JPG',
    price: 2.5,
  },
  {
    category: 'Mojito',
    item: 'Peach Mojito',
    description: 'mint , lemon, peach puree spirit , ice',
    image: 'DSC02212.JPG',
    price: 2.5,
  },
  {
    category: 'Smoothie',
    item: 'Mango smoothie',
    description: 'yogurt powder monin, mango puree, milk,',
    image: '283A0340.jpg',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Strawberry smoothie',
    description: 'yogurt powder monin, strawberry puree, milk, ice',
    image: '283A4254.jpg',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Blueberry smoothie',
    description: 'yogurt powder monin, blueberry puree, milk , ice',
    image: '283A0317.JPG',
    price: 3,
  },
  {
    category: 'Smoothie',
    item: 'Peach Smoothie',
    description: 'yogurt powder monin, peach puree, milk , ice',
    image: '283A03400.JPG',
    price: 3,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'Profiterole',
    image: '283A4343.jpg',
    price: 2,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'Rice Pudding',
    image: '283A8873.JPG',
    price: 2,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'Kaskul',
    image: '283A9945.JPG',
    price: 2,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'kazandibi',
    image: '283A0306.JPG',
    price: 2,
  },
  {
    category: 'Turkish Milky Desserts',
    item: 'Caramel Dream',
    image: '283A8864.JPG',
    price: 2,
  },
  {
    category: 'Bakery products',
    item: 'Mini Sandwich',
    image: 'DSC00012.JPG',
    price: 1.5,
  },
  {
    category: 'Bakery products',
    item: 'Tahini Bun',
    image: 'DSC00210.JPG',
    price: 2,
  },
  {
    category: 'Bakery products',
    item: 'Simit ',
    image: '283A4307.jpg',
    price: 1,
  },
  {
    category: 'Bakery products',
    item: 'Pogaca Plain',
    image: '283A4270.jpg',
    price: 1,
  },
  {
    category: 'Bakery products',
    item: 'Pogaca Mozarella Cheese',
    image: '283A4405.jpg',
    price: 1.25,
  },
  {
    category: 'Bakery products',
    item: 'Pogaca Feta Cheese',
    image: 'DSC00111.JPG',
    price: 1.25,
  },
  {
    category: 'Bakery products',
    item: 'Pogaca Olive',
    image: 'DSC00111.JPG',
    price: 1.25,
  },
  {
    category: 'Bakery products',
    item: 'Acma Plain',
    image: 'DSC00126.JPG',
    price: 1,
  },
  {
    category: 'Bakery products',
    item: 'Acma Mozarella Cheese',
    image: 'DSC00026.JPG',
    price: 1.25,
  },
  {
    category: 'Bakery products',
    item: 'Acma Feta Cheese',
    image: 'DSC00117.JPG',
    price: 1.25,
  },
  {
    category: 'Bakery products',
    item: 'Acma Olive',
    image: 'DSC00129.JPG',
    price: 1.25,
  },
  {
    category: 'Bakery products',
    item: 'Borek Minced Beef',
    image: '283A4389.jpg',
    price: 1.5,
  },
  {
    category: 'Bakery products',
    item: 'Borek Cheese',
    image: '283A4389.jpg',
    price: 1.5,
  },
  {
    category: 'Bakery products',
    item: 'Borek Potato',
    image: '283A4389.jpg',
    price: 1.5,
  },
  {
    category: 'Bakery products',
    item: 'Pizza',
    image: 'DSC00120.JPG',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Trilice Raspberry',
    image: '283A8870.JPG',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Trilice Caramel',
    image: 'DSC00271.JPG',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Trilice Lotus',
    image: 'DSC00020.JPG',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Éclair (Big)',
    image: 'DSC00244.JPG',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Éclair (Small)',
    image: 'DSC00244.JPG',
    price: 1.5,
  },
  {
    category: 'Pastries',
    item: 'French Eclair',
    image: 'DSC00251.JPG',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Donut',
    image: 'DSC00100.JPG',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Berliner',
    image: 'DSC00058.JPG',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Magnolia (Oreo)',
    image: '283A0293.JPG',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Magnolia Strawberry',
    image: '283A8883.JPG',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Sufle',
    image: 'DSC00081.JPG',
    price: 3,
  },
  {
    category: 'Pastries',
    item: 'Basbousa',
    image: '283A8955.JPG',
    price: 1.5,
  },
  {
    category: 'Pastries',
    item: 'Sekerpare',
    image: 'DSC00091.JPG',
    price: 1.5,
  },
  {
    category: 'Pastries',
    item: 'Mango Pie',
    image: 'DSC00228.JPG',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Apple Pie',
    image: '283A4409.jpg',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Revani',
    image: '283A9292.JPG',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Izmir Bombası',
    image: '283A9312.JPG',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Pürüzyen',
    image: '283A9296.JPG',
    price: 2,
  },
  {
    category: 'Pastries',
    item: 'Cinnamon Role',
    image: '283A9954.JPG',
    price: 2,
  },
  {
    category: 'Cakes',
    item: 'Cupcake',
    image: 'DSC00184.JPG',
    price: 1.5,
  },
  {
    category: 'Cakes',
    item: 'English cake',
    image: 'DSC00213.JPG',
    price: 5,
  },
  {
    category: 'Cakes',
    item: 'Chocolate cake',
    image: '283A8876.JPG',
    price: 2,
  },
  {
    category: 'Cakes',
    item: 'Carrot cake',
    image: 'DSC00055.JPG',
    price: 2,
  },
  {
    category: 'Cakes',
    item: 'Orange cake',
    image: 'DSC00149.JPG',
    price: 2,
  },
  {
    category: 'Cakes',
    item: 'Brownie cake',
    image: 'DSC00029.JPG',
    price: 2,
  },
  {
    category: 'Cakes',
    item: 'Pistachio slice cake',
    image: '283A8908.JPG',
    price: 3,
  },
  {
    category: 'Cakes',
    item: 'Nescafe Slice Cake',
    image: '283A8812.JPG',
    price: 3,
  },
  {
    category: 'Cakes',
    item: 'Raspbery Slice Cake',
    image: '283A8915.JPG',
    price: 3,
  },
  {
    category: 'Cakes',
    item: 'Orange Slice Cake',
    image: '283A8828.JPG',
    price: 3,
  },
  {
    category: 'Cakes',
    item: 'Mozaic Slice Cake',
    image: '283A8935.JPG',
    price: 3,
  },
  {
    category: 'Cakes',
    item: 'Opera Slice Cake',
    image: 'DSC00158.JPG',
    price: 3,
  },
  {
    category: 'Cakes',
    item: 'Heart Slice Cake',
    image: '283A0318.JPG',
    price: 3,
  },
  {
    category: 'Cakes',
    item: 'Banana Chocolate Malaga',
    image: 'DSC00200.JPG',
    price: 3,
  },
  {
    category: 'Cakes',
    item: 'Cheesecake Raspberry',
    image: '283A0323.JPG',
    price: 4,
  },
  {
    category: 'Cakes',
    item: 'Cheesecake Caramel',
    image: '283A0327.JPG',
    price: 4,
  },
  {
    category: 'Cakes',
    item: 'Cheesecake Lotus',
    image: 'DSC00151.JPG',
    price: 4,
  },
  {
    category: 'Cakes',
    item: 'Cheesecake Lemon',
    image: 'DSC00143.JPG',
    price: 4,
  },
  {
    category: 'Cakes',
    item: 'Cheesecake Chocolate',
    image: 'DSC00128.JPG',
    price: 4,
  },
  {
    category: 'Cakes',
    item: 'Cheesecake Oreo',
    image: 'DSC06410.JPG',
    price: 4,
  },
  {
    category: 'Cakes',
    item: 'Roll Cake',
    image: '283A8902.JPG',
    price: 3,
  },
  {
    category: 'Cakes',
    item: 'Cheese Petifur',
    image: 'DSC00179.JPG',
    price: 1.5,
  },
  {
    category: 'Cakes',
    item: 'Petifur',
    image: 'DSC00166.JPG',
    price: 1.5,
  },
  {
    category: 'Cakes',
    item: 'Tiramisu',
    image: '283A9276.JPG',
    price: 3,
  },
  {
    category: 'Birthday cakes',
    item: 'Small Cake',
    image: '283A0078.JPG',
    price: 15,
  },
  {
    category: 'Birthday cakes',
    item: 'Medium Cake',
    image: '283A0088.JPG',
    price: 25,
  },
  {
    category: 'Birthday cakes',
    item: 'Large Cake',
    image: '283A0105.JPG',
    price: 35,
  },
  {
    category: 'Cookies',
    item: 'Salty Cookies',
    image: 'DSC00116.JPG',
    price: 14,
  },
  {
    category: 'Cookies',
    item: 'Sweet Cookies',
    image: 'DSC00106.JPG',
    price: 14,
  },
  {
    category: 'Cookies',
    item: 'Orange Cookies',
    image: '283A4277.CR2',
    price: 1.5,
  },
  {
    category: 'Baklava',
    item: 'Baklava Pistachio',
    image: 'DSC00234.JPG',
    price: 5.5,
  },
  {
    category: 'Baklava',
    item: 'Baklava Walnut',
    image: 'DSC00069.JPG',
    price: 4,
  },
  {
    category: 'Baklava',
    item: 'Baklava Pistachio Roll',
    image: 'DSC09878.JPG',
    price: 7.5,
  },
  {
    category: 'Baklava',
    item: 'Baklava Walnut Roll',
    image: 'DSC00062.JPG',
    price: 4.5,
  },
  {
    category: 'Baklava',
    item: 'Baklava Pistachio Prenses',
    image: 'DSC09872.JPG',
    price: 5.5,
  },
  {
    category: 'Baklava',
    item: 'Baklava Şöbiyet',
    image: 'DSC09840.JPG',
    price: 4.5,
  },
  {
    category: 'Baklava',
    item: 'Cold Baklava',
    image: 'DSC00266.JPG',
    price: 4.5,
  },
]

const noImageAvailable =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

export const getItems = () => {
  const imageBaseUrl =
    'https://farshaxan.blr1.cdn.digitaloceanspaces.com/dilek/'
  return data?.map((item) => ({
    ...item,
    image: item?.image ? imageBaseUrl + item.image : noImageAvailable,
    price: item?.price || 0,
    description: item?.description || '',
  }))
}

export const getCategories = () => {
  return getItems().map((item) => item.category)
}

export const getItemsByCategory = (category: string) => {
  return getItems().filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  )
}
