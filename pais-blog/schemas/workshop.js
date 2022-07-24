export default{
    name:'workshop',
    title:'Workshop',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'desc',
            title:'Description',
            type:'string',
            options:{
                maxLength:150
            }
        },
        {
            name:'gallery',
            title:'Gallery',
            type:'array',
            of:[{type:'image'}],
            options:{
                hotspot:true
            }
        },
        {
            name:'svgLogo',
            title:'SVG logo',
            description:'SVG logo for its display on home page copy svg html and paste it here',
            type:'text'
        }
    ]
}