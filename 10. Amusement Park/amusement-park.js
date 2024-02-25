/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
class Visitor {
    constructor(name, age, ticketID) {
        this.name = name,
        this.age = age,
        this.ticketId = ticketID
    }
}
export function createVisitor(name, age, ticketId) {
    return new Visitor(name, age, ticketId);
}
/**
   * Revokes a ticket for a visitor.
   *
   * @param {Visitor} visitor the visitor with an active ticket
   * @returns {Visitor} the visitor without a ticket
   */
export function revokeTicket(visitor) {
    visitor["ticketId"] = null;
    return visitor;
}
/**
   * Determines the status a ticket has in the ticket tracking object.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
export function ticketStatus(tickets, ticketId) {
    switch(true){
        case (typeof tickets[ticketId] === "string"):
            return "sold to " + tickets[ticketId];
        case (tickets[ticketId] === null):
            return "not sold"
        default:
            return "unknown ticket id";
    }
}
/**
   * Determines the status a ticket has in the ticket tracking object
   * and returns a simplified status message.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
export function simpleTicketStatus(tickets, ticketId) {
    switch(true){
        case (tickets[ticketId] != null):
            return tickets[ticketId];
        default:
            return "invalid ticket !!!";
    }
}
/**
   * Determines the version of the GTC that was signed by the visitor.
   *
   * @param {VisitorWithGtc} visitor
   * @returns {string | undefined} version
   */
export function gtcVersion(visitor) {
    if(visitor.gtc && visitor.gtc.signed === true){
        return visitor.gtc.version;
    } else if(visitor.gtc){
        return undefined
    }
    return undefined;
}