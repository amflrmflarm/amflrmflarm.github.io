//sneed
(function(){ window.fuckyou = {
    request: function(auth, data, success, error, silent, retry) {
        var req = new XMLHttpRequest();
        req.open("POST", "https:/mspfa.com/", true);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Accept", "application/json");
        req.onreadystatechange = function() {
            if (req.readyState == XMLHttpRequest.DONE) {
                if (req.status) {
                    statusType = Math.floor(req.status / 100);
                    if (statusType == 2) {
                        var res;
                        if (req.responseText) {
                            res = JSON.parse(req.responseText);
                        }
                        if (typeof success == "function") {
                            success(res);
                        }
                    } else if (statusType == 4) {
                        console.log("So what's the next step of your master plan?");
                    }
                }
            }
        };
        var formData = "";
        for (var i in data) {
            formData += (formData ? "&" : "") + encodeURIComponent(i) + "=" + encodeURIComponent(data[i]);
        }
        req.send(formData);
    }
};)();