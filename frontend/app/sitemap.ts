import { MetadataRoute } from 'next'

export default  async function sitemap(): Promise<MetadataRoute.Sitemap> {
    
  return [
    {
        url: `www.jlgsolutionsllp.com/about-us`,
        lastModified: new Date(),
    },
    {
        url: `www.jlgsolutionsllp.com/servicemoti`,
        lastModified: new Date(),
    },
    {
        url: `www.jlgsolutionsllp.com/Impact`,
        lastModified: new Date(),
    },
    {
        url: `www.jlgsolutionsllp.com/#contact`,
        lastModified: new Date(),
    },

  ]
}
    