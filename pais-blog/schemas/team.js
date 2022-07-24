export default {
    name:'team',
    title:'Team Member',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            validation:Rule=>Rule.required()
        },
        {
            name:'des',
            title:'Designation',
            type:'string',
            validation:Rule=>Rule.required()
        },
        {
            name:'image',
            title:'Member Image',
            type:'image',
            options:{
                hotspot:true
            }
        },
        {
            name:'twitter',
            title:'Twitter',
            description:'Enter your twitter account url here',
            type:'url',
        },
        {
            name:'facebook',
            title:'Facebook',
            description:'Enter your facebook account url here',
            type:'url',
        },
        {
            name:'linkedin',
            title:'Linkedin',
            description:'Enter your linkedin account url here',
            type:'url',
        },
        {
            name:'insta',
            title:'Instagram',
            description:'Enter your insta account url here',
            type:'url',
        },
    ]
}