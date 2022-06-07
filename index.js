function receivesAFunction(callback){
    return callback();
}

receivesAFunction(hello())


function returnsANamedFunction(){
    const sample = function(){
        return `Hello World`;
    }
    return sample;
}



function returnsAnAnonymousFunction(){
    return function(){
        `Hello`;
    }
}