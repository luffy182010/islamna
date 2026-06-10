const azkarButtons = document.querySelectorAll("aside button");
const contentBox = document.querySelector(".box");

const azkarContent = {
  "أذكار الصباح": `
    <h2>أذكار الصباح</h2>
    <p>أصبحنا وأصبح الملك لله والحمد لله.</p>
    <p>اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.</p>
  `,

  "أذكار المساء": `
    <h2>أذكار المساء</h2>
    <p>أمسينا وأمسى الملك لله والحمد لله.</p>
    <p>اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير.</p>
  `,

  "أذكار النوم": `
    <h2>أذكار النوم</h2>
    <p>باسمك اللهم أموت وأحيا.</p>
    <p>اللهم قني عذابك يوم تبعث عبادك.</p>
  `,

  "أذكار الاستيقاظ": `
    <h2>أذكار الاستيقاظ</h2>
    <p>الحمد لله الذي أحيانا بعدما أماتنا وإليه النشور.</p>
  `,

  "أذكار بعد الصلاة": `
    <h2>أذكار بعد الصلاة</h2>
    <p>أستغفر الله، أستغفر الله، أستغفر الله.</p>
    <p>اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام.</p>
  `
};

azkarButtons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent.trim();

    contentBox.innerHTML = azkarContent[buttonText];

    azkarButtons.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
  });
});

window.addEventListener("load", () => {
  contentBox.innerHTML = azkarContent["أذكار الصباح"];
});
