/* Your Code Here */
function createEmployeeRecord(employee){
    const record = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return record
}

function createEmployeeRecords(arrayOfEmployees){
    const newArrayOfEmployee = arrayOfEmployees.map(createEmployeeRecord)
    return newArrayOfEmployee
}

function createTimeInEvent(dateStamp){
    let hours = dateStamp.split(" ")[1]
    let dates = dateStamp.split(" ")[0]
    const timeInEventObject = {
        type:'TimeIn',
        hour: parseInt(hours),
        date: dates
    }
    this.timeInEvents.push(timeInEventObject)
    return this
}

function createTimeOutEvent(dataStamp){
    let hours = dataStamp.split(" ")[1]
    let dates = dataStamp.split(" ")[0]
    const timeOutEventObject = {
        type: 'TimeOut',
        hour: parseInt(hours),
        date: dates
    }
    this.timeOutEvents.push(timeOutEventObject)
    return this
}

function hoursWorkedOnDate(form){
    let employeeIn = this.timeInEvents.find((element)=>{
     return element.date === form
    }) 
    let employeeOut = this.timeOutEvents.find((element)=>{
     return element.date === form
    })
    return (employeeOut.hour-employeeIn.hour)/100
 }
 
 function wagesEarnedOnDate(form){
     return this.payPerHour * hoursWorkedOnDate.call(this,form)
 }

 function findEmployeeByFirstName(srcArray,firstName){
    return srcArray.find(function(element){
       return element.firstName === firstName
    })
 }
 
//  function calculatePayroll(employee){
//     const payRoll =employee.map((object)=>object.timeInEvents.map((element)=>(object,element.date))).map((array)=>array.reduce((previous,current)=>previous+current,0))
//     return payRoll.reduce((prev,curr)=>prev+curr,0)
//  }

 let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

