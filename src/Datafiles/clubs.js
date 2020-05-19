const clubsdata = {
    club : [
        {id:1,image:'Images/clublogo/coding.jpeg',club:'Coding'},
        {id:2,image:'Images/clublogo/shades.jpeg',club:'Shades'},
        {id:3,image:'Images/clublogo/masquerade.jpeg',club:'Masquerade'},
        {id:4,image:'Images/clublogo/mod5.jpeg',club:'Mod5'},
        {id:5,image:'Images/clublogo/encore.jpeg',club:'Encore'},
        {id:6,image:'Images/clublogo/arcadia.jpg',club:'Arcadia'},
        {id:7,image:'Images/clublogo/obscura.jpeg',club:'Obscura'},
        {id:8,image:'Images/clublogo/literature.jpeg',club:'Literature'},
        {id:8,image:'Images/clublogo/dot.jpeg',club:'Dot'}

    ]
}

const clubReducer =(state=clubsdata,action)=>{
    return state;
}


export default clubReducer