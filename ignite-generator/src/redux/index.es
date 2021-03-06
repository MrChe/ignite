#! /usr/bin/env node
'use strict'
import Generators from 'yeoman-generator'
import * as Utilities from '../utilities'

class ReduxGenerator extends Generators.Base {

  constructor (args, options) {
    super(args, options)
    this.argument('name', { type: String, required: true })
    this.fileConfig = {
      templatePath: 'redux.js.template',
      destinationPath: 'Redux',
      test: true }
  }

  generateApp () {
    Utilities.createFiles(this, this.fileConfig)
  }

  end () {

    console.log('Time to get cooking! 🍽 ')
  }
}

module.exports = ReduxGenerator
