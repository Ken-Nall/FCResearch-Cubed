// ==UserScript==
// @name         FCResearch Cubed
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Adds cubed calc to Dimensions for items in FCResearch!
// @author       @kennenal
// @match        http://fcresearch-na.aka.amazon.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
          document.querySelectorAll("tr").forEach(tr => {
            const th = tr.querySelector("th");
            const td = tr.querySelector("td");
            if (th && td && th.textContent.trim() === "Dimensions") {
              // Extract the three numbers
              const dims = td.textContent.match(/[\d.]+/g);
              if (dims && dims.length >= 3) {
                const volume = parseFloat(dims[0]) * parseFloat(dims[1]) * parseFloat(dims[2]);
                td.textContent = td.textContent + " - " + volume.toFixed(2) + " CU";
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
      document.querySelectorAll("tr").forEach(tr => {
        const th = tr.querySelector("th");
        const td = tr.querySelector("td");
        if (th && td && th.textContent.trim() === "Dimensions") {
          // Extract the three numbers
          const dims = td.textContent.match(/[\d.]+/g);
          if (dims && dims.length >= 3) {
            const volume = parseFloat(dims[0]) * parseFloat(dims[1]) * parseFloat(dims[2]);
            td.textContent = td.textContent + " - " + volume.toFixed(2) + " CU";
          }
        }
      });
    })();
  