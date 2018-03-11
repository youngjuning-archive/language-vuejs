'use babel'

import { Disposable } from 'atom'
import { filter } from 'fuzzaldrin'
import COMPONENT from './modules/component'

export default class Provider extends Disposable {
  constructor () {
    super()
    this.selector = '.text.html, .source.js, .source.ts'
    this.completions = {}
  }

  getSuggestions (request) {
    const { prefix, bufferPosition, editor } = request
    const scopes = request.scopeDescriptor.getScopesArray()
    const line = editor.getTextInRange([ [bufferPosition.row, 0], bufferPosition ])

    return new Promise((resolve) => {
      let suggestions = []

      if (COMPONENT.isAttributeValue(scopes)) {
      } else if (COMPONENT.isTag(scopes, line)) {
        suggestions = COMPONENT.getTagNameCompletions()
      } else if (COMPONENT.isAttribute(prefix, scopes)) {
        suggestions = COMPONENT.getAttributeNameCompletions(editor, bufferPosition)
      }
      resolve(this.cenas(prefix, suggestions))
    })
  }

  cenas (prefix, suggestions) {
    return filter(suggestions, prefix, {
      key: 'displayText'
    })
  }

  onDidInsertSuggestion ({ editor, suggestion }) {
    if (/^Vue 2\..*\+$/.test(suggestion.rightLabelHTML)) {
      setTimeout(function () {
        atom.commands.dispatch(atom.views.getView(editor), 'autocomplete-plus:activate', { activatedManually: false })
      }, 1)
    }
  }
}
