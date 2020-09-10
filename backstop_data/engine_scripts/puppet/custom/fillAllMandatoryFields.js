module.exports = async page => {
  await page.type("#first-name", "João")
  await page.type("#last-name", "silva")
  await page.type("#email", "joao-silva@e")
  await page.click("#agree")
}
