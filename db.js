const MongoClient = require('mongodb').MongoClient;

// تعيين عنوان URL لاتصال MongoDB
const url = 'mongodb://127.0.0.1:27017/project';

// إنشاء اتصال بقاعدة البيانات
MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  // تعيين قيمة المتغير "db" بكائن قاعدة البيانات
  const db = client.db();

  // الآن يمكنك استخدام المتغير "db" في عمليات MongoDB الأخرى

  // مثال: إنشاء مجموعة (collection) بأسم "users"
  db.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("تم إنشاء مجموعة (collection) بأسم 'users'");
    client.close();
  });
});


// "users"
db.createCollection("users")

// "users"
db.users.insertMany([
  {
    "username": "admin",
    "password": "admin123",
    "role": "System Administrator"
  },
  {
    "username": "professor1",
    "password": "prof123",
    "role": "Professor"
  },
  {
    "username": "student1",
    "password": "student123",
    "role": "Student"
  }
])
// "departments"
db.createCollection("departments")

db.departments.insertMany([
  {
    "name": "computer science",
    "code": "CS"
  },
  {
    "name": "information technology",
    "code": "it"
  },
 ])

 //"subjects"
db.createCollection("subjects")

db.subjects.insertMany([
  {
    "name": "cs",
    "code": "CS101",
    "department": "cs",
    "prerequisites": ["CS100"]
  },
  {
    "name": "sw",
    "code": "CS201",
    "department": "cs",
    "prerequisites": ["CS101"]
  },

])
