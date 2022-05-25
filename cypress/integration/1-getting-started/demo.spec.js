/// <reference types="cypress" />

describe('test demo', () => {
  beforeEach(() => {
// Port番号は各アプリケーションに応じて変えてください。
    cy.visit('http://localhost:3000')
  })

  it('text check', () => {
// containsは、画面に指定の文字が含まれているか否かをテストします。文字は任意に変更ください。
    cy.contains('Learn React')
  })
})