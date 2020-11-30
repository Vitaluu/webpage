let num = 0;
QRScan.onclick = function () {
    window.nativeAppFacade.startQR();  
}

Share.onclick = function () {
    window.nativeAppFacade.startShare("titile", "vk.com");
}

class MobileAppFacade {
    static resultQR(qr) {
        label.textContent = qr;
    }
}

MobileAppFacade.resultQR("label");