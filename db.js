const mysql=require("mysql");
function connect()
{
    const connection=mysql.createConnection({
        host:"localhost",
        database:"dac",
        user:"root",
        password:"manager",
        port:3306
    })
    connection.connect();
    return connection;
}

module.exports={
    connect:connect
}