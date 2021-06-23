import 'react-i18next'

import CommonTypes from '../public/locales/se/common.json'
import AdminCommonTypes from '../public/locales/se/admin-common.json'

import AdminNewsTypes from '../public/locales/se/admin-news.json'
import AdminMenusTypes from '../public/locales/se/admin-menus.json'
import AdminUsersTypes from '../public/locales/se/admin-users.json'
import AdminEventsTypes from '../public/locales/se/admin-events.json'
import AdminNationTypes from '../public/locales/se/admin-nation.json'
import AdminActivityTypes from '../public/locales/se/admin-activity.json'
import AdminLocationTypes from '../public/locales/se/admin-locations.json'

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common'
        resources: {
            'common': typeof CommonTypes
            'admin-common': typeof AdminCommonTypes
            'admin-users': typeof AdminUsersTypes
            'admin-news': typeof AdminNewsTypes
            'admin-menus': typeof AdminMenusTypes
            'admin-nation': typeof AdminNationTypes
            'admin-events': typeof AdminEventsTypes
            'admin-activity': typeof AdminActivityTypes
            'admin-locations': typeof AdminLocationTypes
        }
    }
}
