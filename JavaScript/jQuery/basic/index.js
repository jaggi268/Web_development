$(document).keypress(function (e) { 
    $("h1").text(e.key);
});
$("h1").on("mouseover",function()
{
    $("h1").css("color","purple");
});
$("h1").before("<button>Hello</button>");
$("h1").after("<button>Hello</button>");
$("h1").prepend("<button>Hello</button>");
$("h1").append("<button>Hello</button>");
// $("button").remove()