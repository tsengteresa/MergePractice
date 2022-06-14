$(function()
{
    $("input").on("click",function()
    {
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        if($("h1").text() == "拉麵")
        {
            $("img").attr("src","HandPulledNoodle.jpg");
        }
        else if($("h1").text() == "滷肉飯")
        {
            $("img").attr("src","Rice.jpg");
        }
        else if($("h1").text() == "水餃")
        {
            $("img").attr("src","dumpling.jpg");
        }
    });
});