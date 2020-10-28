// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: magic;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-brown; icon-glyph: magic;
/*
 * SETUP/设置
 * Use this section to set up the widget.
 * 使用此部分来设置小部件
 * ======================================
 * update: 10.28-16:34
 */

//////////////////////////////////
// 今日诗词
async function poetry(column) {
  const poetry = await getPoetry()

  // 添加今日诗词
  let poetryStack = align(column)
  // 诗词背景
  poetryStack.backgroundColor = new Color("#F8F8FF", 0.6)
  poetryStack.cornerRadius = 4
  poetryStack.layoutVertically()
  poetryStack.addSpacer(4)
  //
  const poetryInfoStack = poetryStack.addStack()
  poetryInfoStack.layoutHorizontally()
  poetryInfoStack.addSpacer(4)
  const poetryInfo = poetry.data
  // 添加显示诗词
  const potryContent = `"${poetryInfo.content.substring(0, poetryInfo.content.length - 1)}"`
  const poetryText = poetryInfoStack.addText(potryContent)
  poetryText.font = Font.systemFont(11)
  poetryText.lineLimit = 1
  poetryText.minimumScaleFactor = 0.7
  poetryText.textColor = new Color("", 0.8)

  // 添加作者
  const authStack = poetryStack.addStack()
  authStack.layoutHorizontally()
  authStack.addSpacer()
  // 显示作者
  const authorText = `⊱${poetryInfo.origin.dynasty}·${poetryInfo.origin.author}⊰`
  const author = authStack.addText(authorText)
  author.lineLimit = 1
  author.font = Font.systemFont(11)
  author.textColor = new Color("", 0.8)

  authStack.addSpacer(4)
  poetryStack.addSpacer(3)
  poetryStack.setPadding(3, 0, 0, 0)
  poetryStack.size = new Size(poetryInfo.content.length*12, poetryStack.size.height)
 }
//设置基金代码
const expectID = "005176,161725,001556,005693"
// Set the locale code. Leave blank "" to match the device's locale. You can change the hard-coded text strings in the TEXT section below.
// 设置语言环境代码。“”内保留空白以匹配设备的语言环境。您可以在下面的“文本”部分中更改硬编码的文本字符串。
let locale = "zh_cn"

// Set to true for fixed location, false to update location as you move around
// 固定使用当前位置设置为true，更换了位置时设置为false以更新位置信息
const lockLocation = false

// The size of the widget preview in the app.
// 小部件预览时的大小。large/medium/small
const widgetPreview = "medium"

// Set to true for an image background, false for no image.
// 使用图片背景，设置为true；不使用图片，则设置为false（不使用自定义背景时则使用默认的渐变背景）
const imageBackground = true

// Set to true to reset the widget's background image.
// 重置小部件的背景图像时设置为true以重新选择新的图像作为小部件背景
const forceImageUpdate = false

// Set the padding around each item. Default is 10.
// 设置默认的边距（更多边距设置参考xxxStack.setpadding）
const padding = 5

const items = [
  
  row,
  
    column(200),
    left,
    date,
    poetry,
    text("expect"),
    text("weatherDec"),
 
    column,
    right,
    current,
    future,
    text("aqi"),
    text("updateTime"),
]

/*
 * ITEM SETTINGS/项目设置
 * Choose how each item is displayed.
 * 选择每个项目的显示方式。
 * ==================================
 */  
 
// DATE/日期
// ========
const dateSettings = {

  // If set to true, date will become smaller when events are displayed.
  // 如果设置为true，则显示事件时日期将变小。
  dynamicDateSize: true

  // If the date is not dynamic, should it be large or small?
  // 如果日期非dynamic的，它将以什么大小显示？large/small
  ,staticDateSize: "small"

  // Determine the date format for each date type. See docs.scriptable.app/dateformatter
  // 设置每种日期类型的日期格式。参见docs.scriptable.app/dateformatter
  ,smallDateFormat: "MM月d日,E" //上面的设置为small时此项生效
  ,largeDateLineOne: "MM月d日" //上面的设置为large时此项生效并显示在第一行
  ,largeDateLineTwo: "EEEE"  //上面的设置为large时生效并显示在第二行
}

// EVENTS/事件
// ==========
const eventSettings = {

  // How many events to show.
  // 你想显示多少个事件在小部件上
  numberOfEvents: 3

  // Show all-day events.
  // 是否显示全天的事件，不显示则设置为false
  ,showAllDay: false

  // Show tomorrow's events.
  // 是否显示明天/后的事件，不显示则设置为false
  ,showTomorrow: false

  // Can be blank "" or set to "duration" or "time" to display how long an event is.
  // “”内可以为空白，也可以设置为“ duration”或“ time”以显示事件的持续时间（则设置了之后会显示事件的时间XX小时，XX分钟）
  ,showEventLength: "duration"

  // Set which calendars for which to show events. Empty [] means all calendars.
  // 设置要显示事件的日历。空[]表示所有日历。如果你日历上有订阅多个日历，则可选此项，或留空则显示全部日历事件
  ,selectCalendars: []

  // Leave blank "" for no color, or specify shape (circle, rectangle) and/or side (left, right).
  // “”不设置为无颜色，或可指定显示的形状（圆形，矩形）或侧面（左侧，右侧）
  ,showCalendarColor: "rectangle left"
  
  // When no events remain, show a hard-coded "message", a "greeting", or "none".
  // 如果没有事件，显示硬编码的“消息”，“问候”或“无”。
  ,noEventBehavior: "message"
}
// WEATHER/天气
// ===========
const weatherSettings = {

  // Set to imperial for Fahrenheit, or metric for Celsius
  // 设置温度单位，imperial为华氏度，metric为摄氏度
  units: "metric"
  
  // Show the location of the current weather.
  // true显示当前天气的位置，false则不显示（注意开启后会占用顶部位置空间）
  ,showLocation: false
  
  // Show the text description of the current conditions.
  // true显示当前天气的文字说明，false则不显示（注意，这个API并不支持中文）
  ,showCondition: false

  // Show today's high and low temperatures.
  // true显示今天的最高/低温度，false则不显示
  ,showHighLow: true

  // Set the hour (in 24-hour time) to switch to tomorrow's weather. Set to 24 to never show it.
  // 设置多少小时（以24小时制）以监视明天的天气。设置为24永不显示它。（则该数值是你想在哪个时间开始显示明天的天气，如设置为20，则当天晚上8点才显示明天的天气，晚上8点前都将显示每个时段的下一个小时的天气）
  ,tomorrowShownAtHour: 0
}

/*
 * TEXT/文本
 * Change the language and formatting of text displayed.
 * 更改所显示文本的语言和格式。
 * =====================================================
 */  
 
// You can change the language or wording of any text in the widget.
// 您可以更改窗口小部件中任何文本的语言或措辞。
const localizedText = {
  
  // The text shown if you add a greeting item to the layout.
  // 如果在布局中添加问候语，则显示此处的文本。
  nightGreeting: "该睡觉了🦥"
  ,morningGreeting: "早上好 👨🏻‍💻"
  ,noonGreeting: "中午好呀🍜"
  ,afternoonGreeting: "下午好 👨🏻‍💻"
  ,eveningGreeting: "晚上好 🌆"
  
  // The text shown if you add a future weather item to the layout, or tomorrow's events.
  // 如果将未来的天气项目添加到布局或明天的事件中，则显示此处的文本。
  ,nextHourLabel: "下一小时"
  ,tomorrowLabel: "Tomorrow"

  // Shown when noEventBehavior is set to "message".
  // 当没有事件时则显示此处的“message”
  ,noEventMessage:await getDataSC()
  
  // The text shown after the hours and minutes of an event duration.
  // 事件持续时间显示的文本（小时/分钟）。
  ,durationMinute: "分"
  ,durationHour: "小时"
}

// Set the font, size, and color of various text elements. Use iosfonts.com to find fonts to use. If you want to use the default iOS font, set the font name to one of the following: ultralight, light, regular, medium, semibold, bold, heavy, black, or italic.
// 设置各种文本元素的字体，大小和颜色。使用http://iosfonts.com 查找要使用的字体。如果要使用默认的iOS字体，请将字体名称设置为以下之一：超轻，轻，常规，中，半粗体，粗体，粗体，黑色或斜体。
const textFormat = {
  
  // Set the default font and color.
  // 设置默认的字体和颜色。
  defaultText: { size: 14, color: "", font: "" },
  
  // Any blank values will use the default.
  // 以下的空白值都将使用上面的默认值。
  smallDate:   { size: 16, color: "", font: "semibold" },
  largeDate1:  { size: 16, color: "", font: "medium" },
  largeDate2:  { size: 16, color: "", font: "medium" },
  
  greeting:    { size: 14, color: "", font: "semibold" },
  eventLabel:  { size: 14, color: "", font: "semibold" },
  eventTitle:  { size: 11, color: "", font: "semibold" },
  eventTime:   { size: 10, color: "", font: "" },
  noEvents:    { size: 11, color: "", font: "semibold" },
  
  largeTemp:   { size: 16, color: "", font: "semibold" },
  smallTemp:   { size: 10, color: "", font: "" },
  tinyTemp:    { size: 10, color: "", font: "" },
  
  customText:  { size: 10, color: "", font: "" },
  expectText:  { size: 10, color: "", font: "" },
  aqiText:     { size: 10, color: "", font: "semibold" },
  wthDecText:  { size: 10, color: "#2F4F4F", font: "semibold" },
  battery:     { size: 14, color: "", font: "medium" },
}
//获取今日诗词数据
async function getDataSC() {
    const url = "https://v1.jinrishici.com/all"
    const request = new Request(url)
    const data = await request.loadJSON()
    return data.content
}

// 基金数据文本处理
async function setupExpectString(){
  const expectData = await dataGet()
  var expectStr = ""
  for (let index in expectData) {
    // 当前基金单位净值估算日涨幅,单位为百分比
    let expectWorth = ('🚥' + expectData[index].expectGrowth+"%")
    let name = expectData[index].name
    name = name.replace("混合", "混合         ")
    name = name.replace("分级", "分级  ")
    name = name.replace("增强A", "增强A ")
    expectStr=(expectStr+name+expectWorth+"\n")
  }
  return expectStr
}
// 获取基金数据
async function dataGet() {
  const cachePath = files.joinPath(files.documentsDirectory(), "expect")
  const cacheExists = files.fileExists(cachePath)
  let data = undefined
  try {
    const requestUrl = "https://api.doctorxiong.club/v1/fund?code="+expectID
    const request = new Request(requestUrl)
    data = await request.loadJSON()
    // 缓存数据
    files.writeString(cachePath, JSON.stringify(data))
  } catch (e) {
    if (cacheExists) {
      const cache = files.readString(cachePath)
      data = JSON.parse(cache)
    }
  }
  return data.data
}

//未来天气情况描述
function currentDescription(){

  const files = FileManager.local()
  const cachePath = files.joinPath(files.documentsDirectory(), "weather-cal-cache")
  const cacheExists = files.fileExists(cachePath)
  const cacheDate = cacheExists ? files.modificationDate(cachePath) : 0
  let text = "暂无数据"
  // If cache exists and it's been less than 60 seconds since last request, use cached data.
  if (cacheExists) {
    const cache = files.readString(cachePath)
    const weatherDataRaw = JSON.parse(cache)
    if(weatherDataRaw.cod == 401){return text}
    const data = weatherDataRaw.result
    text = data.forecast_keypoint//未来下雨情况
    text = text.split("。")[0]
  }
    return text
}
//AQI
function aqiString(){
  const cachePath = files.joinPath(files.documentsDirectory(), "weather-cal-cache")
  const cacheExists = files.fileExists(cachePath)
  const cacheDate = cacheExists ? files.modificationDate(cachePath) : 0
  var text = "暂无数据"
  // If cache exists and it's been less than 60 seconds since last request, use cached data.
  if (cacheExists) {
    const cache = files.readString(cachePath)
    let weatherDataRaw = JSON.parse(cache)
    if(weatherDataRaw.cod == 401){return text}
    let realtimeData = weatherDataRaw.result.realtime
    const aqiNum = realtimeData.air_quality.aqi.usa//PM2.5
    text = String("空气指数:"+aqiNum)
  }
    return text
}
// Determines if the provided date is at night.
function isNight(dateInput) {
let date = new Date()
const hour = date.getHours()
return (hour < 24) || (hour > 19)
}

/*
 * WIDGET CODE/小部件代码
 * Be more careful editing this section. 
 * 在编辑此部分时要格外小心（所有小部件的源数据将从此处调用）
 * ===============================================
 */

// Make sure we have a locale value.
// 语言环境值，对应上面设置的语言，不设置将使用设备的语言
if (locale == "" || locale == null) { locale = Device.locale() }

// Declare the data variables.
// 声明数据变量
var eventData, locationData, weatherData

// Create global constants.
// 创建全局常量
const currentDate = new Date()
const files = FileManager.local()

/*
 * COLUMNS
 * =======
 */

// Set up the widget with padding.
// 使用padding来设定widget
const widget = new ListWidget()
const horizontalPad = padding < 10 ? 10 - padding : 10
const verticalPad = padding < 15 ? 15 - padding : 15
widget.setPadding(horizontalPad, verticalPad, horizontalPad, verticalPad)
widget.spacing = 0

// Set up the global variables.
// 设置全局变量
var currentRow = {}
var currentColumn = {}

// Set up the initial alignment.
// 设置初始对齐方式
var currentAlignment = alignLeft

// Set up our items.
// 设置items

for (item of items) { await item(currentColumn) }
/*
 * BACKGROUND DISPLAY/背景显示
 * =========================
 */

// If it's an image background, display it.
// 如果它是图像背景，则显示它。
if (imageBackground) {
  
  // Determine if our image exists and when it was saved.
  // 判断图像是否存在以及何时保存
  const path = files.joinPath(files.documentsDirectory(), "weather-cal-image")
  const exists = files.fileExists(path)
  
  // If it exists and an update isn't forced, use the cache.
  // 如果已有背景图像并且不打开每次运行时重新选择图像时使用缓存已有的背景图像。
  if (exists && (config.runsInWidget || !forceImageUpdate)) {
    widget.backgroundImage = files.readImage(path)
  
  // If it's missing when running in the widget, use a gray background.
  // 如果在小部件中运行时缺少这个背景，将使用灰色背景。
  } else if (!exists && config.runsInWidget) {
      widget.backgroundColor = Color.gray() 
    
  // But if we're running in app, prompt the user for the image.
  // 但是，如果在应用程序中运行，则提示选择图像
  } else {
      const img = await Photos.fromLibrary()
      widget.backgroundImage = img
      files.writeImage(path, img)
  }
    
// If it's not an image background, show the gradient.
// 如果不是图片背景，显示渐变
} 
// Finish the widget and show a preview.
// 完成小部件并显示预览
Script.setWidget(widget)
if (widgetPreview == "small") { widget.presentSmall() }
else if (widgetPreview == "medium") { widget.presentMedium() }
else if (widgetPreview == "large") { widget.presentLarge() }
Script.complete()

/*
 * WIDGET ITEMS/小部件项目
 * These functions display items on the widget.
 * 以下这些函数将是显示在小部件上的项目
 * ============================================
 */




// Return a text-creation function.
// 返回一个文本创建函数
function text(input = null) {

  async function displayText(column) {
  
    // Don't do anything if the input is blank.
    // 如果输入为空，则不执行任何操作
    if (!input || input == "") { return }
  
    // Otherwise, add the text.
    // 否则添加该文本
    const textStack = align(column)
    textStack.setPadding(10,0,0,0)
    if(input == "aqi"){
      textStack.setPadding(0,0,0,0)
      const textDisplay = provideText(aqiString(), textStack, textFormat.aqiText)
    }else if(input == "weatherDec"){
      textStack.setPadding(7,0,0,0)
      const textDisplay = provideText(currentDescription(), textStack, textFormat.wthDecText)
    }else if(input == "updateTime"){
      textStack.setPadding(0,0,1,0)
      let df =new DateFormatter()
      df.dateFormat = "HH:mm"
      const textDisplay = provideText(`上次更新 → ${df.string(currentDate)}`, textStack, textFormat.wthDecText)
    }else if(input == "expect"){
      textStack.setPadding(10,0,0,0)
      const textDisplay = provideText(await setupExpectString(), textStack, textFormat.expectText)
    }else{
      const textDisplay = provideText(input, textStack, textFormat.customText)
    }
  }
  return displayText
}
// Display the date on the widget.
// 在小部件上显示日期
async function date(column) {

  // Requirements: events (if dynamicDateSize is enabled)
  if (!eventData && dateSettings.dynamicDateSize) { await setupEvents() }

  // Set up the date formatter and set its locale.
  // 设置日期格式并设置其语言环境
  let df = new DateFormatter()
  df.locale = locale
  
  // Show small if it's hard coded, or if it's dynamic and events are visible.
  // 如果是有硬编码文本或有事件显示，则显示为小日期样式
  if (dateSettings.staticDateSize == "small" || (dateSettings.dynamicDateSize && eventData.eventsAreVisible)) {
    let dateStack = align(column)
    dateStack.setPadding(padding-5, padding-5, padding-3, padding)

    df.dateFormat = dateSettings.smallDateFormat
    let dateText = provideText(df.string(currentDate), dateStack, textFormat.smallDate)
    
  // Otherwise, show the large date.
  // 否则，显示大日期样式
  } else {
    let dateOneStack = align(column)
    df.dateFormat = dateSettings.largeDateLineOne
    let dateOne = provideText(df.string(currentDate), dateOneStack, textFormat.largeDate1)
    dateOneStack.setPadding(padding/2, padding, 0, padding)
    
    let dateTwoStack = align(column)
    df.dateFormat = dateSettings.largeDateLineTwo
    let dateTwo = provideText(df.string(currentDate), dateTwoStack, textFormat.largeDate2)
    dateTwoStack.setPadding(0, padding, padding, padding*2) //日期的间距设置，当你在日期设置中选择了显示“large”日期时，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  }
}

// Display a time-based greeting on the widget.
// 在小部件上显示每个时间段的问候语
async function greeting(column) {

  // This function makes a greeting based on the time of day.
  // 此函数可以调整一天中不同时间段的问候语显示
  function makeGreeting() {
    const hour = currentDate.getHours()
    log(hour)
    if (hour < 5)  { return localizedText.nightGreeting }
    if (hour < 12) { return localizedText.morningGreeting }
    if (hour < 14)  { return localizedText.noonGreeting }
    if (hour < 19)  { return localizedText.afternoonGreeting }
    if (hour < 23) { return localizedText.eveningGreeting }
    return localizedText.nightGreeting
  }
  
  // Set up the greeting.
  // 设置问候语Stack和边距
  let greetingStack = align(column)
  let greeting = provideText(makeGreeting(), greetingStack, textFormat.greeting)
  greetingStack.setPadding(padding, padding-4, padding, padding) //问候语的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
}

// Display events on the widget.
// 在小部件上显示事件
async function events(column) {

  // Requirements: events
  if (!eventData) { await setupEvents() }

  // If no events are visible, figure out what to do.
  // 判断没有事件时该显示什么
  if (!eventData.eventsAreVisible) { 
    const display = eventSettings.noEventBehavior
    
    // If it's a greeting, let the greeting function handle it.
    // 如果是问候语，将由问候语函数处理它
    if (display == "greeting") { return await greeting(column) }
    
    // If it's a message, get the localized text.
    // 如果是消息，将获取本地化的文本
    if (display == "message" && localizedText.noEventMessage.length) {
      const messageStack = align(column)
      messageStack.setPadding(padding, padding, padding, padding) //自定义本文的间距设置，如果你选择了没有事件是显示这个内容，调整这项以更改边距，依次是逆时针顺序上、左、下、右
      provideText(localizedText.noEventMessage, messageStack, textFormat.noEvents)
    }
    
    // Whether or not we displayed something, return here.
    return
  }
  
  // Set up the event stack.
  // 设置事件Stack和间距
  let eventStack = column.addStack()
  eventStack.layoutVertically()
  const todaySeconds = Math.floor(currentDate.getTime() / 1000) - 978307200
  eventStack.url = 'calshow:' + todaySeconds
  
  // If there are no events and we have a message, show it and return.
  if (!eventData.eventsAreVisible && localizedText.noEventMessage.length) {
    let message = provideText(localizedText.noEventMessage, eventStack, textFormat.noEvents)
    eventStack.setPadding(padding, padding, padding, padding) //事件的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
    return
  }
  
  // If we're not showing the message, don't pad the event stack.
  // 如果没有事件显示将不会显示这个事件Stack
  eventStack.setPadding(0, 0, 0, 0) //当没有事件时改为这个边距，全是0代表不限制这个Stack了，被自定义文本替代（这个默尔开启了，可开启/关闭）
  
  // Add each event to the stack.
  // 将每个事件添加到Stack中
  var currentStack = eventStack
  const futureEvents = eventData.futureEvents


  for (let i = 0; i < futureEvents.length; i++) {
    
    const event = futureEvents[i]
    const bottomPadding = (padding-10 < 0) ? 0 : padding-10

    // If it's the tomorrow label, change to the tomorrow stack.
    // 如果是明天的lable，则改用明天的Stack
    if (event.isLabel) {
      let tomorrowStack = column.addStack()
      tomorrowStack.layoutVertically()
      const tomorrowSeconds = Math.floor(currentDate.getTime() / 1000) - 978220800
      tomorrowStack.url = 'calshow:' + tomorrowSeconds
      currentStack = tomorrowStack
      continue
    }
    
    const titleStack = align(currentStack)
    titleStack.layoutHorizontally()
    const showCalendarColor = eventSettings.showCalendarColor
    const colorShape = showCalendarColor.includes("circle") ? "circle" : "rectangle"
    
    // If we're showing a color, and it's not shown on the right, add it to the left.
    if (showCalendarColor.length && !showCalendarColor.includes("right")) {
      let colorItemText = provideTextSymbol(colorShape) + " "
      let colorItem = provideText(colorItemText, titleStack, textFormat.eventTitle)
      colorItem.textColor = event.calendar.color
    }

    const title = provideText(event.title.trim(), titleStack, textFormat.eventTitle)
    titleStack.setPadding(padding-4, padding, event.isAllDay ? padding : padding/5, padding)

    // If we're showing a color on the right, show it.
    if (showCalendarColor.length && showCalendarColor.includes("right")) {
      let colorItemText = " " + provideTextSymbol(colorShape)
      let colorItem = provideText(colorItemText, titleStack, textFormat.eventTitle)
      colorItem.textColor = event.calendar.color
    }
  
    // If there are too many events, limit the line height.
    // //如果事件太多，限制行高
    if (futureEvents.length >= 3) { title.lineLimit = 1 }

    // If it's an all-day event, we don't need a time.
    // 如果是全天的的事件，则不显示时间
    if (event.isAllDay) { continue }

    // If we show the length as time, add an en dash and the time.
    let timeText = formatTime(event.startDate)
    // 如果显示为时间，添加一个破折号“-”
    if (eventSettings.showEventLength == "time") { 
      timeText += "–" + formatTime(event.endDate) 
    // If we should it as a duration, add the minutes.
    } else if (eventSettings.showEventLength == "duration") {
      const duration = (event.endDate.getTime() - event.startDate.getTime()) / (1000*60)
      const hours = Math.floor(duration/60)
      const minutes = Math.floor(duration % 60)
      const hourText = hours>0 ? hours + localizedText.durationHour : ""
      const minuteText = minutes>0 ? minutes + localizedText.durationMinute : ""
      const showSpace = hourText.length && minuteText.length
      timeText += "·" + hourText + (showSpace ? " " : "") + minuteText
    }
    const timeStack = align(currentStack)
    const time = provideText(timeText, timeStack, textFormat.eventTime)
    timeStack.setPadding(0, 10, 0, 0)
  }
}

// Display the current weather.
// 显示当前天气在小部件上
async function current(column) {

  // Requirements: weather
  if (!weatherData) { await setupWeather() }
  // Set up the current weather stack.
  // 设置当前天气的Stack
  let currentWeatherStack = column.addStack()
  currentWeatherStack.layoutVertically()
  currentWeatherStack.setPadding(0, 0, 0, 0) //当前天气的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  
  // If we're showing the location, add it.
  // 如果要显示位置，添加这个
  if (weatherSettings.showLocation) {
    let locationTextStack = align(currentWeatherStack)
    let locationText = provideText(locationData.locality, locationTextStack, textFormat.smallTemp)
    locationTextStack.setPadding(padding, padding, padding, padding) //位置名称的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右（这个默认关闭，可到天气设置处启用）
  }

  // Show the current condition symbol.
  // 显示当前天气的图标
  let mainConditionStack = align(currentWeatherStack)
  let mainConditionImg= await getWeatherIcons(weatherData.currentCondition)
  let mainCondition = mainConditionStack.addImage(mainConditionImg)
  mainCondition.imageSize = new Size(22,22)
  mainConditionStack.setPadding(weatherSettings.showLocation ? 0 : padding, padding, 0, padding) //当前天气图标的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  
  // If we're showing the description, add it.
  // 如果要显示天气描述，添加这个
  if (weatherSettings.showCondition) {
    let conditionTextStack = align(currentWeatherStack)
    let conditionText = provideText(weatherData.currentDescription, conditionTextStack, textFormat.smallTemp)
    conditionTextStack.setPadding(padding, padding, 0, padding) //天气描述的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  }

  // Show the current temperature.
  // 显示当前温度
  const tempStack = align(currentWeatherStack)
  tempStack.setPadding(0, padding, 0, padding) //当前温度的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  const tempText = Math.round(weatherData.currentTemp) + "°"
  const temp = provideText(tempText, tempStack, textFormat.largeTemp)
  
  // If we're not showing the high and low, end it here.
  if (!weatherSettings.showHighLow) { return }

  // Show the temp bar and high/low values.
  // 显示温度条和高/低值
  let tempBarStack = align(currentWeatherStack)
  tempBarStack.layoutVertically()
  tempBarStack.setPadding(0, padding, padding, padding) //高/低温度的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  
  let tempBar = drawTempBar()
  let tempBarImage = tempBarStack.addImage(tempBar)
  tempBarImage.size = new Size(50,0)
  
  tempBarStack.addSpacer(1)
  
  let highLowStack = tempBarStack.addStack()
  highLowStack.layoutHorizontally()
  
  const mainLowText = Math.round(weatherData.todayLow).toString()
  const mainLow = provideText(mainLowText, highLowStack, textFormat.tinyTemp)
  highLowStack.addSpacer()
  const mainHighText = Math.round(weatherData.todayHigh).toString()
  const mainHigh = provideText(mainHighText, highLowStack, textFormat.tinyTemp)
  
  tempBarStack.size = new Size(60,30)
}

// Display upcoming weather.
//显示未来的天气
async function future(column) {

  // Requirements: weather
  if (!weatherData) { await setupWeather() }

  // Set up the future weather stack.
  // 设置未来天气的Stack
  let futureWeatherStack = column.addStack()
  futureWeatherStack.layoutVertically()
  futureWeatherStack.setPadding(0, 0, 0, 0)
  // Determine if we should show the next hour.
  // 判断是否应该显示下一个小时的天气
  const showNextHour = (currentDate.getHours() < weatherSettings.tomorrowShownAtHour)
  
  // Set the label value.
  // 设置标签值
  const subLabelStack = align(futureWeatherStack)
  const subLabelText = showNextHour ? localizedText.nextHourLabel : localizedText.tomorrowLabel
  const subLabel = provideText(subLabelText, subLabelStack, textFormat.smallTemp)
  subLabelStack.setPadding(0, padding, padding/2, padding)
  
  // Set up the sub condition stack.
  // 设置子条件的Stack
  let subConditionStack = align(futureWeatherStack)
  subConditionStack.layoutHorizontally()
  subConditionStack.centerAlignContent()
  subConditionStack.setPadding(0, padding, padding, padding)
  
  // Determine if it will be night in the next hour.
  // 判断下一个小时是否会是夜晚
  var nightCondition
  if (showNextHour) {
    const addHour = currentDate.getTime() + (60*60*1000)
    const newDate = new Date(addHour)
    nightCondition = isNight(newDate)
  } else {
    nightCondition = false 
  }
  
  let subConditionImg = await getWeatherIcons(showNextHour ? weatherData.nextHourCondition : weatherData.tomorrowCondition)
  let subCondition = subConditionStack.addImage(subConditionImg)
  
  const subConditionSize = showNextHour ? 14 : 18
  subCondition.imageSize = new Size(subConditionSize, subConditionSize)
  subConditionStack.addSpacer(5)
  
  // The next part of the display changes significantly for next hour vs tomorrow.
  // 与明天相比，下一个小时的显示内容会有很大变化
  if (showNextHour) {
    const subTempText = Math.round(weatherData.nextHourTemp) + "°"
    const subTemp = provideText(subTempText, subConditionStack, textFormat.smallTemp)
    
  } else {
    let tomorrowLine = subConditionStack.addImage(drawVerticalLine(new Color("ffffff", 0.5), 20))
    tomorrowLine.imageSize = new Size(3,28)
    subConditionStack.addSpacer(5)
    let tomorrowStack = subConditionStack.addStack()
    tomorrowStack.layoutVertically()
    
    const tomorrowHighText = Math.round(weatherData.tomorrowHigh) + ""
    const tomorrowHigh = provideText(tomorrowHighText, tomorrowStack, textFormat.tinyTemp)
    tomorrowStack.addSpacer(4)
    const tomorrowLowText = Math.round(weatherData.tomorrowLow) + ""
    const tomorrowLow = provideText(tomorrowLowText, tomorrowStack, textFormat.tinyTemp)
  }
}


// Add a battery element to the widget; consisting of a battery icon and percentage.
// 向小部件添加电池元素；由电池图标和百分比组成
async function battery(column) {

  // Get battery level via Scriptable function and format it in a convenient way
  // 通过脚本函数获取电池电量并以简单的方式对其进行格式化
  function getBatteryLevel() {
  
    const batteryLevel = Device.batteryLevel()
    const batteryPercentage = `${Math.round(batteryLevel * 100)}%`

    return batteryPercentage
  }

  const batteryLevel = Device.batteryLevel()
  
  // Set up the battery level item
  // 设置电池电量项目
  let batteryStack = align(column)
  batteryStack.layoutHorizontally()
  batteryStack.centerAlignContent()

  let batteryIcon = batteryStack.addImage(provideBatteryIcon())
  batteryIcon.imageSize = new Size(30,30)


  // Change the battery icon to red if battery level is <= 20 to match system behavior
  // 如果电池电量小于等于20，则将电池图标更改为红色，以匹配系统行为
  if ( Math.round(batteryLevel * 100) > 20 || Device.isCharging() ) {

    batteryIcon.tintColor = new Color(textFormat.battery.color || textFormat.defaultText.color)

  } else {

    batteryIcon.tintColor = Color.red()

  }

//   batteryStack.addSpacer(padding * 0.6)

  // Display the battery status
  // 显示电池状态
  let batteryInfo = provideText(getBatteryLevel(), batteryStack, textFormat.battery)

  batteryStack.setPadding(padding/2, padding, 0, padding) //电池电量的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右

}
/*
 * SETUP FUNCTIONS
 * 设定函数
 * These functions prepare data needed for items.
 * 以下这些函数是小部件所需的数据
 * ==============================================
 */


 /*
 **************************************
 * 在线获取今日诗词
 **************************************
 */
async function getPoetry() {
  // 缓存目录
const cachePath = files.joinPath(files.documentsDirectory(), "poetry-cache")
  let data = undefined

  try {
    data = await new Request("https://v2.jinrishici.com/sentence").loadJSON()
    // 缓存数据
    files.writeString(cachePath, JSON.stringify(data))
  } catch (e) {
    const cache = files.readString(cachePath)
    data = JSON.parse(cache)
  }
  return data
}
// Set up the eventData object.
// 设定事件日期的对象
async function setupEvents() {
  
  eventData = {}
  const calendars = eventSettings.selectCalendars
  const numberOfEvents = eventSettings.numberOfEvents

  // Function to determine if an event should be shown.
  // 判断是否应该显示事件的函数。
  function shouldShowEvent(event) {
  
    // If events are filtered and the calendar isn't in the selected calendars, return false.
    // 如果事件被过滤，并且日历不在所选日历中，则返回false
    if (calendars.length && !calendars.includes(event.calendar.title)) { return false }

    // Hack to remove canceled Office 365 events.
    // 删除已取消的Office 365事件
    if (event.title.startsWith("Canceled:")) { return false }

    // If it's an all-day event, only show if the setting is active.
    // 如果是全天事件，则仅在设置处于active状态时显示
    if (event.isAllDay) { return eventSettings.showAllDay }

    // Otherwise, return the event if it's in the future.
    // 否则，会返回处于未来的事件
    return (event.startDate.getTime() > currentDate.getTime())
  }
  
  // Determine which events to show, and how many.
  // 判断要显示的事件以及数量
  const todayEvents = await CalendarEvent.today([])
  let shownEvents = 0
  let futureEvents = []
  
  for (const event of todayEvents) {
    if (shownEvents == numberOfEvents) { break }
    if (shouldShowEvent(event)) {
      futureEvents.push(event)
      shownEvents++
    }
  }

  // If there's room and we need to, show tomorrow's events.
  // 如果需要的话，显示明天的事件
  let multipleTomorrowEvents = false
  if (eventSettings.showTomorrow && shownEvents < numberOfEvents) {
  
    const tomorrowEvents = await CalendarEvent.tomorrow([])
    for (const event of tomorrowEvents) {
      if (shownEvents == numberOfEvents) { break }
      if (shouldShowEvent(event)) {
      
        // Add the tomorrow label prior to the first tomorrow event.
        // 在第一个明天事件之前添加“明天标签”
        if (!multipleTomorrowEvents) { 
          
          // The tomorrow label is pretending to be an event.
          futureEvents.push({ title: localizedText.tomorrowLabel.toUpperCase(), isLabel: true })
          multipleTomorrowEvents = true
        }
        
        // Show the tomorrow event and increment the counter.
        // 显示明天的事件并增加计数器
        futureEvents.push(event)
        shownEvents++
      }
    }
  }
  
  // Store the future events, and whether or not any events are displayed.
  // 存储未来的事件，以及是否显示全部事件
  eventData.futureEvents = futureEvents
  eventData.eventsAreVisible = (futureEvents.length > 0) && (eventSettings.numberOfEvents > 0)
}
// Set up the locationData object.
// 设置位置数据对象
async function setupLocation() {

  locationData = {}
  const locationPath = files.joinPath(files.documentsDirectory(), "weather-cal-loc")

  // If our location is unlocked or cache doesn't exist, ask iOS for location.
  // 如果位置已解锁定或不存在缓存，询问iOS
  var readLocationFromFile = false
  if (!lockLocation || !files.fileExists(locationPath)) {
    try {
      const location = await Location.current()
      const geocode = await Location.reverseGeocode(location.latitude, location.longitude, locale)
      locationData.latitude = location.latitude
      locationData.longitude = location.longitude
      locationData.locality = geocode[0].locality
      files.writeString(locationPath, location.latitude + "|" + location.longitude + "|" + locationData.locality)
    
    } catch(e) {
      // If we fail in unlocked mode, read it from the cache.
      if (!lockLocation) { readLocationFromFile = true }
      
      // We can't recover if we fail on first run in locked mode.
      else { return }
    }
  }
  
  // If our location is locked or we need to read from file, do it.
  // 如果位置信息被锁定或需要从文件中读取，执行此操作
  if (lockLocation || readLocationFromFile) {
    const locationStr = files.readString(locationPath).split("|")
    locationData.latitude = locationStr[0]
    locationData.longitude = locationStr[1]
    locationData.locality = locationStr[2]
  }
}
// Set up the weatherData object.
// 设置天气数据对象
async function setupWeather() {

  // Requirements: location
  if (!locationData) { await setupLocation() }

  // Set up the cache.
  // 设定缓存
  const cachePath = files.joinPath(files.documentsDirectory(), "weather-cal-cache")
  const cacheExists = files.fileExists(cachePath)
  const cacheDate = cacheExists ? files.modificationDate(cachePath) : 0
  var weatherDataRaw

  // If cache exists and it's been less than 60 seconds since last request, use cached data.
  // 如果存在缓存，并且距离上次请求少于60秒，使用缓存的数据
  if (cacheExists && (currentDate.getTime() - cacheDate.getTime()) < 60000) {
    const cache = files.readString(cachePath)
    weatherDataRaw = JSON.parse(cache)

  // Otherwise, use the API to get new weather data.
  // 否则，使用API​​获取新的天气数据
  } else {
    weatherDataRaw = await getWeatherData()
    
  }
  // 解析彩云天气数据
    let resultData = weatherDataRaw.result
    let realtimeData = resultData.realtime
    const temperature = realtimeData.temperature//温度

    let dailyData = resultData.daily
    const todayHigh = dailyData.temperature[0].max//今日最高温度
    const todayLow = dailyData.temperature[0].min//今日最低温度
    const tomorrowHigh = dailyData.temperature[1].max//明日最高
    const tomorrowLow = dailyData.temperature[1].min//明日最低
    
  // Store the weather values.
  // 储存天气数据值
  weatherData = {}
  weatherData.currentTemp = temperature
  weatherData.currentCondition = realtimeData.skycon//天气图标
  weatherData.todayHigh = todayHigh
  weatherData.todayLow = todayLow
  weatherData.nextHourTemp = resultData.hourly.temperature[1].value
  weatherData.nextHourCondition = realtimeData.skycon

  weatherData.tomorrowHigh = tomorrowHigh
  weatherData.tomorrowLow = tomorrowLow
  weatherData.tomorrowCondition = dailyData.skycon_08h_20h[1].value

}
async function getWeatherData() {
  
  const cachePath = files.joinPath(files.documentsDirectory(), "weather-cal-cache")
  
  try {
  const weatherReq = "https://api.caiyunapp.com/v2.5/S45Fnpxcwyq0QT4b/"+locationData.longitude+","+locationData.latitude+"/weather.json?lang=zh_CN"
  const weatherDataRaw = await new Request(weatherReq).loadJSON()
  files.writeString(cachePath, JSON.stringify(weatherDataRaw))
  return weatherDataRaw
  } catch (e) {
    
    const cacheExists = files.fileExists(cachePath)
    const cacheDate = cacheExists ? files.modificationDate(cachePath) : 0
  // 如果存在缓存，使用缓存的数据
  if (cacheExists) {
    const cache = files.readString(cachePath)
    const weatherDataRaw = JSON.parse(cache)
    return weatherDataRaw
    }
  }
}
async function getWeatherIcons(weatherName) {
  const weatherIcons = {
    CLEAR_DAY: "https://s1.ax1x.com/2020/10/24/BZSMJe.png", // 晴（白天） CLEAR_DAY
    CLEAR_NIGHT: "https://s1.ax1x.com/2020/10/24/BZS8sI.png", // 晴（夜间） CLEAR_NIGHT
    PARTLY_CLOUDY_DAY: "https://s1.ax1x.com/2020/10/24/BZSKiD.png", // 多云（白天）  PARTLY_CLOUDY_DAY
    PARTLY_CLOUDY_NIGHT: "https://s1.ax1x.com/2020/10/24/BZSKiD.png", // 多云（夜间）  PARTLY_CLOUDY_NIGHT
    CLOUDY: "https://s1.ax1x.com/2020/10/24/BZSnIO.png", // 阴（白天）  CLOUDY
    CLOUDY_NIGHT:"https://s1.ax1x.com/2020/10/24/BZS3QA.png", // 阴（夜间）  CLOUDY
    LIGHT_HAZE: "https://s1.ax1x.com/2020/10/24/BZ8Rrn.png", // 轻度雾霾   LIGHT_HAZE
    MODERATE_HAZE: "https://s1.ax1x.com/2020/10/24/BZ3whF.png", // 中度雾霾  MODERATE_HAZE
    HEAVY_HAZE: "https://s1.ax1x.com/2020/10/24/BZ3akT.png", // 重度雾霾   HEAVY_HAZE
    LIGHT_RAIN: "https://s1.ax1x.com/2020/10/24/BZSdJg.png", // 小雨 LIGHT_RAIN
    MODERATE_RAIN: "https://s1.ax1x.com/2020/10/24/BZSwWQ.png", // 中雨 MODERATE_RAIN
    HEAVY_RAIN: "https://s1.ax1x.com/2020/10/24/BZS0zj.png", // 大雨  HEAVY_RAIN
    STORM_RAIN: "https://s1.ax1x.com/2020/10/24/BZSsLq.png", // 暴雨 STORM_RAIN
    FOG: "https://s1.ax1x.com/2020/10/24/BZ82Ks.png", // 雾 FOG
    LIGHT_SNOW: "https://s1.ax1x.com/2020/10/24/BZSbTK.png", // 小雪  LIGHT_SNOW
    MODERATE_SNOW: "https://s1.ax1x.com/2020/10/24/BZSLFO.png", // 中雪 MODERATE_SNOW
    HEAVY_SNOW: "https://s1.ax1x.com/2020/10/24/BZSOYD.png", // 大雪  HEAVY_SNOW
    STORM_SNOW: "https://s1.ax1x.com/2020/10/24/BZ8A4U.png", // 暴雪 STORM_SNOW
    DUST: "https://s1.ax1x.com/2020/10/24/BZ8hV0.png", // 浮尘  DUST
    SAND: "https://s1.ax1x.com/2020/10/24/BZ84aV.png", // 沙尘  SAND
    WIND: "https://s1.ax1x.com/2020/10/24/BZ8TGF.png", // 大风  WIND
  }
  // 判断图像是否存在以及何时保存
  const path = files.joinPath(files.documentsDirectory(), weatherName)
  const exists = files.fileExists(path)
  // 如果已有背景图像并且不打开每次运行时重新选择图像时使用缓存已有的背景图像。
  if (exists) {
    const data = files.readImage(path)
    return data
  }
    let imgUrl = weatherIcons[weatherName]
    const request = new Request(imgUrl)
    const data = await request.loadImage()
    files.writeImage(path, data)
    return data
}

/*
 * LAYOUT FUNCTIONS/布局函数
 * These functions manage spacing and alignment.
 * 这些函数管理间距和对齐方式
 * =============================================
 */

// Makes a new row on the widget.
// 在窗口小部件上创建新行
function row(input = null) {

  function makeRow() {
    currentRow = widget.addStack()
    currentRow.layoutHorizontally()
    currentRow.setPadding(0, 0, 0, 0)
    currentColumn.spacing = 0
    
    // If input was given, make a column of that size.
    // 如果输入了参数则使用参数的尺寸大小来创建
    if (input > 0) { currentRow.size = new Size(0,input) }
  }
  
  // If there's no input or it's a number, it's being called in the layout declaration.
  if (!input || typeof input == "number") { return makeRow }
  
  // Otherwise, it's being called in the generator.
  else { makeRow() }
}

// Makes a new column on the widget.
function column(input = null) {
 
  function makeColumn() {
    currentColumn = currentRow.addStack()
    currentColumn.layoutVertically()
    currentColumn.setPadding(0, 0, 0, 0)
    currentColumn.spacing = 0
    
    // If input was given, make a column of that size.
    if (input > 0) { currentColumn.size = new Size(input,0) }
  }
  
  // If there's no input or it's a number, it's being called in the layout declaration.
  if (!input || typeof input == "number") { return makeColumn }
  
  // Otherwise, it's being called in the generator.
  else { makeColumn() }
}

// Create an aligned stack to add content to.
// 创建对齐的Stack以向其添加内容
function align(column) {
  
  // Add the containing stack to the column.
  // 将包含Stack的内容添加到该列中
  let alignmentStack = column.addStack()
  alignmentStack.layoutHorizontally()
  
  // Get the correct stack from the alignment function.
  // 从对齐函数获取正确的Stack
  let returnStack = currentAlignment(alignmentStack)
  returnStack.layoutVertically()
  return returnStack
}

// Create a right-aligned stack.
// 创建一个居右对齐的Stack
function alignRight(alignmentStack) {
  alignmentStack.addSpacer()
  let returnStack = alignmentStack.addStack()
  return returnStack
}

// Create a left-aligned stack.
// 创建一个居左对齐的Stack
function alignLeft(alignmentStack) {
  let returnStack = alignmentStack.addStack()
  alignmentStack.addSpacer()
  return returnStack
}

// Create a center-aligned stack.
// 创建一个居中对齐的Stack
function alignCenter(alignmentStack) {
  alignmentStack.addSpacer()
  let returnStack = alignmentStack.addStack()
  alignmentStack.addSpacer()
  return returnStack
}

// This function adds a space, with an optional amount.
// 此函数添加一个间距，并带有一个可选的数值
function space(input = null) { 
  
  // This function adds a spacer with the input width.
  // 此函数在输入宽度处添加一个间距
  function spacer(column) {
  
    // If the input is null or zero, add a flexible spacer.
    // 如果输入为null或零时，添加一个间距
    if (!input || input == 0) { column.addSpacer() }
    
    // Otherwise, add a space with the specified length.
    // 否则，添加具有指定长度的间距
    else { column.addSpacer(input) }
  }
  
  // If there's no input or it's a number, it's being called in the column declaration.
  // 如果没有输入或是数字，则在列声明中调用它
  if (!input || typeof input == "number") { return spacer }
  
  // Otherwise, it's being called in the column generator.
  // 否则，将在列生成器中调用它
  else { input.addSpacer() }
}

// Change the current alignment to right.
// 将当前对齐方式更改为居右
function right(x) { currentAlignment = alignRight }

// Change the current alignment to left.
// 将当前对齐方式更改为居左
function left(x) { currentAlignment = alignLeft }

// Change the current alignment to center.
// 将当前对齐方式更改为居中
function center(x) { currentAlignment = alignCenter }

/*
 * HELPER FUNCTIONS
 * 帮助函数
 * These functions perform duties for other functions.
 * 这些函数都是服务于以上的项目的
 * ===================================================
 */
// Determines if two dates occur on the same day
function sameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
}

// Returns the number of minutes between now and the provided date.
function closeTo(time) {
  return Math.abs(currentDate.getTime() - time) / 60000
}

// Format the time for a Date input.
function formatTime(date) {
  let df = new DateFormatter()
//   df.locale = locale
  df.useShortDateStyle()
  df.useShortTimeStyle()
  return df.string(date)
}

// Provide a text symbol with the specified shape.
function provideTextSymbol(shape) {

  // Rectangle character.
  if (shape.startsWith("rect")) {
    return "\u2759"
  }
  // Circle character.
  if (shape == "circle") {
    return "\u2B24"
  }
  // Default to the rectangle.
  return "\u2759" 
}

// Provide a battery SFSymbol with accurate level drawn on top of it.
function provideBatteryIcon() {
  
  // If we're charging, show the charging icon.
  if (Device.isCharging()) { return SFSymbol.named("battery.100.bolt").image }
  
  // Set the size of the battery icon.
  const batteryWidth = 87
  const batteryHeight = 41
  
  // Start our draw context.
  let draw = new DrawContext()
  draw.opaque = false
  draw.respectScreenScale = true
  draw.size = new Size(batteryWidth, batteryHeight)
  
  // Draw the battery.
  draw.drawImageInRect(SFSymbol.named("battery.0").image, new Rect(0, 0, batteryWidth, batteryHeight))
  
  // Match the battery level values to the SFSymbol.
  const x = batteryWidth*0.1525
  const y = batteryHeight*0.247
  const width = batteryWidth*0.602
  const height = batteryHeight*0.505
  
  // Prevent unreadable icons.
  let level = Device.batteryLevel()
  if (level < 0.05) { level = 0.05 }
  
  // Determine the width and radius of the battery level.
  const current = width * level
  let radius = height/6.5
  
  // When it gets low, adjust the radius to match.
  if (current < (radius * 2)) { radius = current / 2 }

  // Make the path for the battery level.
  let barPath = new Path()
  barPath.addRoundedRect(new Rect(x, y, current, height), radius, radius)
  draw.addPath(barPath)
  draw.setFillColor(Color.black())
  draw.fillPath()
  return draw.getImage()
}
// Provide a font based on the input.
function provideFont(fontName, fontSize) {
  const fontGenerator = {
    "ultralight": function() { return Font.ultraLightSystemFont(fontSize) },
    "light": function() { return Font.lightSystemFont(fontSize) },
    "regular": function() { return Font.regularSystemFont(fontSize) },
    "medium": function() { return Font.mediumSystemFont(fontSize) },
    "semibold": function() { return Font.semiboldSystemFont(fontSize) },
    "bold": function() { return Font.boldSystemFont(fontSize) },
    "heavy": function() { return Font.heavySystemFont(fontSize) },
    "black": function() { return Font.blackSystemFont(fontSize) },
    "italic": function() { return Font.italicSystemFont(fontSize) }
  }
  
  const systemFont = fontGenerator[fontName]
  if (systemFont) { return systemFont() }
  return new Font(fontName, fontSize)
}
 
// Add formatted text to a container.
function provideText(string, container, format) {
  const textItem = container.addText(string)
  const textFont = format.font || textFormat.defaultText.font
  const textSize = format.size || textFormat.defaultText.size
  const textColor = format.color || textFormat.defaultText.color
  textItem.font = provideFont(textFont, textSize)
  textItem.textColor = new Color(textColor)
  return textItem
}

/*
 * DRAWING FUNCTIONS
 * These functions draw onto a canvas.
 * ===================================
 */

// Draw the vertical line in the tomorrow view.
function drawVerticalLine(color, height) {
  
  const width = 2
  
  let draw = new DrawContext()
  draw.opaque = false
  draw.respectScreenScale = true
  draw.size = new Size(width,height)
  
  let barPath = new Path()
  const barHeight = height
  barPath.addRoundedRect(new Rect(0, 0, width, height), width/2, width/2)
  draw.addPath(barPath)
  draw.setFillColor(color)
  draw.fillPath()
  
  return draw.getImage()
}

// Draw the temp bar.
function drawTempBar() {

  // Set the size of the temp bar.
  const tempBarWidth = 200
  const tempBarHeight = 20
  
  // Calculate the current percentage of the high-low range.
  let percent = (weatherData.currentTemp - weatherData.todayLow) / (weatherData.todayHigh - weatherData.todayLow)

  // If we're out of bounds, clip it.
  if (percent < 0) {
    percent = 0
  } else if (percent > 1) {
    percent = 1
  }

  // Determine the scaled x-value for the current temp.
  const currPosition = (tempBarWidth - tempBarHeight) * percent

  // Start our draw context.
  let draw = new DrawContext()
  draw.opaque = false
  draw.respectScreenScale = true
  draw.size = new Size(tempBarWidth, tempBarHeight)

  // Make the path for the bar.
  let barPath = new Path()
  const barHeight = tempBarHeight - 10
  barPath.addRoundedRect(new Rect(0, 5, tempBarWidth, barHeight), barHeight / 2, barHeight / 2)
  draw.addPath(barPath)
  draw.setFillColor(new Color("ffffff", 0.5))
  draw.fillPath()

  // Make the path for the current temp indicator.
  let currPath = new Path()
  currPath.addEllipse(new Rect(currPosition, 0, tempBarHeight, tempBarHeight))
  draw.addPath(currPath)
  draw.setFillColor(new Color("ffffff", 1))
  draw.fillPath()

  return draw.getImage()
}
