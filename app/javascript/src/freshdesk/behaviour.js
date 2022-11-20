import { getWorkaroundWindow } from "./chat_widget_setup";

document.addEventListener("turbolinks:load", function() {
  document.querySelector("[data-behavior='sf-freshdesk-help-launcher']").onclick = function(e) {
    e.preventDefault()

    window.FreshworksWidget("open")

    getWorkaroundWindow().fcWidget.close()
    document.getElementById('freshchat_workaround_div').classList.remove('open')
  }

  document.querySelector("[data-behavior='sf-freshdesk-chat-launcher']").onclick = function(e) {
    e.preventDefault()

    getWorkaroundWindow().fcWidget.open()
    window.FreshworksWidget("close")

    document.getElementById('freshchat_workaround_div').classList.add('open')
  }
});

