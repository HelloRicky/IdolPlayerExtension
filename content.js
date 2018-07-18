//https://github.com/igrigorik/videospeed
//https://github.com/zu1in/ytpb-speed-control

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      $('#ytp-menu-speed').parent().find('.ytp-button:contains("1.5")').click()

      console.log(firstHref);
    }
  }
);