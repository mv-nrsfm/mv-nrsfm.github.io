window.HELP_IMPROVE_VIDEOJS = false;


let tabsWithContent = (function () {
  let tabs = document.querySelectorAll('.tabs li');
  let tabsContent = document.querySelectorAll('.tabs-content')

  let video_names = ["shape_and_color", 
                     "color_only",
                     "shape_only",
                     "viewpoint"];

  let deactvateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  let activateTabsContent = function (tab) {
    let tabId = getIndex(tab);
    let video_str_name = "/".concat(video_names[tabId].concat("_compressed.mp4"));
    for (i = 0; i < tabsContent.length; i++) {
      let videoContainer = tabsContent[i];
      let videoSource = videoContainer.children[0]
      let new_src_str = videoSource.src.split("/").slice(0, -1).join("/").concat(video_str_name);
      videoSource.src = new_src_str;
      videoContainer.load();
    }
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deactvateAllTabs();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  })

  tabs[0].click();
});


$(document).ready(function() {

  tabsWithContent();

})
