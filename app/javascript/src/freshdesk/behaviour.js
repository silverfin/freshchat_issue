document.addEventListener("turbolinks:load", function() {
  document.querySelector("[data-behavior='sf-freshdesk-help-launcher']").onclick = function(e) {
    e.preventDefault()

    window.FreshworksWidget("open")
    window.fcWidget.close()
  }
});

