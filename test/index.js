const expect = require('chai').expect
const Sessions = require('../')
const { createApp, deleteApp } = require('@gfa/firestore-adapter/config/firestore')

const defaults = {
  session: { secret: 'test' }
}

describe('Sessions', function () {
  before(function () {
    createApp()
  })

  after(function () {
    deleteApp()
  })

  describe('constructor', function () {
    it('sets correct defaults', function () {
      var app = new Sessions(defaults)
      expect(app.table).to.equal('users')
    })
  })
})
