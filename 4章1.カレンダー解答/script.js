// 'use strict'

// const weekDays = ["日", "月", "火", "水", "木", "金", "土"];

// 	function createCalenderData() {
// 		let nowDate = new Date();
// 		let nowYear = nowDate.getFullYear();
// 		let nowMonth = nowDate.getMonth() + 1;
// 		let nowDay = nowDate.getDate();

// 		let firstDay = new Date(nowYear, nowMonth - 1, 1);
// 		let firstWeekDay = firstDay.getDay();
// 		console.log(nowYear,nowMonth,weekDays[firstWeekDay])

// 		let lastDay = new Date(nowYear, nowMonth, 0).getDate();

// 		return { "nowYear": nowYear, "nowMonth": nowMonth, "nowDay": nowDay, "firstWeekDay": firstWeekDay, "lastDay": lastDay }
// 	}

// 	function printCalender() {
// 		let calenderData = createCalenderData();
// 		let calenderSource = ``;
// 		let calenderColumn = Math.ceil((calenderData.firstWeekDay + calenderData.lastDay) / weekDays.length);
// 		calenderSource += `<table border='1'><tr><th colspan='7'><span>${calenderData.nowYear}年${calenderData.nowMonth}月</span></th></tr><tr>`;

// 		for (let weekDay in weekDays) {
// 			calenderSource += `<th>${weekDays[weekDay]}</th>`;
// 		}
// 		calenderSource += `</tr>`;
		
// 		for (let weekNum = 0 ; weekNum < calenderColumn ; weekNum++) {
// 			calenderSource += `<tr>`;
// 			for (let weekDay = 1; weekDay <= weekDays.length; weekDay++) {
// 				let day = (weekNum * weekDays.length + weekDay - calenderData.firstWeekDay);

// 				if (calenderData.nowDay == day) {
// 					calenderSource += `<td bgcolor='#ffdddd'>`;
// 				} else {
// 					calenderSource += `<td>`;
// 				}
// 				if (day > 0 && day <= calenderData.lastDay) {
// 					calenderSource += `${day}`;
// 				} 
// 				calenderSource += `</td>`;
// 			}
// 			calenderSource += `</tr>`;
// 		}
// 		calenderSource += `</table>`;
// 		content.insertAdjacentHTML('beforeend', calenderSource);	
// 	}
// 	printCalender()