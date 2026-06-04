export default {
  name: 'biografia',
  title: 'Biografía',
  type: 'document',
  fields: [
    {
      name: 'parrafos',
      title: 'Párrafos',
      type: 'array',
      of: [{type: 'text'}],
    },
  ],
}
