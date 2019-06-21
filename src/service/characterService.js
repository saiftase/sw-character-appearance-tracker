import request from 'superagent'; // Will be used for accessing SWAPI

const characterService = store => next => action => {
    next(action);
    switch (action.type) {
        case 'GET_CHARACTERS':
            request
                .get('/characters')
                .end( (err, res) => {
                    if(err){
                        next({
                                 type: 'GET_CHARACTERS_ERROR',
                                 err
                             })
                    }
                    const data = JSON.parse(res.text).characters;
                    next({
                         type: 'GET_CHARACTERS_RECEIVED',
                         data
                    });
                });
            break;

        case 'GET_MOVIES':
            const character = action.character;
            request
                .get(`/${character}/films`)
                .end( (err, res) => {
                    if(err){
                        next({
                            type:'GET_MOVIES_ERROR',
                            err
                         })
                    }
                    const data = JSON.parse(res.text);
                    next({
                        type: 'GET_MOVIES_RECEIVED',
                        data
                    })
                });
            break;
        default:
            break;
    }

};

export default characterService;