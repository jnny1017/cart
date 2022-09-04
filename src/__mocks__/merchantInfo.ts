const merchantInfo = {
  minimum_order_price: 15000,
  merchant_name: '오모가리 김치찌개',
  items: [
    {
      category_id: 'chicken',
      category_name: '치킨',
      menu: [
        {
          id: 'item1',
          name: '순살치킨 6조각',
          price: 5000,
        },
      ],
    },
    {
      category_id: 'bob',
      category_name: '밥류',
      menu: [
        {
          id: 'item2',
          name: '꼬마 김밥',
          price: 3500,
        },
        {
          id: 'item3',
          name: '에그마요미니덮밥',
          price: 4500,
        },
        {
          id: 'item4',
          name: '돈까스마요덮밥',
          price: 6500,
        },
        {
          id: 'item5',
          name: '치킨마요덮밥',
          price: 7500,
        },
      ],
    },
    {
      category_id: 'ddeokbboki',
      category_name: '떡볶이',
      menu: [
        {
          id: 'item6',
          name: '마라떡볶이',
          price: 10000,
        },
        {
          id: 'item3',
          name: '떡복이',
          price: 4000,
        },
        {
          id: 'item4',
          name: '돈까스 떡볶이',
          price: 5500,
        },
        {
          id: 'item5',
          name: '치킨마요덮밥',
          price: 7500,
        },
      ],
    },
  ],
  discounts: [
    {
      id: 'chutjumun',
      name: '첫 주문 할인 🐷',
      discount_rate: 3,
    },
    {
      id: 'discount_1',
      name: '단골 할인 ☺️',
      discount_rate: 30,
    },
    {
      id: 'discount_2',
      name: '집에가고싶다..🥲',
      discount_rate: 80,
    },
    {
      id: 'discount_3',
      name: '🦆 리뷰 이벤트!',
      discount_rate: 10,
    },
  ],
};

export default merchantInfo;
