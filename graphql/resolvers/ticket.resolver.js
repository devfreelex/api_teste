const { ticketFactory } = require('../../services/ticket.service')


const getTicketsByEmitter = async (parent, {code}, ctx) => {
    const ticket = ticketFactory()
    ticket.setModel(ctx.db.Tickets)
    return await ticket.getByEmitter(code)
}


const createTicket = async (parent, {data}, ctx) => {
    const ticket = ticketFactory()
    ticket.setModel(ctx.db.Tickets)
    return await ticket.create(data)
}

const updateTicket = async (parent, {code, data}, ctx) => {
    const ticket = ticketFactory()
    ticket.setModel(ctx.db.Tickets)
    return await ticket.update(code, data)
}







module.exports = { 
    Queries: {
        getTicketsByEmitter
    },
    Mutations: {
        createTicket,
        updateTicket,
    }
}