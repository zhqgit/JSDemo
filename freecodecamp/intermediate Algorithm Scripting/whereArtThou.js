/**
 * Created by ZHQ on 2017/10/9.
 */
function where(collection, source) {
    var arr = [];
    // What's in a name?
    var sourceProperty = Object.keys(source);

    for(let i=0;i<collection.length;i++){
        let count = 0;
        for(let j=0;j<sourceProperty.length;j++){
            if(collection[i].hasOwnProperty(sourceProperty[j])){
                if(collection[i][sourceProperty[j]] === source[sourceProperty[j]]){
                    count++;
                }
            }
        }
        if(count === sourceProperty.length){
            arr.push(collection[i]);
        }
    }

    console.log(arr);
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

