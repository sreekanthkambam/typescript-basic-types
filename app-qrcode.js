/*function onScanSuccess(qrCodeMessage) {
	console.log(qrCodeMessage);
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);*/

Html5Qrcode.getCameras().then(devices => {
	/**
	 * devices would be an array of objects of type:
	 * { id: "id", label: "label" }
	 */
	if (devices && devices.length) {
	  var cameraId = devices[0].id;
	  const html5QrCode = new Html5Qrcode(/* element id */ "scanner");
		html5QrCode.start(
			cameraId, 
			{
				fps: 10,    // Optional frame per seconds for qr code scanning
				qrbox: 250  // Optional if you want bounded box UI
			},
			qrCodeMessage => {
				alert(qrCodeMessage);
				html5QrCode.stop();
			},
			errorMessage => {
				// parse error, ignore it.
			}
		).catch(err => {
  			// Start failed, handle it.
		});
	  // .. use this to start scanning.
	}
  }).catch(err => {
	// handle err
  });