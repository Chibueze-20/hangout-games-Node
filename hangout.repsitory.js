const models = require('./models/index')


const changeAnswer= async (gameId,value)=>{
    const game = await models.Game.findOne({where:{id:gameId}})
    game.answer = value
    await game.save();
}

const response = async(playerId,response,gameId,session)=>{
    const player = await models.Player.findOne({where:{id:playerId}})
    const game = await models.Game.findOne({where:{id:gameId}})
    if (game.answer == response) {
        player.score = player.score+1
        await player.save()
    }
    const [result,created] = await models.Result.findOrCreate({
        where:{gameId,playerId,session},
        default:{response}
    });
    if (!created) {
        result.response=response
        await result.save()
    }
    return result
}

const getResponses = async(session,gameId)=>{
    const responses = await models.Result.findAll({
        where:{
            session,
            gameId
        },
        include:[
            {model:models.Player}
        ]
    });
    return responses
}

const loginUser = async(name)=>{
    const [user,created] = await models.Player.findOrCreate({where:{name},default:{score:0}})
    return user
}

module.exports={
    loginUser,
    getResponses,
    response,
    changeAnswer
}