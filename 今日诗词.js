// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: magic;
// 今日诗词
// 组件作者：RandomWalk
//https://v1.jinrishici.com/rensheng
//https://v1.jinrishici.com/all



// 小部件预览时的大小。large/medium/small
const widgetPreview = "small"
// 组件背景颜色
const backgroundColor = "#20b2aa"




const res = await getText();
// 初始化组件
let widget = await createWidget(res)
widget.backgroundColor = new Color(backgroundColor, 0.7)

if (!config.runsInWidget) {
   if (widgetPreview == "small") {await widget.presentSmall() }
else if (widgetPreview == "medium") {await widget.presentMedium() }
else if (widgetPreview == "large") {await widget.presentLarge() }

}

// 设置桌面组件
Script.setWidget(widget)
Script.complete()
//获取数据
async function getData() {
    const url = "https://v1.jinrishici.com/all"
    const request = new Request(url)
    const data = await request.loadJSON()
    log(data)
    return data
}
//处理数据格式
async function getText() {
    let data = await getData()
    var content = data.content
    content = content.replace(/“”/g,'')
    content = content.replace(/，/g,'\n')
    content = content.replace(/。/g,'\n')
    content = content.replace(/、/g,'\n')
    content = content.replace(/？/g,'')
    content = content.replace(/；/g,'')
    let category = data.category
    category = category.replace(/古诗文-/g,'<')
    category = category.replace(/-/g,'•')
    let author = data.author
    data = {"content":content,"origin":"「"+data.origin+"」","author":author,"category":category}
    return data
}
// 创建组件
async function createWidget(res) {
  
    let w = new ListWidget()
    w.setPadding(3, 5, 3, 5)
    //   标题
    let title = w.addText(res.origin+"\n————————\n")
    title.font = Font.lightMonospacedSystemFont(13)
    title.textColor = Color.black()
    title.centerAlignText()
    w.addSpacer(2)

  
    //   内容
    let body = w.addText(`${res.content}`)
    body.font = Font.boldMonospacedSystemFont(14)
    body.textColor = Color.black()
    body.textOpacity = 0.88
    body.centerAlignText()
    
    //   题目作者
    let foot = w.addText(`—— ${res.author}`)
    foot.font = Font.lightMonospacedSystemFont(12)
    foot.textColor = Color.black();
    foot.textOpacity = 0.88;
    foot.rightAlignText()
    return w
  }
