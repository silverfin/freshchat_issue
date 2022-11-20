const freshChatScriptTagId = "freshchat-js-sdk"

export function getWorkaroundWindow() {
  return document.getElementById('freshchat_workaround').contentWindow
}

function configureFreshworksChat() {
  const workaroundWindow = getWorkaroundWindow()
  workaroundWindow.fcWidget.init({
    config: {
      headerProperty: {
        hideChatButton: false
      }
    },
    token: "f2510e46-539e-4f37-92c2-0a16e7b9447c",
    host: "https://wchat.eu.freshchat.com",
    locale: 'nl',
  })

  workaroundWindow.fcWidget.setExternalId(window.freshdeskChatSettings.externalId)
  workaroundWindow.fcWidget.user.setFirstName(window.freshdeskChatSettings.firstName)
  workaroundWindow.fcWidget.user.setEmail(window.freshdeskChatSettings.email)
}

function initializeFreshworksChat(document, tag) {
  getWorkaroundWindow().fcSettings = {
    onInit: function() {
      getWorkaroundWindow().fcWidget.on("widget:destroyed", function() {
        console.log('Widget destroyed callback')
      })

      getWorkaroundWindow().fcWidget.on("widget:loaded", function(resp) {
        console.log('Widget Loaded callback')
      })
    }
  }

  const workaround_iframe_document = getWorkaroundWindow().document

  const element = workaround_iframe_document.createElement("script")
  element.id = tag
  element.async = false
  // element.src = "https://wchat.eu.freshchat.com/js/widget.js"
  element.src = "http://localhost:3000" + window.freshdeskChatSettings.script_path
  element.onload = configureFreshworksChat
  workaround_iframe_document.body.appendChild(element)
}

// After turbolinks loaded
document.addEventListener("turbolinks:load", function() {
   document.getElementById('freshchat_workaround').onload = function() {
     console.log("Loaded!")
     initializeFreshworksChat(document, freshChatScriptTagId)
   }
})

