/*global $*/
//check of all the todos by clicking
$("ul").on("click","li",function(){
   $(this).toggleClass("completed");
});

//click on X to delete today
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });
    event.stopPropagation();
});
//removing first empty li 
$("li").css("display","none");
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        //runs code when enter key is pressed
        //grabbinh new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span> " + todoText + "</li>");
    }
});

$(".fa-pen-square").click(function(){
    $("input[type='text']").fadeToggle();
})
