document.addEventListener("turbolinks:load", function() {
  document.querySelector("[data-behavior='sf-freshdesk-help-launcher']").onclick = function(e) {
    e.preventDefault()

    window.FreshworksWidget("open")
    window.fcWidget.close()
  }

  document.querySelector("[data-behavior='sf-freshdesk-chat-launcher']").onclick = function(e) {
    e.preventDefault()

    window.fcWidget.open()
    window.FreshworksWidget("close")
  }
});

