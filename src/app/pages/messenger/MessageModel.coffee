define((require, exports, module) ->
    Sockpuppet = require('sockpuppet')
    
    class MessageModel extends Sockpuppet.Model
        defaults: {
            time: null
            nick: null
            message: null
        }

)