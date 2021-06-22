const map = {
    INVITE: 'Bạn nhận được một lời mời ký tài liệu.\nThông tin chi tiết tài liệu:',
    SIGNED: 'Một tài liệu của bạn vừa mới được ký.\nThông tin chi tiết tài liệu:'
}

const convertEvent = function (event) {
    switch(event) {
        case 'INVITE':
            return map.INVITE
            break;
        case 'SIGNED':
            return map.SIGNED
            break;
        default:
            return null
    }
}

module.exports = {
    convertEvent
}