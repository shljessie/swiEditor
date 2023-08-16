const { write, getExportedDatas, waitForEditorWebSocket } = require("../helper")
const { helloOneStroke } = require("../strokesDatas")

  describe("Websocket Text Search Without Smartguide", () => {
    beforeAll(async () => {
      await page.goto("/examples/websocket/websocket_text_iink_no_guides.html")
    })

    beforeEach(async () => {
      await page.reload({ waitUntil: "networkidle" })
      await waitForEditorWebSocket(page)
    })

    test("should have title", async () => {
      const title = await page.title()
      expect(title).toMatch("No guides")
    })

    test("should draw stroke hello", async () => {
      const [exports] = await Promise.all([
        getExportedDatas(page),
        write(page, helloOneStroke.strokes),
      ])

      const jiixExpected = helloOneStroke.exports["application/vnd.myscript.jiix"].label
      const jiixReceived = exports["application/vnd.myscript.jiix"].label
      expect(jiixReceived).toStrictEqual(jiixExpected)
    })

    test("should not see guides", async () => {
        const [exports] = await Promise.all([
            getExportedDatas(page),
            write(page, helloOneStroke.strokes),
        ])
        const line = await page.locator("line").all()
        expect(line.length).toEqual(0)
    })
  })