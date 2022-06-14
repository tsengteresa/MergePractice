$(function()
{
    $("button").click(function(){
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
        let topicCount = topic.length;
        for(var x=0;x<topicCount;x++)
        {
            $("#courseTable").append("<tr>"+
            `<td>${x+1}</td>`+
            `<td>${startDate.getMonth()+1+"/"+startDate.getDate()}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>");
            $("table td").each(function(){
                var holiday=$(this).text();
                if(holiday=="放假")
                {
                    $(this).css("color", "red");
                }
            })
            startDate.setDate(startDate.getDate()+7)
        }
    });
});