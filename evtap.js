let user = prompt ('Istifadeci adini daxil edin;')
let parol = prompt('parol daxil edin;')
let netice;
switch(true) {
    case user == 'erlams' && parol == '123456':
        netice = 'Admin, siz sayti redakte ede bilersiz'
        break;
        case user == 'aysel' && parol == '123456':
        netice = 'Xos geldin Aysel'
        break;
        case user == 'mitri' && parol == '123':
            netice = 'Mitri xos gelmisen'
            break;
        default:
            netice = 'Istifadeci adi ve ya parol sehvdir'
            break;
}
document.getElementById('user').innerHTML = netice