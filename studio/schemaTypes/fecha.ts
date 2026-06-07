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
      name: 'linkMaps',
      title: 'Link de Google Maps',
      type: 'url',
      description: 'URL al mapa del lugar en Google Maps',
    },
    {
      name: 'fecha',
      title: 'Fecha del show',
      type: 'datetime',
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'string',
      description: 'Ej: Desde $12.000',
    },
    {
      name: 'edadMinima',
      title: 'Edad mínima',
      type: 'number',
      description: 'Ej: 14, 16, 18',
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      description: 'Descripción del show que aparece en la página del evento',
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
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Se genera automáticamente, hacé clic en Generate',
      options: {
        source: (doc: any) => {
          const ciudad = doc.ciudad?.toLowerCase().replace(/ /g, '-') ?? ''
          const fecha = doc.fecha
            ? new Date(doc.fecha)
                .toLocaleDateString('es-AR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit',
                })
                .replace(/\//g, '')
            : ''
          return `${ciudad}-${fecha}`
        },
        maxLength: 96,
      },
    },
  ],
}
