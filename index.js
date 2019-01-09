const { SessionsApp } = require('@gfa/core/apps/SessionsApp')
const { SessionsRouter } = require('@gfa/core/routers/SessionsRouter')
const BcryptAdapter = require('@gfa/bcrypt-adapter')
const ClientSessionsAdapter = require('@gfa/client-sessions-adapter')
const FirestoreAdapter = require('@gfa/firestore-adapter')

class Sessions extends SessionsApp {
  constructor (opts) {
    opts = opts || {}
    var passwordOpts = opts.password
    delete opts.password
    var sessionOpts = opts.session
    delete opts.session
    var databaseOpts = opts.database
    delete opts.database
    var database = new FirestoreAdapter(databaseOpts)
    var password = new BcryptAdapter(passwordOpts)
    var session = new ClientSessionsAdapter(sessionOpts)
    var router = new SessionsRouter()
    super(Object.assign(opts, { router, password, session, database }))
  }
}

module.exports = Sessions
