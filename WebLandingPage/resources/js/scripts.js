$(document).ready(
    function(){
        $('.about-section').waypoint(
            function(directtion){
                if(directtion =="down"){
                    $('nav').addClass('sticky');
                }
            }, {
                offset: '50px'
            }
        )
        
        
    }
)

// // // Link https://www.youtube.com/watch?v=UghGOHT-xLs&list=PL33lvabfss1xF24bh-2Xt2apnnZIWjKPY&index=26

// phần này còn thiếu bổ xung sau ,đang ở bài 25- howkteam - code stick Navigation