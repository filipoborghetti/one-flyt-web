export default {
  name: 'lanzamiento',
  title: 'Lanzamiento',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'tipo',
      title: 'Tipo',
      type: 'string',
      options: {
        list: ['Single', 'Álbum', 'EP'],
      },
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'orden',
      title: 'Orden',
      type: 'number',
    },
  ],
}
