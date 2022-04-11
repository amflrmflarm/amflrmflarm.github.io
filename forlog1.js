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
    } }
    fuckyou.request(0, {
        do: "story",
        s: 41016
    }, (c) => {
        for (const p of c.p) {
              pagetable = document.getElementsByTagName("tbody")[0];
            pagenum = document.getElementsByTagName("h4")[0];
              pagerow = document.createElement("tr");
              pagedate = document.createElement("td");
              pagecontent = document.createElement("td");
              pagelink = document.createElement("td");
          
            pagenum.textContent = ("Displaying " + c.p.length + " expired pages from the past " + Math.floor((c.p[c.p.length-1].d - c.p[0].d)/(1000 * 60 * 60 * 24)) + " days");
        
            date = p.d;
            date = (date.toString()).slice(0, 9);
            console.log(p);
              pagedate.textContent = date;
              pagerow.append(pagedate);
              
            page = p.b;
            for (var i = 0; i < 5; i++) {
                switch (i) {
                    case 0:
                        srcremoved = (page.replace(/<img src=\"(.+)\">/g, ""));
                        break;
                    case 1:
                        srcremoved = srcremoved.replace(/\[color=("?)([^";]+?)\1\]/gi, "");
                        break;
                    case 2:
                        srcremoved = srcremoved.replace(/\[\/color]/gi, "");
                        break;
                    case 3:
                        srcremoved = srcremoved.replace(/\n/g, " ");
                        break;
                    case 4:
                        if (srcremoved.length > 100) {
                            srcremoved = srcremoved.slice(0, 100) + "...";
                        }
                        break;
                }
            }
               pagecontent.textContent = srcremoved;
          
            pagedirect = document.createElement("a");
              pagedirect.href = "https://mspfa.com/?s=41016&p=" + (p.n[0]-1);
              pagedirect.innerText = "View";
          
              pagelink.append("[");
              pagelink.append(pagedirect);
              pagelink.append("]");
          
              pagerow.append(pagecontent);
            pagerow.append(pagelink);
              pagetable.append(pagerow);
        }
    });
    for(ele of document.getElementsByClassName("back")){
        {ele.addEventListener("pnclick",()=>{history.back();})}
    }
})();
