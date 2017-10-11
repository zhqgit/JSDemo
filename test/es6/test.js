function where(collection, source) {
    var arr = [];
    // What's in a name?
    var sourceProperty = Object.keys(source);
    arr = collection.filter(function(value){
        sourceProperty.map(function(x){
            if(value.hasOwnProperty(x)){
                return 'dd';
            }
        });
    });

    console.log(arr);
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  