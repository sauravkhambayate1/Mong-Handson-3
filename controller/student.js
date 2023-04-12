const {Information} = require('../models/student')
const studentEnrollment = async(req, res)=>{
    const studentData = req.body
  
    try{
        const information = new Information({
            firstName : studentData.firstname,
            lastName : studentData.lastname,
            salary : studentData.salary,
            department : studentData.department,
            lastCompany : studentData.lastCompany,
            lastSalary : studentData.lastSalary,
            overallExp : studentData.overallExp,
            contactInfo : studentData.contactInfo,
            yearGrad : studentData.yearGrad,
            gradStream : studentData.gradStream,
            age : studentData.age,
            email : studentData.email,
            mobile : studentData.mobile,
        })

          const validateresult = information.validateSync()
          const dbResponse = await information.save()
          console.log("data is saved" +dbResponse)
          return res.status(200).send({message: dbResponse})
    }
    catch(err){
        console.log("Error occured", err.message)
        return res.status(200).send({message : dbResponse})
    }


    

}

const findStudent = async(req, res)=>{
try{
    const queryparam = req.query
    const dbresponse = await Information.find(queryparam)
    return res.status(200).send({message:dbresponse})

}catch(error){
    res.status(500).send({message:error.message})
}
}

module.exports = {
    studentEnrollment, findStudent
}