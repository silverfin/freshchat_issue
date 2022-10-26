const freshChatScriptTagId = "freshchat-js-sdk"

function configureFreshworksChat() {
  window.fcWidget.init({
    config: {
      headerProperty: {
        hideChatButton: true
      }
    },
    token: "f2510e46-539e-4f37-92c2-0a16e7b9447c",
    host: "https://wchat.eu.freshchat.com",
    locale: 'nl',
  })

  window.fcWidget.setExternalId(window.freshdeskChatSettings.externalId)
  window.fcWidget.user.setFirstName(window.freshdeskChatSettings.firstName)
  window.fcWidget.user.setEmail(window.freshdeskChatSettings.email)
}

function initializeFreshworksChat(document, tag) {
  window.fcSettings = {
    onInit: function() {
      window.fcWidget.on("widget:destroyed", function() {
        console.log('Widget destroyed callback')
      })

      window.fcWidget.on("widget:loaded", function(resp) {
        console.log('Widget Loaded callback')
      })
    }
  }

  const element = document.createElement("script")
  element.id = tag
  element.async = false
  // element.src = "https://wchat.eu.freshchat.com/js/widget.js"
  element.src = "http://localhost:3000" + window.freshdeskChatSettings.script_path
  element.onload = configureFreshworksChat
  document.body.appendChild(element)
}

function flushFreshchat() {
  window.fcSettings = null
  window.fcWidget = null
  delete window.history.pushState_fc_observer
  delete window.history.replaceState_fc_observer
  /*
  ** The following two lines restore the original values of `pushState` and `replaceState` that
  ** the freshdesk script overwrote. The freshdesk widget doesn't expose an API to
  ** appropriately reverse the changes they did.
  **
  ** The original implementation can't be deleted by accident: If a property with the
  ** same name exists on the object's prototype chain, then, after deletion, the
  ** object will use the property from the prototype chain (in other words, delete only
  ** has an effect on own properties)
  ** (source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
  */
  delete window.history.pushState
  delete window.history.replaceState
}

// Navigating to another page
document.addEventListener("turbolinks:visit", function() {
  if(window.fcWidget) {
    window.fcWidget.syncDestroy()
  } else {
    console.warn("No widget found!")
  }
})

document.addEventListener("turbolinks:before-cache", function() {
  const scriptTag = document.getElementById(freshChatScriptTagId)
  scriptTag.parentNode.removeChild(scriptTag)

  // Remove css that will be re-added when loading the widget
  document.querySelectorAll('link[href*="widget.css"]').forEach(l => l.parentNode.removeChild(l))
  document.querySelectorAll('link[href*="cb.css"]').forEach(l => l.parentNode.removeChild(l))
})

// After turbolinks loaded
document.addEventListener("turbolinks:load", function() {
  console.log("turbolinks:load")
  if(window.fcWidget) { flushFreshchat() }
  initializeFreshworksChat(document, freshChatScriptTagId)
})

