const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const logErrorHandlerMiddleware = require('./middleware/logErrorHandlerMiddleware');
const saveLogHandlerMiddleware = require('./middleware/saveLogHandlerMiddleware');

app.set('PORT', process.env.PORT || 3000);

function miGuardian(req, res, next){
    console.log('Tiene carta de invitación para entrar?');
    if(req.query.invitationCard){
        console.log('si');
        next();
    }else{
        console.log('no');
        res.status(404).json({
            result: {
                message: 'No tienes carta de invitación para entrar'
            }
        })
    }
}

app.use(miGuardian);
app.use(routes);

app.use(logErrorHandlerMiddleware);
app.use(saveLogHandlerMiddleware);
app.use(errorHandlerMiddleware);

app.listen(app.get('PORT'), () => {
    console.log(`Server is running on http://localhost:${app.get('PORT')}`);
})