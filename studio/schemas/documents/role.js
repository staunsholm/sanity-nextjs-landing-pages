import client from '../../client';

export default {
  name: 'role',
  type: 'document',
  title: 'Role',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of role',
    },
    {
      name: 'description',
      type: 'string',
      description:
        'This is just a description, what you enter is not used anywhere',
      title: 'Description',
    },
    {
      name: 'pJRvusiHu',
      type: 'boolean',
      title: 'Mikkel Staunsholm',
    },
    {
      name: 'pSAxOxTDF',
      type: 'boolean',
      title: 'Daniel Torp',
    },
    {
      name: 'psw81qrFJ',
      type: 'boolean',
      title: 'Marianne Dale',
    },
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
};
