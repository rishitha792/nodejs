const os=require('os')
//information about current user
const user=os.userInfo()
console.log(user)
//method returns the system uptime
console.log(`the system uptime is ${os.uptime()} seconds`)
const current={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(current)