const config ={
    production:{
        'SECRET':process.env.SECRET,
        "DATABASE":process.env.MONG0DB_URI
    },
    default:{
        'SECRET':"jss892358sssssssbchhd",
        "DATABASE":"mongodb://mahen:12345a@ds119449.mlab.com:19449/book_shelf"
    }
}

exports.get = function get(env){
    return config[env] || config.default
}