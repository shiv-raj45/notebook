let express = require ('express');
let app = express ();
let path=require('path');

const multer = require ('multer');
app.use(express.static(path.join(__dirname, './images')));
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './fontawesome-free-5.15.2-web')));


const fileStorage = multer.diskStorage ({
  destination: (req, res, cb) => {
    cb (null, './images');
  },
  filename: (req, file, cb) => {
    cb (null, Date.now () + '--' + path.extname(file.originalname));
  },
});
const upload = multer ({storage: fileStorage,
limits:{filesize:50000000},
fileFilter:function(req,file,cb)
{
  checkFileType(file,cb);
}
}).single ('note');

function checkFileType(file,cb)
{
  const fileTypes=/jpeg|jpg|png|pdf/;
  const extname=fileTypes.test(path.extname(file.originalname).toLowerCase())
const mimetype=fileTypes.test(file.mimetype);
if(mimetype && extname)
{
  return cb(null,true)
}
else{
  cb('err:Images and pdf only')
}

}

const mysql = require ('mysql');

let con = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shivraj',
});
con.connect (err => {
  if (err) throw err;
});

app.set ('view engine', 'ejs');

app.listen (5000, err => {
  if (err) throw err;
  console.log ('server running');
});

app.get ('/', (req, res) => {
  let retrieve = `select * from noteShare  order by id desc`;
  con.query (retrieve, (err, data) => {
    if (err) throw err;
    res.render ('noteShare', {data:data});
    
    

  });
});

app.get ('/write', (req, res) => {
  res.render ('contribute');
});
app.get('/aboutMe',(req,res)=>{
  res.sendFile('/views/aboutme.html',{root:__dirname})
})
app.post ('/', (req, res) => {
  upload (req, res, err => {
    if (err) 
    {
      res.sendFile('validator.html',{root:__dirname})
    }else{
    console.log (req.body.chapter);





    let imageupload=req.file.filename;
    let sql = `insert into noteShare (id,chapter,image,donar,subject,topic) values ('','${req.body.chapter}','${imageupload}','${req.body.contributer}','${req.body.subject}','${req.body.topic}')`;
    con.query (sql, (err, data) => {
      if (err) throw err;

    });
    res.redirect('/')
    }
  });

});
