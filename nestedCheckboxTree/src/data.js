export const checkboxData = [
  {
    id: '1',
    label: 'Fruits',
    children: [
      {
        id: '1-1',
        label: 'Citrus',
        children: [
          { id: '1-1-1', label: 'Orange' },
          { id: '1-1-2', label: 'Lemon' }
        ]
      },
      { id: '1-2', label: 'Banana' }
    ]
  },
  {
    id: '2',
    label: 'Vegetables',
    children: [
      { id: '2-1', label: 'Tomato' },
      { id: '2-2', label: 'Potato' }
    ]
  },
  {
    id:'3',
    label: 'Dairy',
    children: [
      { id: '3-1', label: 'Milk', children:[{id:'3-1-1',label:'Low Fat'},{id:'3-1-2',label:'High Fat'},{id:'3-1-3',label:'Normal'}] },
      { id: '3-2', label: 'Cheese' }
    ]
  }
];
