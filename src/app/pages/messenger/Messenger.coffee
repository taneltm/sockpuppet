define((require, exports, module) ->
    App          = require('App')
    Sockpuppet   = require('sockpuppet')
    tpl          = require('tpl!pages/messenger/Messenger.tpl')
    MessagesView = require('pages/messenger/MessageCollectionView')

    class Messenger extends Sockpuppet.Page
        pageRegion: App.layout.getRegion('main')

        className: 'container'
        
        template: tpl

        regions:
            'messages': '.region-messages'

        ui:
            '$form': 'form',
            '$input': 'input[type="text"]'

        events:
            'submit @ui.$form': 'onSubmit'

        send: Sockpuppet.sock.emit('chat')

        initialize: =>
            this.messagesView = new MessagesView()

        onRender: =>
            this.messages.show(this.messagesView)

        onSubmit: (e) =>
            e.preventDefault()

            $input  = this.ui.$input
            message = $input.val()

            $input.val('')

            this.send(message)

)