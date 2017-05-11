import shortId from 'shortid';
import { fromJS } from 'immutable';

const catalogData = fromJS({
  man: [
    {
      id: shortId.generate(),
      title: 'T-shirt',
      size: ['M', 'XL', 'XXL'],
      color: ['#165eb9', '#ffe637', '#535253'],
      name: 't-shirt',
      format: 'png',
      price: 5.00
    },
    {
      id: shortId.generate(),
      title: 'Pant forclaz',
      size: ['30', '32', '36'],
      color: [],
      name: 'quechua-pant-forclaz',
      format: 'png',
      price: 30.00
    },
    {
      id: shortId.generate(),
      title: 'Mckinley katma',
      size: ['10litri'],
      color: [],
      name: 'mckinley-katma',
      format: 'png',
      price: 60.00
    },
    {
      id: shortId.generate(),
      title: 'Jack Wolfskin',
      size: ['L', 'XL', 'XXL'],
      color: [],
      name: 'jack-wolfskin',
      format: 'png',
      price: 65.00
    },
    {
      id: shortId.generate(),
      title: 'T-shirt',
      size: ['M', 'XL', 'XXL'],
      color: ['#165eb9', '#ffe637', '#535253'],
      name: 't-shirt',
      format: 'png',
      price: 70.00
    },
    {
      id: shortId.generate(),
      title: 'Pant forclaz',
      size: ['30', '32', '36'],
      color: [],
      name: 'quechua-pant-forclaz',
      format: 'png',
      price: 75.00
    },
    {
      id: shortId.generate(),
      title: 'Mckinley katma',
      size: ['10litri'],
      color: [],
      name: 'mckinley-katma',
      format: 'png',
      price: 80.00
    },
    {
      id: shortId.generate(),
      title: 'Jack Wolfskin',
      size: ['L', 'XL', 'XXL'],
      color: [],
      name: 'jack-wolfskin',
      format: 'png',
      price: 85.00
    },
    {
      id: shortId.generate(),
      title: 'T-shirt',
      size: ['M', 'XL', 'XXL'],
      color: ['#165eb9', '#ffe637', '#535253'],
      name: 't-shirt',
      format: 'png',
      price: 90.00
    },
    {
      id: shortId.generate(),
      title: 'Pant forclaz',
      size: ['30', '32', '36'],
      color: [],
      name: 'quechua-pant-forclaz',
      format: 'png',
      price: 95.00
    },
    {
      id: shortId.generate(),
      title: 'Mckinley katma',
      size: ['10litri'],
      color: [],
      name: 'mckinley-katma',
      format: 'png',
      price: 100.00
    },
    {
      id: shortId.generate(),
      title: 'Jack Wolfskin',
      size: ['L', 'XL', 'XXL'],
      color: [],
      name: 'jack-wolfskin',
      format: 'png',
      price: 100.99
    }
  ],
  women: [
    {
      id: shortId.generate(),
      title: 'T-shirt',
      size: ['M', 'XL', 'XXL'],
      color: ['#165eb9', '#ffe637', '#535253'],
      name: 't-shirt',
      format: 'png',
      price: 5.00
    },
    {
      id: shortId.generate(),
      title: 'Pant forclaz',
      size: ['30', '32', '36'],
      color: [],
      name: 'quechua-pant-forclaz',
      format: 'png',
      price: 30.00
    },
    {
      id: shortId.generate(),
      title: 'Mckinley katma',
      size: ['10litri'],
      color: [],
      name: 'mckinley-katma',
      format: 'png',
      price: 60.00
    },
    {
      id: shortId.generate(),
      title: 'Jack Wolfskin',
      size: ['L', 'XL', 'XXL'],
      color: [],
      name: 'jack-wolfskin',
      format: 'png',
      price: 65.00
    },
    {
      id: shortId.generate(),
      title: 'T-shirt',
      size: ['M', 'XL', 'XXL'],
      color: ['#165eb9', '#ffe637', '#535253'],
      name: 't-shirt',
      format: 'png',
      price: 70.00
    },
    {
      id: shortId.generate(),
      title: 'Pant forclaz',
      size: ['30', '32', '36'],
      color: [],
      name: 'quechua-pant-forclaz',
      format: 'png',
      price: 75.00
    },
    {
      id: shortId.generate(),
      title: 'Mckinley katma',
      size: ['10litri'],
      color: [],
      name: 'mckinley-katma',
      format: 'png',
      price: 80.00
    },
    {
      id: shortId.generate(),
      title: 'Jack Wolfskin',
      size: ['L', 'XL', 'XXL'],
      color: [],
      name: 'jack-wolfskin',
      format: 'png',
      price: 85.00
    },
    {
      id: shortId.generate(),
      title: 'T-shirt',
      size: ['M', 'XL', 'XXL'],
      color: ['#165eb9', '#ffe637', '#535253'],
      name: 't-shirt',
      format: 'png',
      price: 90.00
    },
    {
      id: shortId.generate(),
      title: 'Pant forclaz',
      size: ['30', '32', '36'],
      color: [],
      name: 'quechua-pant-forclaz',
      format: 'png',
      price: 95.00
    },
    {
      id: shortId.generate(),
      title: 'Mckinley katma',
      size: ['10litri'],
      color: [],
      name: 'mckinley-katma',
      format: 'png',
      price: 100.00
    },
    {
      id: shortId.generate(),
      title: 'Jack Wolfskin',
      size: ['L', 'XL', 'XXL'],
      color: [],
      name: 'jack-wolfskin',
      format: 'png',
      price: 100.99
    }
  ],
  children: [
    {
      id: shortId.generate(),
      title: 'T-shirt',
      size: ['M', 'XL', 'XXL'],
      color: ['#165eb9', '#ffe637', '#535253'],
      name: 't-shirt',
      format: 'png',
      price: 5.00
    },
    {
      id: shortId.generate(),
      title: 'Pant forclaz',
      size: ['30', '32', '36'],
      color: [],
      name: 'quechua-pant-forclaz',
      format: 'png',
      price: 30.00
    },
    {
      id: shortId.generate(),
      title: 'Mckinley katma',
      size: ['10litri'],
      color: [],
      name: 'mckinley-katma',
      format: 'png',
      price: 60.00
    },
    {
      id: shortId.generate(),
      title: 'Jack Wolfskin',
      size: ['L', 'XL', 'XXL'],
      color: [],
      name: 'jack-wolfskin',
      format: 'png',
      price: 65.00
    },
    {
      id: shortId.generate(),
      title: 'T-shirt',
      size: ['M', 'XL', 'XXL'],
      color: ['#165eb9', '#ffe637', '#535253'],
      name: 't-shirt',
      format: 'png',
      price: 70.00
    },
    {
      id: shortId.generate(),
      title: 'Pant forclaz',
      size: ['30', '32', '36'],
      color: [],
      name: 'quechua-pant-forclaz',
      format: 'png',
      price: 75.00
    },
    {
      id: shortId.generate(),
      title: 'Mckinley katma',
      size: ['10litri'],
      color: [],
      name: 'mckinley-katma',
      format: 'png',
      price: 80.00
    },
    {
      id: shortId.generate(),
      title: 'Jack Wolfskin',
      size: ['L', 'XL', 'XXL'],
      color: [],
      name: 'jack-wolfskin',
      format: 'png',
      price: 85.00
    },
    {
      id: shortId.generate(),
      title: 'T-shirt',
      size: ['M', 'XL', 'XXL'],
      color: ['#165eb9', '#ffe637', '#535253'],
      name: 't-shirt',
      format: 'png',
      price: 90.00
    },
    {
      id: shortId.generate(),
      title: 'Pant forclaz',
      size: ['30', '32', '36'],
      color: [],
      name: 'quechua-pant-forclaz',
      format: 'png',
      price: 95.00
    },
    {
      id: shortId.generate(),
      title: 'Mckinley katma',
      size: ['10litri'],
      color: [],
      name: 'mckinley-katma',
      format: 'png',
      price: 100.00
    },
    {
      id: shortId.generate(),
      title: 'Jack Wolfskin',
      size: ['L', 'XL', 'XXL'],
      color: [],
      name: 'jack-wolfskin',
      format: 'png',
      price: 100.99
    }
  ]
});

export default catalogData;
