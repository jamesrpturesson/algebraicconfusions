let query = location.search.split('?')[1];
let params = query.split('&');
let par = null;
let tags = [];
for (i=0; i < params.length; i++) {
    par = params[i].split('=');
    if (par[0] == 'tags'){
        tags = par[1].split(',');
    }
}

