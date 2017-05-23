

var fillit = (obj) => {
        var source   = $("#projectTemplate").html();
        var template = Handlebars.compile(source);
        var html = template(obj);
        $('#results').html(html);
}


$.getJSON("/projects", function(results){
    fillit(results)
});


$( document ).ready(function() { 

    $('#about').click(()=>{
        console.log('about')
    });

    $('#contact').click(()=>{
        console.log('contact')
    });
})