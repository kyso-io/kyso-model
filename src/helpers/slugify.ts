import slugify from 'slugify';

export default function slug(url: string) {
  if (url) {
    return slugify(url, {
      replacement: '-',
      lower: true,
      strict: true,
      trim: true,
    });
  } else {
    // Generate random string
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
