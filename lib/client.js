import  sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client=sanityClient({
    projectId:"rqoevcbp",
    dataset:'production',
    useCdn:true,
    apiVersion:'2021-08-31'
})

const builder=ImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);