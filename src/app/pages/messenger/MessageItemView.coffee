define((require, exports, module) ->
    App        = require('App')
    Marionette = require('marionette')
    template   = require('tpl!pages/messenger/MessageItemView.tpl')
    moment     = require('moment')

    class MessageCollectionView extends Marionette.ItemView
        template: template

        className: 'item'

        templateHelpers:
            getTime: =>
                moment(@time).format('HH:mm')

            getNick: =>
                @nick || 'Anonymous'

)