var catContainer;
var detailContainer;
function getObjectsFromApi(type)
{  
    console.log('caught getObjsFromApi');
             $.ajax({
                 method: 'GET',
                 url: "http://danderson.mydevryportfolio.com/Backend/get_list.php?type="+type
            }).done(function(data) {
            catContainer = data;     
            return sendItBackLoop(catContainer);     
            });
}

function getDetailsFromApi(id)
{  
    console.log(id);
    console.log('caught getObjsFromApi');
             $.ajax({
                 method: 'GET',
                 url: "http://danderson.mydevryportfolio.com/Backend/get_detail.php?id="+id
            }).done(function(data) {
            detailContainer = data;
            console.log(detailContainer);
            return sendItBackLoop(detailContainer);     
            });
}

function sendItBackLoop(apiResponse){
    if(apiResponse !== undefined){
        console.log("sending it back");
        return apiResponse;
    }
    else
    {
    setTimeout(() => {
    sendItBack(apiResponse);
    }, 500);
    }
}
