var topic = 
[
    "放假",
    "上課",
    "上課",
    "上課",
    "上課",
    "上課",
    "上課",
    "放假",
    "放假",
    "上課",
    "上課",
    "上課",
    "上課",
    "上課",
    "上課",
    "上課",
    "放假",
    "放假"
];


var startDate = new Date();
function setMonthAndDay(startMonth, startDay)
{
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

$(function(){
    $("button").click(function(){
        var Month=$("#month").val();
        var Day=$("#day").val();
        setMonthAndDay(Month,Day);
    });
});
