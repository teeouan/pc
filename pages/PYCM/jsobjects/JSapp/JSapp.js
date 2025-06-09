export default {
  deferredPrompt: null,

  initPWAInstallPrompt() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      showAlert("คุณสามารถติดตั้งแอปนี้ได้!", "info");
      storeValue("showInstallBtn", true); // แสดงปุ่มใน UI
    });
  },

  installApp() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          showAlert("ติดตั้งแอปเรียบร้อยแล้ว", "success");
        } else {
          showAlert("ผู้ใช้ยกเลิกการติดตั้ง", "warning");
        }
        this.deferredPrompt = null;
        storeValue("showInstallBtn", false);
      });
    }
  }
}
