define((require, exports, module) ->
    Sockpuppet   = require('sockpuppet');
    MessageModel = require('pages/messenger/MessageModel');

    class MessageCollection extends Sockpuppet.Collection
        sync: 'chat'
        
        model: MessageModel

        events:
            add:    'addMessage'
            remove: 'removeMessage'
            change: 'changeMessage'
            reset:  'resetMessage'

        initialize: =>
            # Backbone doesn't give us an events hash out of the box.
            # Here's how to bind events with the Marionette helper function.
            #   Marionette.bindEntityEvents(target, entity, hash)
            # 
            # This is just for demo purposes.
            Marionette.bindEntityEvents(@, @, @events)

            # Fetch the initial data and start socket listener
            @fetch({ remove: false })

        addMessage: (model) =>
            console.log('MessageCollection.addMessage', model.get('message'))

        removeMessage: =>
            console.log('MessageCollection.removeMessage')

        changeMessage: =>
            console.log('MessageCollection.changeMessage')

        resetMessage: =>
            console.log('MessageCollection.resetMessage')

)