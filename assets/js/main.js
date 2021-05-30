const URLAPI = 'https://pokeapi.co/api/v2/ability/'
var obj;
fetch(URLAPI)
  .then(response => response.json())
  .then(data => obj = data)
  .then(() => console.log(obj) )
  .then(() => fill_list(obj) )
  .then(() => fill_list2(obj) );


function fill_list(obj) {
var datalist = document.getElementById("exampleList");
obj.results.forEach(function(item, index){
    var option = document.createElement('option');
    option.value = item.name.toUpperCase();
    //option.onchange = "myfn()"
    datalist.appendChild(option);
});
}
function myfn(){
    window.alert(document.getElementById("ability").index);
}

$(document).ready(function() {
    $(".js-example-basic-multiple").select2({
    })
});


function fill_list2(obj) {
    obj.results.forEach( obj => renameKey( obj, 'url', 'id' ) );
    obj.results.forEach( obj => renameKey( obj, 'name', 'text' ) );
    $(document).ready(function() {
        $(".js-example-basic-multiple").select2({
            dropdownAutoWidth: true,
            data: obj.results
        })
    });
}

function renameKey ( obj, oldKey, newKey ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

