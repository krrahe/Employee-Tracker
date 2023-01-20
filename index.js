const { appendFile } = require('fs');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001 

sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`app listening on port ${PORT}!`)
    });
});