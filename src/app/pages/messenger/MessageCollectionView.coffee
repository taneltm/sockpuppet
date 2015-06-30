define((require, exports, module) ->
    $                 = require('jquery')
    App               = require('App')
    Marionette        = require('marionette')
    MessageItemView   = require('pages/messenger/MessageItemView')
    MessageCollection = require('pages/messenger/MessageCollection')

    class MessageCollectionView extends Marionette.CollectionView
        collection: new MessageCollection()

        childView: MessageItemView

        onAddChild: =>
            $body     = $('html, body')
            scrollTop = $body.height()

            $body.stop().animate({ scrollTop }, 1000)

)