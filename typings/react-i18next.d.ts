import 'react-i18next'

// import { CommonTypes, AdminCommonTypes, AdminEventsTypes } from '@typings/locale-namespaces'
import CommonTypes from '../public/locales/se/common.json'
import AdminCommonTypes from '../public/locales/se/admin-common.json'
import AdminEventsTypes from '../public/locales/se/admin-events.json'

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common'
        resources: {
            'common': typeof CommonTypes
            'admin-common': typeof AdminCommonTypes
            'admin-events': typeof AdminEventsTypes
        }
    }
}
