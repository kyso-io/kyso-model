
import slugify from 'slugify'

export default function slug(url: string) {
  if(url) {
    return slugify(url, {
      replacement: '-',
      lower: true,
      strict: true,
      trim: true  
    })
  } else {
    return undefined
  }  
}