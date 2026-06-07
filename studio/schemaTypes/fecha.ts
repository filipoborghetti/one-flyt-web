export default {
  name: 'fecha',
  title: 'Fecha',
  type: 'document',
  fields: [
    {
      name: 'ciudad',
      title: 'Ciudad',
      type: 'string',
    },
    {
      name: 'disponibilidad',
      title: 'Disponibilidad',
      type: 'string',
      options: {
        list: [
          {title: 'Disponible', value: 'available'},
          {title: 'Sold Out', value: 'soldout'},
          {title: 'Cancelado', value: 'cancelled'},
        ],
      },
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'fecha',
      title: 'Fecha del show',
      type: 'datetime',
    },
    {
      name: 'flyer',
      title: 'Flyer',
      type: 'image',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
}
