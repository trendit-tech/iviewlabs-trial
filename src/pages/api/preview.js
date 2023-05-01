import { createClient } from 'contentful';

export default async function preview(req, res) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
  });

  const { slug } = req.query;

  try {
    const entry = await client.getEntries({
      content_type: 'recepie',
      'fields.id': slug,
      include: 2,
    });

    if (entry.items.length === 0) {
      return res.status(404).json({ message: 'Not found' });
    }

    const post = entry.items[0];
    res.setPreviewData({});
    res.writeHead(307, { Location: `/recepie/${post.fields.slug}` });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}