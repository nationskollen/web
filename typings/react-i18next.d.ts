import 'react-i18next'

import CommonTypes from '../public/locales/se/common.json'
import AdminCommonTypes from '../public/locales/se/admin-common.json'

import AdminUsersTypes from '../public/locales/se/admin-users.json'
import AdminEventsTypes from '../public/locales/se/admin-events.json'
import AdminNationTypes from '../public/locales/se/admin-nation.json'

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common'
        resources: {
            'common': typeof CommonTypes
            'admin-common': typeof AdminCommonTypes
            'admin-events': typeof AdminEventsTypes
            'admin-users': typeof AdminUsersTypes
            'admin-nation': typeof AdminNationTypes
        }
    }
}
