/*
 * The embed code that Freshdesk provides to integrate their "helpdesk" widget
 * doesn't play well with turbolinks (Freshdesk support ticket: https://support.freshdesk.com/en/support/tickets/11469845).
 *
 * This code adds the javascript code for the widget after each turbolinks navigation
 * (see the `turbolinks:load` event handler), and it also prevents errors from
 * happenning when the user navigates again before the widget finishes the initialization.
 *
 * The easies way to detect if the widget is initialized and customized correctly is
 * to see if the launcher is hidden. In case that we are forcing the launcher to be
 * hidden using CSS we can use a locale different than English and see if the copies
 * of the widget are correctly translated.
 */

const isFDWidgetInitializationInProgress = function() {
  return window.fwSettings && !window.fwSettings.options
}

/*
 * The function `customizeFreshdeskWidget` containcs all the customizations we need to
 * do to the widget using the Freshdesk  Widget API (https://developers.freshdesk.com/widget-api/).
 * Is executed on each `turbolinks:load` event, after initialize the widget.
 */
const customizeFreshdeskWidget = function() {
  window.FreshworksWidget("hide", "launcher")
  window.FreshworksWidget("identify", "ticketForm", {
    name: window.freshdeskWidgetData.name,
    email: window.freshdeskWidgetData.email
  })
  window.FreshworksWidget("hide", "ticketForm", ["name", "email"])
}

// document.addEventListener('turbolinks:click', function() {
//   if (document.body.dataset.freshdeskEnabled !== "true") {
//     return
//   }
//
//   try {
//     window.FreshworksWidget?.('destroy')
//   } catch(e) {
//     //error in destroy can be ignored since destroy will fail if called before init
//   }
// })

document.addEventListener('turbolinks:load', function() {
  if(isFDWidgetInitializationInProgress()) {
    // can skip script re addition since the previous widget load initialization is still in progress
    return
  }

  const scriptTag = document.getElementById('freshdesk-help-widget-js')
  scriptTag && scriptTag.remove()

  try {
    window.FreshworksWidget?.('destroy')
  } catch(e) {
    //error in destroy can be ignored since destroy will fail if called before init
  }

  /*
   * Purge the function `window.FreshworksWidget`. It will be initialized
   * again some lines later
   */
  delete window.FreshworksWidget

  window.fwSettings = {
    widget_id: 101000001762,
    locale: window.freshdeskWidgetData.locale
  }

  /*
   * The function `window.FreshworksWidget`, at this point, acts as some sort of buffer
   * for orders. Later on, when the widget is fully initialized, the function gets
   * modified and it will process all the accumulated instructions.
   */
  !(function() {
    if ('function' !== typeof window.FreshworksWidget) {
      const n = function() {
        n.q.push(arguments)
      };
      (n.q = []), (window.FreshworksWidget = n)
    }
  })()

  /*
   * The following lines add the tag
   * `<script type="text/javascript" id="freshdesk-help-widget-js" src="https://euc-widget.freshworks.com/widgets/101000001762.js"></script>`
   * to the head of the page. This file contains the source code for the Freshdesk
   * help widget.
   */
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.id = 'freshdesk-help-widget-js'
  script.src = 'https://euc-widget.freshworks.com/widgets/101000001762.js'
  document.head.appendChild(script)
  
  customizeFreshdeskWidget()
})
