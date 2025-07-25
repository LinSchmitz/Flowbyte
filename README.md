# 🚀 Flowbyte — Track Your Time. Build Consistency. Optimize Focus.

Flowbyte is a smart productivity and habit tracking app designed for creators, learners, and developers who care not just about doing tasks — but doing them **consistently and efficiently**.

---

## 🧠 Why Flowbyte?

> “Success doesn't come from intensity — it comes from consistency.”

Flowbyte is built with the philosophy of **gradual growth**, **honest logging**, and **insightful feedback**. Whether you're learning a language, writing, coding, or building a side project — this app helps you see your trends and stay accountable.

---

## 📌 Key Features

✅ **Custom Time Cycles**  
Create time cycles with custom durations (from 1 week to several months) to focus on your goals.

📅 **Daily Task Logging**  
Log your hours, start time, end time, and notes for each task — daily.

📊 **Advanced Analytics**

- Calculates daily average time
- Measures standard deviation of consistency
- Detects productivity patterns based on start times
- Alerts you when inconsistency increases (e.g., high variance)

🎨 **Color-Coded Tasks**  
Visually differentiate tasks using custom colors.

♻️ **Copy Tasks to New Cycles**  
Re-use previous setups to start new focus periods with a single click.

📈 **Productivity Heatmap & Hour Insights**  
Visualize your progress and discover your most productive time windows.

---

## 🛠 Tech Stack

- **Frontend**: React.js (with Hooks & Context)
- **Styling**: CSS
- **Backend**: Supabase / Firebase (planned)
- **Charts**: Recharts / D3.js (for analytics)

---

## 🚧 Upcoming Features

- Mobile app (React Native)
- Google Calendar integration
- Custom reminders
- Export data as CSV
- Light/Dark mode themes

---

## 📸 Screenshots _(Coming soon)_

> Wireframes, UI snapshots and live preview will be added in future updates.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

1. Fork the repo
2. Create your branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add awesome feature'`)
4. Push (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 💬 Feedback

Have a feature idea or found a bug?  
on X [@LinSchmtz](https://X.com/LinSchmtz)!

---

> Made with ❤️,🐈 and ☕ to help humans build habits that stick.

+++++++++++++++++
+++++++++++++++++
+++++++++++++++++
+++++++++++++++++

### 1. 📅 **بازه زمانی قابل انتخاب توسط کاربر**

- انتخاب بازه‌ای از حداقل **۱ هفته تا چند ماه**
- ثبت تاریخ شروع (و اختیاری: تاریخ پایان)
- این بازه واحد تحلیلی خواهد بود

---

### 2. 📊 **تحلیل بازدهی در بازه:**

- **میانگین زمان صرف‌شده روزانه** روی تسک (مثلاً: میانگین ۲.۷ ساعت در روز)
- **انحراف معیار** بر حسب ساعت
- اگر **انحراف معیار > نصف میانگین** ➝ ⛔ **آلارم "تداوم ناپایدار"**

---

### 3. ⏱️ **ثبت روزانه**

- کاربر هر روز وارد می‌کنه:

  - ✅ انجام شده یا نه
  - ⏳ چند ساعت وقت صرف کرده؟
  - 🕐 از چه ساعتی تا چه ساعتی؟ (شروع و پایان خودکار ذخیره می‌شن)

- اپ با توجه به همه روزها **ساعت‌های طلایی کاربر** رو شناسایی می‌کنه (مثلاً: بین ۹ تا ۱۱ صبح بیشترین بازدهی)

---

### 4. 🎨 **رنگ‌بندی تسک‌ها**

- هر تسک با رنگ مشخص میشه
- در نمای هفتگی / ماهانه کاربر می‌تونه با رنگ‌ها به راحتی وضعیت کارهاش رو ببینه

---

### 5. 📦 **کپی‌کردن تسک‌ها در بازه‌های مختلف**

- مثلاً یک تسک رو در بازه جدید هم می‌خواد داشته باشه
- دکمه‌ی "Copy to new cycle" یا "شروع چرخه جدید از روی قبلی"

---

## 🧮 تحلیل‌های هوشمند (Smart Insights)

- 🔁 ساعت‌های پرتکرار شروع = «زمان طلایی کاربر»
- 📉 هشدار نوسان زیاد = کمک به پیدا کردن ریشه بی‌نظمی
- 📆 روزهای موفق متوالی یا زنجیره شکست‌خورده

---

## 🗄️ مدل پایگاه داده پیشنهادی (برای پیاده‌سازی):

### 1. Users

```ts
id | name | email | ...
```

### 2. Cycles (دوره‌های زمانی ثبت عادت/تسک)

```ts
id | user_id | title | start_date | end_date;
```

### 3. Tasks

```ts
id | cycle_id | title | color | description;
```

### 4. TaskEntries (ورودی روزانه کاربر برای یک تسک خاص)

```ts
id | task_id | date | duration(min) | start_time | end_time;
```

---

## 💻 می‌خوای با چی پیاده‌سازی کنی؟

- React (frontend) + Supabase یا Firebase (backend)?
- یا شاید یه اپ موبایل با React Native؟

---

## 💡 پیشنهادی برای توسعه بیشتر:

- یادداشت یا احساس کاربر در هر روز (جای نوت‌برداری)
- سینک با تقویم گوگل
- اعلان‌های سفارشی برای شروع تسک

---

خیلی عالی! برای شروع طراحی وایرفریم و انتخاب اسم خاص، اول اجازه بده یه نام متمایز، حرفه‌ای و مرتبط با فلسفه‌ی تداوم، بهره‌وری، و تحلیل زمان برات پیدا کنیم.

---

## 🌟 نام پیشنهادی اپ (انگلیسی + دلیل):

### 1. **Flowbyte**

> ترکیب "Flow" (تمرکز و جریان کاری) + "Byte" (نشانه‌ای از داده و تحلیل)
> **سبک، تکنولوژیک، مناسب اپ‌هایی که داده‌ها رو تحلیل می‌کنن**

### 2. **Chronomind**

> "Chrono" = زمان، "Mind" = ذهن
> **برای اپی که عادت‌های زمانی و ذهنی رو بررسی می‌کنه**

### 3. **TempoTrack**

> "Tempo" = آهنگ منظم زمان، "Track" = ردیابی
> **بسیار مناسب برای اپ‌های habit tracking با تحلیل‌های ریتمی**

### 4. **Contune**

> ترکیب "Continue" + "Tune"
> **به‌معنای تداوم منظم و هماهنگ کردن عادت‌ها مثل موسیقی**

### 5. **Zentime**

> ترکیب "Zen" (تمرکز و آرامش) + "Time"
> **اگر سبک مینیمال و آرام می‌خوای**

---

📌 **پیشنهاد اصلی من: `Flowbyte`**
چون هم حرفه‌ایه، هم کوتاه، هم فضای تکنولوژیک و تحلیلی داره.

---

حالا بریم سراغ طراحی وایرفریم 👇

---

## 📐 Flowbyte Wireframe

### 📱 (Dashboard)

```
+-----------------------------------------------------+
| Flowbyte 📊                               [👤]     |
+-----------------------------------------------------+

🔁 Current Cycle: "Focus 21"
📅 Days Passed: 7 of 21
⏱ Avg Time: 2.3h/day
⚠️ Irregular! Std.Dev = 1.4 (↑ > 50%)

---------------------------------------------------
🟣 Design Portfolio
 ✅ Today: 2h 20m
 ⏰ 09:30 - 11:50
 ✍️ "High focus today"
---------------------------------------------------
🟢 Learn German
 ❌ Not logged today
---------------------------------------------------

[➕ Add New Task]
[📈 See Analysis]


### 📱 📊 (Analysis Report)

```

+------------------------------------------+
| 📈 Performance Overview: "Focus 21" |
+------------------------------------------+

- Avg Daily Time: 2.3 hours
- Std Deviation: 1.4
- Most productive hour: 9AM–11AM
- Completion Rate: 75%

📅 Heatmap View:
[🟩🟩🟦⬜⬜🟦🟩] each box = a day, color = duration

```

```

───────────────────────────────────────────────────

### 📦 Create New Cycle

───────────────────────────────────────────────────

📝 Title: [ Focus Sprint – August ]

📆 Start Date: [ 2025-08-01 ]

📐 Duration:
[●] Week [ ] Month ⬅️ Toggle
[ 3 ] ⬅️ Input for number (e.g. "3 weeks")

☑️ Import tasks from previous cycle?

[🔘 Create Cycle]

```

---

### ⏱ Add Task

```

🟪 Task: Design Portfolio

[✅ Task done today?] Yes
[⏱ Start time:] 09:30
[⏲ End time:] 11:50
[📝 Note:] "Very productive!"

[💾 Save]

```

---

### 🎨 مدیریت تسک‌ها

```

+-------------------------------+
| 📝 My Tasks |
+-------------------------------+
| 🟣 Design Portfolio ⏱ Avg: 2.1h |
| 🟢 Learn German ⏱ Avg: 1.4h |
| 🟠 Workout ⏱ Avg: 0.8h |

[➕ Add New Task] [📤 Copy to new cycle]

```

---

### ⚙️ تنظیمات چرخه جدید

```

🔁 New Cycle:
[Title:] "August Focus Sprint"
[Start Date:] 2025-08-01
[Duration:] 30 days

[🔘 Import previous tasks?] ✅

[Create Cycle]

```

حتماً Lumi! برای ساخت اپ Flowbyte که شامل **ردیابی زمان، ساخت سیکل‌ها، تسک‌ها، آنالیز، و داشبورد اصلی** هست، یک ساختار تمیز و مقیاس‌پذیر بهت می‌دم.

---

## 🗂️ ساختار پوشه‌ها و کامپوننت‌ها (`/src`)

```

src/
├── assets/
│ └── logo.svg // لوگو و تصاویر استاتیک
│
├── components/
│ ├── Header.jsx // هدر بالا، شامل لوگو و آیکون پروفایل
│ ├── Header.css
│ │
│ ├── TaskCard.jsx // نمایش کارت هر تسک با رنگ و آمار روزانه
│ ├── TaskCard.css
│ │
│ ├── CycleSummary.jsx // خلاصه اطلاعات سیکل جاری: میانگین، انحراف معیار، آلارم‌ها
│ │
│ ├── TimeInputForm.jsx // فرم ثبت زمان و نوت روزانه برای هر تسک
│ │
│ ├── CycleCreator.jsx // فرم ساخت سیکل جدید (عنوان، تاریخ، مدت زمان، کپی تسک)
│ │
│ ├── DurationSelector.jsx // انتخاب بازه زمانی (هفته/ماه) با ورودی عدد
│ │
│ ├── AnalysisView.jsx // صفحه یا بخش نمایش نمودارها، heatmap، ساعت طلایی
│ │
│ └── AddTaskModal.jsx // مودال برای اضافه کردن تسک جدید با انتخاب رنگ و عنوان
│
├── context/
│ └── AppContext.jsx // مدیریت وضعیت کلی اپ (تسک‌ها، سیکل‌ها، حالت تم، یوزر و ...)
│
├── pages/
│ ├── Dashboard.jsx // صفحه اصلی: هدر + CycleSummary + TaskCard List + دکمه‌ها
│ ├── Analysis.jsx // صفحه نمایش جزئیات تحلیل‌ها (نمودارها و heatmap)
│ └── NewCycle.jsx // صفحه یا صفحه‌ک/مودال ساخت سیکل جدید (استفاده از CycleCreator)
│
├── utils/
│ ├── timeUtils.js // توابع محاسبه میانگین، انحراف معیار، تبدیل زمان و ...
│ └── colorUtils.js // توابع کمکی برای رنگ‌بندی، انتخاب رنگ مناسب، ...
│
├── App.jsx // ریشه اپ، مسیریابی بین صفحات، کانتکست پروایدر
└── index.js // رندر React در DOM

```

---

## 📦 شرح کامپوننت‌های اصلی:

### 🔹 `Header.jsx`

هدر ثابت بالا با لوگو و آیکن پروفایل
(پیاده‌سازی شد ✅)

---

### 🔹 `TaskCard.jsx`

نمایش هر تسک با رنگ، زمان، وضعیت امروز، و نوت

---

### 🔹 `CycleSummary.jsx`

نمایش خلاصه سیکل جاری:
میانگین زمان، انحراف معیار، هشدار نوسان

---

### 🔹 `DurationSelector.jsx`

کامپوننت انتخاب هفته/ماه + ورودی عدد
(مثال: `3 هفته` یا `2 ماه`)

---

### 🔹 `CycleCreator.jsx`

فرم کامل ساخت یک دوره‌ی جدید:

- عنوان
- تاریخ شروع
- `DurationSelector`
- تیک وارد کردن تسک‌های قبلی

---

### 🔹 `TimeInputForm.jsx`

فرم ثبت زمان و نوت برای یک تسک در هر روز

---

### 🔹 `AnalysisView.jsx`

نمودارها، heatmap، ساعت طلایی، درصد موفقیت

---

### 🔹 `AddTaskModal.jsx`

مودال بازشو برای ساخت تسک جدید
(با رنگ انتخابی و نام)

---

### 🧠 `AppContext.jsx`

مدیریت وضعیت کلی اپ با React Context (مثلاً: تسک‌های فعال، دوره جاری، تم روشن/تیره)

---

### 📄 `Dashboard.jsx`

صفحه اصلی شامل:

- `CycleSummary`
- لیست `TaskCard`s
- دکمه‌های `AddTask`, `See Analysis`

---

حتما Lumi!
اینجا یک طراحی وایرفریم ساده و متنی از چیدمان **کامپوننت‌ها در صفحه داشبورد (Dashboard)** می‌ذارم، دقیقاً مثل wireframe که شکل و جایگاه هر کامپوننت مشخص باشه.

---

# 📐 وایرفریم صفحه Dashboard (چیدمان کامپوننت‌ها)

```

+--------------------------------------------------------------+
| <Header /> |
| ┌─────────────┐ ┌───────────────┐ |
| | لوگو و پروفایل | | دکمه‌های ناوبری | |
| └─────────────┘ └───────────────┘ |
+--------------------------------------------------------------+

+--------------------------Main Content-------------------------+

┌─────────────────────────────────────────────────────────────┐
│ <CycleSummary /> │
│ --------------------------------------------------------- │
│ 🔁 Current Cycle: "Focus 21" │
│ 📅 Days Passed: 7 of 21 │
│ ⏱ Avg Time: 2.3h/day │
│ ⚠️ Irregular! Std.Dev = 1.4 (↑ > 50%) │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ <TaskCard /> List │
│ --------------------------------------------------------- │
│ 🟣 Design Portfolio │
│ ✅ Today: 2h 20m │
│ ⏰ 09:30 - 11:50 │
│ ✍️ "High focus today" │
│ │
│ 🟢 Learn German │
│ ❌ Not logged today │
│ │
│ 🟠 Workout │
│ ✅ Today: 1h │
└─────────────────────────────────────────────────────────────┘

                           [➕ Add New Task]

                           [📈 See Analysis]

───────────────────────────────────────────────────────────────

                            <AddTaskModal />
             (مودال وقتی کلیک روی "Add New Task" فعال می‌شود)

───────────────────────────────────────────────────────────────

```

---

# 📐 وایرفریم صفحه Analysis

```

+--------------------------------------------------------------+
| <Header /> |
+--------------------------------------------------------------+

┌─────────────────────────────<AnalysisView />──────────────────┐

📈 Performance Overview: "Focus 21"

- Avg Daily Time: 2.3 hours
- Std Deviation: 1.4
- Most productive hour: 9AM–11AM
- Completion Rate: 75%

📅 Heatmap View:
[🟩🟩🟦⬜⬜🟦🟩] each box = a day, color = duration

└───────────────────────────────────────────────────────────────┘

```

---

# 📐 وایرفریم صفحه NewCycle (ایجاد چرخه جدید)

```

+--------------------------------------------------------------+
| <Header /> |
+--------------------------------------------------------------+

┌─────────────────────────────<CycleCreator />──────────────────┐

📝 Title: [_____________________]

📆 Start Date: [ __/__/____ ]

📐 Duration:
[●] Week [ ] Month [ 3 ] (input number)

☑️ Import tasks from previous cycle?

[🔘 Create Cycle]

└───────────────────────────────────────────────────────────────┘

```

---

# جمع‌بندی

- **Header** همیشه در بالای صفحه، مستقل از محتوا
- **CycleSummary** در داشبورد، خلاصه وضعیت سیکل جاری
- **TaskCard**ها به شکل لیست زیر خلاصه سیکل
- دکمه‌ها برای افزودن تسک جدید و رفتن به تحلیل‌ها پایین‌تر
- مودال افزودن تسک هنگام کلیک باز می‌شود
- در صفحه تحلیل فقط بخش `AnalysisView` و نمودارها هست
- در صفحه ساخت سیکل جدید، فرم کامل با کامپوننت‌های ورودی
```

حتماً! یک فیچر جالب و کاربردی که می‌تونی در پروژه React خودت (Flowbyte 📊) اضافه کنی:

---

### 🎯 **Daily Streak Tracker 🔥 (تداوم روزانه انجام کار)**

> **هدف**: نمایش تعداد روزهایی که کاربر بدون وقفه کار مورد نظر رو انجام داده.

---

### ✅ جزئیات پیاده‌سازی:

#### 1. **Streak Detection Logic:**

- ذخیره آخرین روزی که کار انجام شده (`lastCompletedDate`)
- افزایش `streakCount` در صورت انجام کار در روز بعد.
- ریست در صورت جا انداختن یک روز.

#### 2. **UI نمایش تداوم:**

```jsx
🔥 You’ve worked **7 days** in a row!
```

یا گراف دایره‌ای یا خطی (با `Recharts` یا `Chart.js`).

#### 3. **لوکال استوریج / دیتابیس:**

- داده‌ها رو می‌تونی موقتاً در `localStorage` ذخیره کنی یا اگر بک‌اند داری توی `Supabase` یا `Firebase`.

---

### ✨ امکانات جانبی:

- **Notification** در روز هشتم (مثلاً: 🎉 "یک هفته پشت سر گذاشتی!")
- **Badge System** برای تداوم خاص (مثلاً 3، 7، 30 روز)
- **Dark/Light Mode** هماهنگ با streak
