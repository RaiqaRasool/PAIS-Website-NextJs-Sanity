export default{
    name:'about',
    title:'About',
    description:'Only First doc from it will be taken',
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
            type:'text'
        },
        {
            name:'image',
            title:'About Us Image',
            type:'image'
        }
        ,
        {
            name:'points',
            title:'Points',
            description:'Mention here 4 main points about society',
            type:'array',
            of:[{type:'string'}],
            validation:Rule=>Rule.max(4)
        }
    ]
}