const uniqueID = () => {
    const bigId = Date.now() + ((Math.random() * 100000).toFixed())
    const id = bigId.toString().split('').reverse().slice(0, 9).join('') 
    return parseInt(id)  
}
module.exports = { uniqueID }