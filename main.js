// الحصول على العناصر الرئيسية من الصفحة

const sectionTitle = document.getElementById("section-title");

const boxTitle = document.getElementById("box-title");

const boxContent = document.getElementById("box-content");


// الحصول على أزرار الخدمات

const dailyAzkarButton = document.getElementById("daily-azkar");

const quranButton = document.getElementById("quran");

const hadithButton = document.getElementById("hadith");

const lessonsButton = document.getElementById("lessons");

const prayerTimesButton = document.getElementById("prayer-times");

const qiblaButton = document.getElementById("qibla");


// الحصول على أزرار الأذكار

const morningButton = document.getElementById("morning");

const eveningButton = document.getElementById("evening");

const sleepButton = document.getElementById("sleep");

const wakeButton = document.getElementById("wake");

const afterPrayerButton = document.getElementById("after-prayer");


// أزرار الخدمات

dailyAzkarButton.addEventListener("click", function () {

    sectionTitle.textContent = "الأذكار";

});

quranButton.addEventListener("click", function () {

    sectionTitle.textContent = "القرآن الكريم";

});

hadithButton.addEventListener("click", function () {

    sectionTitle.textContent = "الأحاديث";

});

lessonsButton.addEventListener("click", function () {

    sectionTitle.textContent = "الدروس";

});

prayerTimesButton.addEventListener("click", function () {

    sectionTitle.textContent = "مواقيت الصلاة";

});

qiblaButton.addEventListener("click", function () {

    sectionTitle.textContent = "القبلة";

});


// أذكار الصباح

morningButton.addEventListener("click", function () {

    boxTitle.textContent = "أذكار الصباح";

    boxContent.innerHTML = `
        <p>اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.</p>

        <p>أصبحنا وأصبح الملك لله رب العالمين.</p>

        <p>رضيت بالله رباً وبالإسلام ديناً وبمحمد ﷺ نبياً ورسولاً.</p>

        <p>حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.</p>
    `;

});


// أذكار المساء

eveningButton.addEventListener("click", function () {

    boxTitle.textContent = "أذكار المساء";

    boxContent.innerHTML = `
        <p>اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير.</p>

        <p>أمسينا وأمسى الملك لله رب العالمين.</p>

        <p>رضيت بالله رباً وبالإسلام ديناً وبمحمد ﷺ نبياً ورسولاً.</p>

        <p>حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.</p>
    `;

});


// أذكار النوم

sleepButton.addEventListener("click", function () {

    boxTitle.textContent = "أذكار النوم";

    boxContent.innerHTML = `
        <p>باسمك اللهم أموت وأحيا.</p>

        <p>اللهم قني عذابك يوم تبعث عبادك.</p>

        <p>سبحان الله 33 مرة.</p>

        <p>الحمد لله 33 مرة.</p>

        <p>الله أكبر 34 مرة.</p>
    `;

});


// أذكار الاستيقاظ

wakeButton.addEventListener("click", function () {

    boxTitle.textContent = "أذكار الاستيقاظ";

    boxContent.innerHTML = `
        <p>الحمد لله الذي أحيانا بعدما أماتنا وإليه النشور.</p>

        <p>لا إله إلا الله وحده لا شريك له.</p>

        <p>سبحان الله والحمد لله ولا إله إلا الله والله أكبر.</p>
    `;

});


// أذكار بعد الصلاة

afterPrayerButton.addEventListener("click", function () {

    boxTitle.textContent = "أذكار بعد الصلاة";

    boxContent.innerHTML = `
        <p>أستغفر الله.</p>

        <p>أستغفر الله.</p>

        <p>أستغفر الله.</p>

        <p>اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام.</p>
    `;

});
