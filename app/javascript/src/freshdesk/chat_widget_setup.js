const freshChatScriptTagId = "freshchat-js-sdk"

export function getWorkaroundWindow() {
  return document.getElementById('freshchat_workaround').contentWindow
}

function configureFreshworksChat() {
  const workaroundWindow = getWorkaroundWindow()
  workaroundWindow.fcWidget.init({
    config: {
      headerProperty: {
        hideChatButton: true
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

  const workaround_iframe_document = document.getElementById('freshchat_workaround').contentWindow.document
  const element = workaround_iframe_document.createElement("script")
  element.id = tag
  element.async = false
  // element.src = "https://wchat.eu.freshchat.com/js/widget.js"
  element.src = "http://localhost:3000" + window.freshdeskChatSettings.script_path
  element.onload = configureFreshworksChat
  workaround_iframe_document.body.appendChild(element)
}

function flushFreshchat() {
  const workaround_window = getWorkaroundWindow()

  workaround_window.fcSettings = null
  workaround_window.fcWidget = null
  delete workaround_window.history.pushState_fc_observer
  delete workaround_window.history.replaceState_fc_observer
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
  delete workaround_window.history.pushState
  delete workaround_window.history.replaceState
}

// Before page is cached
document.addEventListener("turbolinks:before-cache", function() {
  const scriptTag = document.getElementById(freshChatScriptTagId)
  scriptTag.parentNode.removeChild(scriptTag)
})

// After turbolinks loaded
document.addEventListener("turbolinks:load", function() {
  console.log("turbolinks:load")
  if(getWorkaroundWindow().fcWidget) { flushFreshchat() }
  initializeFreshworksChat(document, freshChatScriptTagId)
})

