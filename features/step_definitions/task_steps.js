module.exports = function () {

  this.When(/^I add a task '(.*)'$/, function (name) {
    return this.driver
               .findElement({ css: 'input' })
               .sendKeys(name, this.webdriver.Key.ENTER)
  })

  this.When(/^I (.*) the task$/, function (action) {
    let state
    if (action === 'start') {
      state = 'to-do'
    }
    return this.driver
               .findElement({ css: 'p.' + state })
               .findElement({ css: 'button' }).click()
  })

  this.Then(/^I see the task '(.*)' under '(.*)'$/, function (text, heading) {
    let state = heading.toLowerCase().split(' ').join('-')
    let name = this.driver.findElement({ css: 'p.' + state }).getText()
    return this.expect(name).to.eventually.have.string(text)
  })

  this.When(/^Task is '(.*)' under '(.*)'$/, function (text, heading) {
    return this.driver
               .findElement({ css: '.in-progress-btn' }).click()
  })

  this.Then(/^'(.*)' should be '(.*)' in complete charts$/, function (heading, text) {
    let state = heading.toLowerCase().split(' ').join('-')
    let name = this.driver.findElement({ css: 'span.' + state }).getText()
    return this.expect(name).to.eventually.have.string(text)
  })

}
