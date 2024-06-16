let query = location.search;
let params = query.split('&');
for (i=0; i < params.length; i++) {
    console.log(params[i]);
}
