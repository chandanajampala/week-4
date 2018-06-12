var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const studentList = [
    {
        id:1,
        name:'abc',
        dept:'CSE',

    },
    {
        id:2,
        name:'def',
        dept:'IT',

    },
    {
        id:3,
        name:'ghi',
        dept:'EEE',

    }
    
]

app.get('/api/index',(req,resp) =>{
    resp.json(studentList);
   // console.log(studentList);
});
 
app.post('/api/create',(req,resp)=>{
       const newStudent = {
           name: req.body.name,
           id: studentList.length+1,
           dept:req.body.dept
       }
       studentList.push(newStudent);
       resp.json(newStudent.id);
     //  console.log(studentList);
});

app.delete('/api/delete/:id',(req,resp)=>
{
       // console.log(req.params);
       const toBeDeletedId = parseInt(req.params.id);
       const toBeDeleted = studentList.findIndex(student =>student.id === toBeDeletedId);
       studentList.splice(toBeDeleted,1);
       resp.json(studentList);
});
app.put('/api/put/:id',(req,resp)=>{
    const toBeChangedId = parseInt(req.params.id);

    const toBeChanged = studentList.findIndex(student =>student.id === toBeChangedId);
    studentList[toBeChanged].name = req.body.name;
    studentList[toBeChanged].dept = req.body.dept;
    resp.json(studentList[toBeChanged]);
   // console.log(studentList[toBeChanged]);
    //
});
app.get('/api/student/:id', (req, resp) => {
    console.log(req);
    const idToBeFetched = parseInt(req.params.id);
    const studentToBeFetched = studentsList.find(student => student.id === idToBeFetched);
    resp.json(studentToBeFetched);
});

app.patch('/api/patch/:id',(req,resp)=>{
   const idToBePatched = parseInt(req.params.id);

   const toBePatched = studentList.findIndex(student =>student.id === idToBePatched);
   studentList[toBePatched].name = req.body.name;
   studentList[toBePatched].dept = req.body.dept;
   resp.json(studentList[toBePatched]);
});


app.listen(5000);