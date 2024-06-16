let query = location.search.split(?);
let params = query.split('&');
let par = null;
for (i=0; i < params.length; i++) {
    console.log(params[i]);
    par = params[i].split('=');
    if (par[0] == 'tags'){
        console.log('yes');
    }
}
