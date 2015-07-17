define((require, exports, module) ->
    App        = require('App')
    Marionette = require('marionette')
    template   = require('tpl!pages/messenger/MessageItemView.tpl')
    moment     = require('moment')

    class MessageCollectionView extends Marionette.ItemView
        template: template

        className: 'item'

        events:
            'click .delete': 'deleteMessage'

        templateHelpers:
            getTime: ->
                moment(@time).format('HH:mm')

            getNick: ->
                @nick || 'Anonymous'

        deleteMessage: =>
            console.log("MessageItemView.deleteMessage", this.model.attributes)
            this.model.destroy({
                success: -> console.log("MessageItemView.deleteMessage.success")
                error: -> console.log("MessageItemView.deleteMessage.error")
            })

)