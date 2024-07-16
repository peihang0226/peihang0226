import {http} from '@/utils/http'

export function testHttp(data) {
    return http({
        url: '/gateway/biz/gwc/gwcJs',
        method: 'post',
        data
    })
}