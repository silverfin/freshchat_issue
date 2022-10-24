!function() {

  var e = {
    75749: function(e, t) {
      t.config = {
        type: "production",
        cdn: {
          enabled: {
            forAssets: !1,
            forApi: !1
          },
          assets: "assetscdn-",
          api: "apicdn-",
          domain: {
            production: "wchat.eu.freshchat.com"
          },
          subDomain: "",
          protocol: {
            production: "https://"
          }
        }
      }
    }
  }
    , t = {};

  function n(i) {
    var o = t[i];
    if (void 0 !== o)
      return o.exports;
    var a = t[i] = {
      exports: {}
    };
    return e[i](a, a.exports, n),
      a.exports
  }

  !function() {
    "use strict";
    var e = {
      SAMPLE_TOKEN: "WEB_CHAT_TOKEN",
      frameDivId: "fc_frame",
      frameId: "fc_widget",
      pushFrameDivId: "fc_push_frame",
      pushFrameId: "fc_push",
      modalDivId: "fc_web_modal",
      classes: {
        fullscreenClass: "fc-widget-fullscreen"
      },
      FAQ_EXPAND_WIDTH: 835,
      AJAX_URL: {
        canary: "/app/services/app/webchat/{token}/canary"
      },
      unifiedWidgetBetaFeature: "MULTI_WIDGETS_CONFIG_ENABLED",
      canaryRoutes: {
        feature: "canary",
        rts: "rtscanary"
      },
      config: {
        model: "config",
        url: "/app/services/app/webchat/{token}/config?domain={domainName}"
      },
      impostor: {
        getFreshChatConfigs: "get_freshchat_configs",
        activityEvents: ["click", "dblclick", "mousemove", "mouseover", "mousewheel", "mouseout", "contextmenu", "mousedown", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel", "keydown", "keypress", "keyup", "focus", "blur", "change", "submit", "scroll", "resize"],
        timeoutForFetchingConfigInMillis: 3e3,
        tagName: "freshchat-widget"
      }
    };

    var t = function() {
      !function(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function")
      }(this, undefined);

      var e = !1
        , t = !1
        , n = !1
        , i = !1
        , o = []
        , a = {};

      return {
        isLoaded: function() {
          return e
        },
        loaded: function(t) {
          e = t
        },
        isInitialized: function() {
          return t
        },
        initialized: function(e) {
          t = e
        },
        isOpened: function() {
          return n
        },
        opened: function(e) {
          n = e
        },
        doOpen: function() {
          return i
        },
        openOnLoad: function(e) {
          i = e
        },
        getTags: function() {
          return o
        },
        setTags: function(e) {
          o = e
        },
        getFaqTags: function() {
          return a
        },
        setFaqTags: function(e) {
          a = e
        },
        reset: function() {
          e = !1,
            t = !1,
            n = !1,
            i = !1,
            o = [],
            a = {}
        }
      }
    }.bind(void 0)();

    function i(e, t) {
      if (e !== t)
        throw new TypeError("Cannot instantiate an arrow function")
    }

    var o = function() {

      i(this, undefined);

      var e = null
        , t = null
        , n = null
        , o = null
        , a = null
        , s = !1
        , r = null
        , d = null
        , c = {}
        , l = {}
        , u = {}
        , f = ["firstName", "lastName", "email", "phone", "phoneCountry", "locale"];

      return {
        getIntegrations: function() {
          return c
        },
        getcampaignRuleIds: function() {
          return d
        },
        setcampaignRuleIds: function(e) {
          d = e
        },
        setIntegrations: function(e) {
          c = e
        },
        getFlowId: function() {
          return n
        },
        setFlowId: function(e) {
          n = e
        },
        getFlowVersionId: function() {
          return o
        },
        setFlowVersionId: function(e) {
          o = e
        },
        getPreviewMode: function() {
          return a
        },
        setPreviewMode: function(e) {
          a = e
        },
        getIsTemplateBot: function() {
          return r
        },
        setIsTemplateBot: function(e) {
          r = e
        },
        getExternalId: function() {
          return e
        },
        setExternalId: function(t) {
          e = t
        },
        getRestoreId: function() {
          return t
        },
        setRestoreId: function(e) {
          t = e
        },
        setIdentifyByReferenceId: function(e) {
          s = e
        },
        getIdentifyByReferenceId: function() {
          return s
        },
        getConfig: function() {
          return l
        },
        setConfig: function(e) {
          l = e
        },
        getProperties: function() {
          return u
        },
        setProperties: function(e) {
          var t = this;
          e && (f.forEach(function(n) {
            i(this, t),
            e[n] && (u[n] = e[n])
          }
            .bind(this)),
          e.meta && this.setUserMeta(e.meta))
        },
        setFirstName: function(e) {
          u.firstName = e
        },
        setLastName: function(e) {
          u.lastName = e
        },
        setEmail: function(e) {
          u.email = e
        },
        setPhone: function(e) {
          u.phone = e
        },
        setPhoneCountry: function(e) {
          u.phoneCountry = e
        },
        setUserMeta: function(e) {
          if (u.meta = u.meta || {},
            e)
            for (var t in e)
              e.hasOwnProperty(t) && (u.meta[t] = e[t])
        },
        setLocale: function(e) {
          u.locale = e
        },
        reset: function() {
          e = null,
            t = null,
            l = {},
            u = {}
        },
        getJSON: function() {
          return {
            externalId: e,
            restoreId: t,
            customConfig: l,
            properties: u
          }
        }
      }
    }.bind(void 0)();

    var a,
      s,
      r,
      d,
      c,
      l,
      u,
      f,
      h,
      p = function() {
        !function(e, t) {
          if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function")
        }(this, undefined);

        var e = {}
          , t = {}
          , n = {};

        return {
          setProperties: function(i) {
            for (var o in i)
              "fc_override_bot_property" !== o && (t[o] = i[o]);
            for (var a in n = i.fc_override_bot_property)
              e[a] = n[a];
            for (var s in e)
              for (var r in t)
                e[s].hasOwnProperty(r) || (e[s][r] = t[r]);
            e.commonBotsProperties = t
          },
          getProperties: function() {
            return e
          },
          reset: function() {
            e = {}
          }
        }
      }.bind(void 0)(),

      g = n(75749),

      v = {
        url_domain: function(e) {
          var t = document.createElement("a");
          return t.href = e,
            t.origin
        },
        getElementStyle: function(e, t) {
          return window.getComputedStyle(e)[t]
        },
        setAttr: function(e, t) {
          for (var n in t)
            t.hasOwnProperty(n) && e.setAttribute(n, t[n]);
          return e
        },
        remove: function(e) {
          var t = document
            , n = t.body
            , i = t.getElementById(e);
          i && (this.purge(i),
            n.removeChild(i))
        },
        purge: function(e) {
          var t, n, i, o = e.attributes;
          if (o)
            for (t = o.length - 1; t >= 0; t -= 1)
              "function" == typeof e[i = o[t].name] && (e[i] = null);
          if (o = e.childNodes)
            for (n = o.length,
                   t = 0; t < n; t += 1)
              this.purge(e.childNodes[t])
        },
        cdn_url: function() {
          if (g && g.config) {
            var e = g.config.type
              , t = g.config.cdn;
            return t.protocol[e] + (t.enabled.forAssets ? t.assets : "") + t.domain[e]
          }
        },
        bindEvent: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          window.addEventListener ? window.addEventListener(e, t, n) : window.attachEvent(e, t, n)
        },
        unbindEvent: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          window.removeEventListener ? window.removeEventListener(e, t, n) : window.detachEvent(e, t, n)
        },
        parseJSON: function(e) {
          var t;
          if (e) {
            try {
              t = JSON.parse(e)
            } catch (e) {}
            return t
          }
        },
        stringifyJSON: function(e) {
          var t = null;
          if (e) {
            try {
              var n = window.ItilUtil && window.ItilUtil.jsonStringifyWrapper;
              t = n && "function" == typeof n && n(e) || JSON.stringify(e)
            } catch (e) {}
            return t
          }
        },
        storageAvailable: function(e) {
          var t;
          try {
            var n = "__storage_test__";
            return (t = window.localStorage).setItem(n, n),
              t.removeItem(n),
              !0
          } catch (e) {
            return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 !== t.length
          }
        }(),
        isPushSupportedByBrowser: function() {
          var e, t, n, i, o, a, s, r, d = !1, c = !1;
          i = window.chrome,
            o = window.navigator,
            a = o.vendor,
            s = o.userAgent.indexOf("OPR") > -1,
            r = o.userAgent.indexOf("Edge") > -1,
          null != i && "Google Inc." === a && !1 === s && !1 === r && (e = !!(n = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)) && parseInt(n[2], 10)) && (d = e >= 50),
          navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && (t = function() {
            var e = navigator.userAgent
              , t = e.indexOf("Firefox")
              , n = e.substring(t + 8).split(".");
            return !(!n || !n.length) && parseInt(n[0], 10)
          }(),
          t && (c = t >= 44));
          var l = "serviceWorker"in navigator
            , u = function() {
            var e = !1;
            try {
              ServiceWorkerRegistration && "showNotification"in ServiceWorkerRegistration.prototype && (e = !0)
            } catch (e) {}
            return e
          }()
            , f = "PushManager"in window;
          return l && u && f && (d || c)
        },
        getAgent: (c = navigator.appVersion, l = navigator.userAgent, u = navigator.appName, f = "" + parseFloat(c), h = parseInt(c, 10), -1 !== l.indexOf("Station") && (d = "Station"), -1 !== (s = l.indexOf("Opera")) ? (u = "Opera", f = l.substring(s + 6), -1 !== (s = l.indexOf("Version")) && (f = l.substring(s + 8))) : -1 !== (s = l.indexOf("MSIE")) ? (u = "Microsoft Internet Explorer", f = l.substring(s + 5)) : -1 !== (s = l.indexOf("Edge")) ? (u = "Edge", f = l.substring(s + 5)) : -1 !== (s = l.indexOf("Trident")) ? (u = "Trident", f = l.substring(s + 8)) : -1 !== (s = l.indexOf("Chrome")) ? (u = "Chrome", f = l.substring(s + 7)) : -1 !== (s = l.indexOf("Safari")) ? (u = "Safari", f = l.substring(s + 7), -1 !== (s = l.indexOf("Version")) && (f = l.substring(s + 8))) : -1 !== (s = l.indexOf("Firefox")) ? (u = "Firefox", f = l.substring(s + 8)) : -1 === (s = l.indexOf("Mobile")) || -1 === l.indexOf("iPad") && -1 === l.indexOf("iPhone") && -1 === l.indexOf("iPod") && -1 === l.indexOf("wv") ? (a = l.lastIndexOf(" ") + 1) < (s = l.lastIndexOf("/")) && (u = l.substring(a, s), f = l.substring(s + 1), u.toLowerCase() === u.toUpperCase() && (u = navigator.appName)) : (u = "WebView", f = l.substring(s + 8)), -1 !== (r = f.indexOf(";")) && (f = f.substring(0, r)), -1 !== (r = f.indexOf(" ")) && (f = f.substring(0, r)), h = parseInt("" + f, 10), isNaN(h) && (f = "" + parseFloat(c), h = parseInt(c, 10)), { name: u, appName: d, version: h, versionx: f, os: navigator.platform }),
        isSafariBrowser: function() {
          return !(!this.getAgent || "Safari" !== this.getAgent.name)
        }
      };

    function m(e, t) {
      if (e !== t)
        throw new TypeError("Cannot instantiate an arrow function")
    }

    var w = function() {
      m(this, undefined);
      var t = null
        , n = null
        , i = null
        , a = null
        , s = null
        , r = null
        , d = null
        , c = !1
        , l = !1
        , u = null
        , f = !1
        , h = null
        , p = null
        , g = null
        , w = null
        , b = null
        , y = null
        , C = ["get_user_uuid"]
        , _ = null
        , k = null;
      return {
        getHost: function() {
          return r
        },
        getToken: function() {
          return n
        },
        getWidgetUuid: function() {
          return i
        },
        getReferrer: function() {
          return a
        },
        getSiteId: function() {
          return s
        },
        getSettings: function() {
          return d
        },
        getJsFunctions: function() {
          return k
        },
        setSettings: function(e) {
          c = !!((d = e).userAuthConfig && d.userAuthConfig.jwtAuthEnabled && d.userAuthConfig.strictModeEnabled),
            l = !(!d.userAuthConfig || !d.userAuthConfig.jwtAuthEnabled)
        },
        isJWTStrictMode: function() {
          return c
        },
        isJWTEnabled: function() {
          return l
        },
        getJWTAuthToken: function() {
          return u
        },
        setJWTAuthToken: function(e) {
          u = e
        },
        isLoaded: function() {
          return f
        },
        loaded: function(e) {
          f = e
        },
        loadingActions: function() {
          return C
        },
        init: function(e) {
          n = e.token,
            i = e.widgetUuid,
            a = e.referrer,
            r = e.host,
            s = e.siteId,
            c = !1,
            l = !1,
            u = e.jwtAuthToken,
            f = !1,
            h = e.flowId,
            p = e.flowVersionId,
            w = e.isTemplateBot,
            g = e.previewMode,
            b = e.cspNonce,
            y = e.omniCookie,
            _ = e.eagerLoad,
            k = e.jsFunctions || {}
        },
        reset: function() {
          n = i = a = r = s = c = l = u = f = h = p = g = y = w = void 0
        },
        getJSON: function() {
          return {
            token: n,
            flowId: h,
            widgetUuid: i,
            flowVersionId: p,
            previewMode: g,
            isTemplateBot: w,
            referrer: a,
            host: r,
            siteId: s,
            jwtStrictMode: c,
            jwtEnabled: l,
            jwtAuthToken: u,
            loaded: f,
            omniCookie: y
          }
        },
        load: function(e, n, i) {
          if (v.isSafariBrowser() && b) {
            var o = document.createElement("script");
            o.nonce = b,
              o.textContent = 'window.location = "'.concat(e, '"'),
              t = i.contentWindow,
              i.contentDocument.body.appendChild(o)
          } else
            t = window.open(e, n)
        },
        postMessage: function(e) {
          t && t.postMessage(e, r)
        },
        dispatch: function(e, t) {
          e && t && "function" == typeof e && e(t)
        },
        unload: function() {
          console.log("unloading")
          this.postMessage({
            action: "push_subscribe_destroy"
          })
          console.log("unloaded")
        },
        add: function() {
          var t = document
            , n = t.body
            , i = t.getElementById(e.frameDivId)
            , a = t.createElement("IFRAME")
            , s = o.getConfig()
            , r = s && s.cssNames;
          i && "DIV" === i.tagName || (i = t.createElement("DIV"),
            n.appendChild(i)),
            v.setAttr(i, {
              id: e.frameDivId,
              class: r && r.widget || ""
            }),
            i.classList.add("fc_dn"),
            s && s.headerProperty ? ("ltr" === s.headerProperty.direction && i.classList.add("fc_l2r"),
            s.headerProperty.hideChatButton || i.classList.remove("fc_dn")) : i.classList.remove("fc_dn"),
            v.setAttr(a, {
              id: e.frameId,
              name: e.frameId,
              title: "Chat",
              frameborder: "0",
              allowFullScreen: "true",
              webkitallowfullscreen: "true",
              mozallowfullscreen: "true"
            }),
            i.appendChild(a);
          var d = s && s.widgetCanary ? e.canaryRoutes.feature : "";
          this.loadCanaryWidget(d, a)
        },
        loadRTSCanaryWidget: function(t) {
          var i = this
            , o = new XMLHttpRequest
            , a = e.AJAX_URL.canary.replace("{token}", n);
          a = r + a,
            o.open("GET", a, !0),
            o.onreadystatechange = function() {
              if (m(this, i),
              4 === o.readyState) {
                var n = v.parseJSON(o.response)
                  , a = n && n.canary_enabled ? e.canaryRoutes.rts : "";
                this.loadCanaryWidget(a, t)
              }
            }
              .bind(this),
            o.send()
        },
        checkIfMultiWidget: function() {
          var t = this.getSettings();
          return null == t ? void 0 : t.betaFeatures[e.unifiedWidgetBetaFeature]
        },
        loadCanaryWidget: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
            , o = arguments.length > 1 ? arguments[1] : void 0
            , s = "";
          s = !g || "botflow" !== g && "autofaq" !== g ? "".concat(r, "/widget/").concat(t, "?token=").concat(n, "&referrer=").concat(a) : "".concat(r, "/widget/").concat(t, "?token=").concat(n, "&referrer=").concat(a, "&previewMode=").concat(g),
          i && (s += "&widgetUuid=".concat(i)),
          _ && (s += "&eagerLoad=true"),
            this.load(s, e.frameId, o)
        },
        remove: function(e) {
          v.remove(e),
            t = null
        },
        setFrameSize: function() {
          var t, n = this.getSettings(), i = o.getConfig(), a = this.checkIfMultiWidget();
          if (null === n)
            return "";
          var s = a ? null == n || null === (t = n.appearanceConfig) || void 0 === t ? void 0 : t.widgetSize : n.widgetSize
            , r = !(!i || !i.fullscreen) && i.fullscreen
            , d = "fc-widget-normal"
            , c = document.getElementById(e.frameDivId);
          !0 === r && c.classList.add(e.classes.fullscreenClass),
          s && s.length > 0 && (d = "fc-widget-" + s.toLowerCase()),
            c.classList.add(d)
        },
        setFramePosition: function() {
          var t, n, i, o, a = this.getSettings(), s = this.checkIfMultiWidget(), r = document.getElementById(e.frameDivId), d = s && "BOTTOM_LEFT" === (null == a || null === (t = a.appearanceConfig) || void 0 === t ? void 0 : t.widgetPosition), c = s ? null == a || null === (n = a.appearanceConfig) || void 0 === n ? void 0 : n.widgetBottomOffsetPx : "15", l = s ? null == a || null === (i = a.appearanceConfig) || void 0 === i ? void 0 : i.widgetRightOffsetPx : "15";
          if (s && "TEXT" === (null == a || null === (o = a.appearanceConfig) || void 0 === o ? void 0 : o.widgetLauncherStyle)) {
            var u, f = document.createElement("span");
            f.innerText = null == a || null === (u = a.appearanceConfig) || void 0 === u ? void 0 : u.widgetLauncherValue,
              f.id = "fc-chat-temp-text",
              f.style.cssText = '\n          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;\n          font-size: 14px;\n          font-weight:500;\n          white-space: nowrap;\n          visibility: hidden;\n          position: absolute;\n          bottom: 0px;\n        ',
              r.parentNode.appendChild(f);
            var h = document.createElement("style");
            h.innerHTML = "#fc_frame.fc-launcher-text{width: ".concat(f.offsetWidth + 60, "px}"),
              r.parentNode.appendChild(h),
              r.parentNode.removeChild(f),
              r.classList.add("fc-launcher-text")
          }
          r.style.bottom = "".concat(c || 15, "px"),
            d ? (r.classList.add("fc-widget-left"),
              r.style.left = "".concat(l || 15, "px")) : r.style.right = "".concat(l || 15, "px")
        },
        setWidgetDisplayStyle: function() {
          var t = document.body
            , n = document.getElementById(e.frameDivId)
            , i = v.getElementStyle(t, "display");
          i && -1 !== ["flex"].indexOf(i) && n.style.setProperty("display", i)
        }
      }
    }.bind(void 0)();

    var b = function() {
      !function(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function")
      }(this, undefined);

      var e = []
        , t = !1;

      return {
        enque: function(n) {
          t || (void 0 === e && (e = []),
            e.push(n))
        },
        deque: function() {
          if (e && e.length)
            return e.shift()
        },
        toggleLock: function(e) {
          t = e
        },
        isLocked: function() {
          return t
        },
        isEmpty: function() {
          return !e || !e.length
        }
      }
    }.bind(void 0)();

    var y = function() {
      !function(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function")
      }(this, undefined);

      var e = {};

      return {
        subscribe: function(n, i, o) {
          t.isLoaded() || w.isLoaded() && -1 !== w.loadingActions().indexOf("get_user_uuid") ? (e[n + "_ack"] = o,
            w.postMessage({
              action: n,
              payload: i
            })) : b.enque({
            action: n,
            payload: i,
            handler: o
          })
        },
        publish: function(t, n) {
          w.dispatch(e[t], {
            success: n.success,
            status: n.status,
            data: n.data
          })
        }
      }
    }.bind(void 0)()
      , C = function(e, t) {
      return new Promise((function(n, i) {
          y.subscribe(e, t, (function(e) {
              var t = e && e.status
                , o = e && e.success;
              200 === t || o ? n(e) : i(e)
            }
          ))
        }
      ))
    }
      , _ = function(e, t, n) {
      t && "function" == typeof t && (n = t,
        t = null),
        y.subscribe(e, t, n)
    }
      , k = function(e) {
      return !(!e || "function" != typeof e)
    };

    var E = function() {
      !function(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function")
      }(this, undefined);
      var e = {}
        , t = ["widget:opened", "widget:closed", "widget:loaded", "dialog:opened", "dialog:closed", "widget:destroyed", "frame:statechange", "user:statechange", "user:created", "user:cleared", "user:authenticated", "message:sent", "message:received", "unreadCount:notify", "push:subscribed", "readReceipts:update", "csat:received", "csat:updated", "csat:show", "anchorLink:clicked", "faq:clicked", "download:file", "rts:connected", "rts:disconnected"];
      return {
        clear: function() {
          e = {}
        },
        valid: function(e) {
          return !(!e || !t) && -1 !== t.indexOf(e)
        },
        subscribe: function(t, n) {
          this.valid(t) && (void 0 === e[t] && (e[t] = []),
            e[t].push(n))
        },
        unsubscribe: function(t, n) {
          if (this.valid(t)) {
            var i, o = e && e[t];
            if (o)
              for (var a = 0, s = o.length; a < s; a++)
                if (i = o[a],
                k(i) && (!n || i.name === n.name)) {
                  e[t].splice(a, 1);
                  break
                }
          }
        },
        publish: function(t, n, i) {
          if (this.valid(t)) {
            var o = e && e[t];
            if (o)
              for (var a = function(e) {
                return function() {
                  n ? e(n) : e()
                }
              }, s = 0, r = o.length; s < r; s++) {
                var d = a(o[s]);
                i ? setTimeout(d, 0) : d()
              }
            if ("function" == typeof window.CustomEvent) {
              var c = new CustomEvent("fwcrm_event_consume",{
                detail: {
                  name: t,
                  origin: window.origin,
                  args: n
                }
              });
              window.dispatchEvent(c)
            }
          }
        }
      }
    }.bind(void 0)();

    var x = function() {
      !function(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function")
      }(this, undefined);
      var t = null
        , n = null
        , i = null
        , o = !1
        , a = null
        , s = null
        , r = null;
      return {
        isLoaded: function() {
          return o
        },
        loaded: function(e) {
          o = e
        },
        getSource: function() {
          return r
        },
        setSource: function(e) {
          r = e
        },
        getHost: function() {
          return t
        },
        getHostOrigin: function() {
          return n
        },
        getLogoPath: function() {
          return i
        },
        init: function(e) {
          t = e.host,
            n = e.hostOrigin,
            i = e.appLogoPath,
            a = e.locale,
            s = e.sales360App,
            this.load()
        },
        reset: function() {
          t = null,
            n = null,
            i = null,
            a = null,
            s = null,
            o = !1,
            r = null
        },
        postMessage: function(e) {
          e.openWindow ? window.open(t + "&action=" + btoa(e.action) + "&appLogoPath=" + btoa(i) + "&locale=" + btoa(a) + "&sales360App=" + btoa(s), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400") : o && this.post({
            action: e.action,
            payload: e.payload
          })
        },
        post: function(e) {
          r.postMessage(e, n)
        },
        add: function() {
          var n = document
            , i = n.body
            , o = n.getElementById(e.pushFrameDivId)
            , a = n.createElement("IFRAME");
          o && "DIV" === o.tagName || (o = n.createElement("DIV"),
            i.appendChild(o)),
            o.setAttribute("id", e.pushFrameDivId),
            v.setAttr(a, {
              id: e.pushFrameId,
              src: t,
              title: "Chat",
              frameborder: "0"
            }),
            o.appendChild(a)
        },
        load: function() {
          v.isPushSupportedByBrowser() && this.add()
        },
        unload: function() {
          v.remove(e.pushFrameDivId),
            this.reset()
        }
      }
    }.bind(void 0)();

    var I = function() {
      !function(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function")
      }(this, undefined);
      var t = function(e) {
        27 === e.keyCode && this.destroy()
      };
      return {
        create: function(n) {
          var i = document
            , o = i.body
            , a = i.createElement("DIV")
            , s = i.createElement("IMG")
            , r = i.createElement("DIV")
            , d = i.createElement("DIV");
          a.setAttribute("id", e.modalDivId),
            a.onclick = this.destroy,
            s.setAttribute("src", n),
            s.onclick = this.destory,
            d.appendChild(s),
            d.className = "image-cell",
            r.appendChild(d),
            r.className = "image-wrapper",
            a.appendChild(r),
            o.appendChild(a),
            window.addEventListener ? window.addEventListener("keydown", t.bind(this), !1) : window.attachEvent("keydown", t.bind(this), !1)
        },
        destroy: function() {
          var n = document
            , i = n.body
            , o = n.getElementById(e.modalDivId);
          o && (v.purge(o),
            i.removeChild(o)),
            window.removeEventListener ? window.removeEventListener("keydown", t.bind(this)) : window.detachEvent("keydown", t.bind(this))
        }
      }
    }.bind(void 0)();

    var L = function() {
      !function(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function")
      }(this, undefined);
      var e = {}
        , t = "_fc_observer";
      return {
        attach: function(n, i, o) {
          var a = "".concat(i).concat(t);
          n[i] && o && (void 0 === n[a] || n[a] !== o) && (n[a] = o,
            function(n, i) {
              e[i] = n[i],
                n[i] = function() {
                  var o = e[i].apply(n, arguments)
                    , a = n["".concat(i).concat(t)];
                  return "function" == typeof a && a(),
                    o
                }
            }(n, i))
        },
        detach: function(n, i) {
          var o = "".concat(i).concat(t);
          n[i] && n[o] && (n[o] = void 0,
            function(t, n) {
              e[n] && (delete t[n],
                t[n] = e[n],
                delete e[n])
            }(n, i))
        }
      }
    }.bind(void 0)();

    var T = function() {
      !function(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function")
      }(this, undefined);

      var e,
        t,
        n,
        i = function(i) {
          e = i.oldValue,
            t = i.newValue,
            n = i.title,
            w.postMessage({
              action: "track_location",
              payload: {
                pageUrl: i
              }
            })
        },
        o = function() {
          var o = window.location.href;
          t !== o && (e = t,
            t = o,
            n = document.title,
            i({
              oldValue: e,
              newValue: t,
              title: n
            }))
        };

      return {
        start: function() {
          t = window.location.href,
            i({
              newValue: t,
              title: document.title
            }),
            L.attach(window.history, "pushState", o),
            L.attach(window.history, "replaceState", o),
            window.addEventListener ? (window.addEventListener("hashchange", o, !1),
              window.addEventListener("popstate", o, !1)) : (window.attachEvent("hashchange", o, !1),
              window.attachEvent("popstate", o, !1))
        },
        stop: function() {
          e = t = void 0,
            L.detach(window.history, "pushState"),
            L.detach(window.history, "replaceState"),
            window.removeEventListener ? (window.removeEventListener("hashchange", o),
              window.removeEventListener("popstate", o)) : (window.detachEvent("hashchange", o),
              window.detachEvent("popstate", o))
        },
        track: i
      }
    }.bind(void 0)();

    function S(e, t) {
      if (e !== t)
        throw new TypeError("Cannot instantiate an arrow function")
    }

    var B = function() {
        var e = this;

        S(this, undefined);

        var t = null,
          n = null,
          i = null,

          o = function() {
            S(this, e),
              w.postMessage({
                action: "track_activity",
                payload: {
                  seen: n
                }
              })
          }.bind(this),

          a = function() {
            S(this, e),
              n = (new Date).getTime()
          }.bind(this),

          s = function(t) {
            S(this, e),
              v.unbindEvent("keypress", a),
              v.unbindEvent("mousemove", a),
              v.unbindEvent("click", a),
            t && (v.bindEvent("keypress", a),
              v.bindEvent("mousemove", a),
              v.bindEvent("click", a))
          }.bind(this),

          r = function() {
            S(this, e);
            var a = (new Date).getTime();
            null === i || null === n || t && (a < t || n < t || a - t < 59e3 || n > t && n < a && o()),
              t = a
          }.bind(this),

          d = function() {
            S(this, e),
            i && clearInterval(i),
              i = null,
              n = null,
              t = null
          }.bind(this),

          c = function() {
            S(this, e),
              d(),
              s(!0),
              t = (new Date).getTime(),
              i = setInterval(r, 6e4)
          }.bind(this),

          l = function() {
            S(this, e),
              n = (new Date).getTime(),
              o(),
              d(),
              s(!1)
          }.bind(this),

          u = function() {
            S(this, e),
            "hidden" === document.visibilityState && l()
          }.bind(this);

        return {
          start: function() {
            c(),
              v.bindEvent("focus", c),
              v.bindEvent("blur", l),
              v.bindEvent("beforeunload", l),
              v.bindEvent("visibilitychange", u)
          },
          stop: function() {
            l(),
              v.unbindEvent("focus", c),
              v.unbindEvent("blur", l),
              v.unbindEvent("beforeunload", l),
              v.unbindEvent("visibilitychange", u)
          }
        }
      }.bind(void 0)(),

      P = function() {
        T.start(),
          B.start()
      },
      O = function() {
        T.stop(),
          B.stop()
      };

    function M(e, t) {
      if (e !== t)
        throw new TypeError("Cannot instantiate an arrow function")
    }

    var D = {
      start: function() {
        b.isEmpty() || b.isLocked() || (b.toggleLock(!0),
          this.run())
      },
      run: function() {
        var e = b.deque();
        e ? this.process(e) : b.toggleLock(!1)
      },
      process: function(e) {
        var t = this;
        e.handler ? y.subscribe(e.action, e.payload, function(n) {
          M(this, t),
          "function" == typeof e.handler && e.handler(n),
            this.run()
        }
          .bind(this)) : (y.subscribe(e.action, e.payload),
          setTimeout(function() {
            M(this, t),
              this.run()
          }
            .bind(this), 0))
      }
    };

    var W = function() {
        return function(e, t) {
          if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function")
        }(this, undefined),
          {
            init: function(e) {
              var t = document.createElement("script")
                , n = e.host;
              t.type = "text/javascript",
                t.src = n + "/widget/js/co-browsing.js",
                (document.body ? document.body : document.getElementsByTagName("head")[0]).appendChild(t),
                window.fc_cobrowse = {
                  host: e.host,
                  locale: e.locale
                }
            }
          }
      }.bind(void 0)(),

      N = {
        setCookie: function(e, t, n) {
          var i = n || 31536e6
            , o = new Date(+new Date + i)
            , a = t || "_fw_crm_v";
          return document.cookie = a + "=" + e + ";domain=." + location.hostname + ";path=/;expires=" + o.toUTCString() + ";SameSite=Lax;",
            e
        },
        removeCookie: function(e) {
          var t = e || "_fw_crm_v";
          document.cookie = t + "=;domain=." + location.hostname + ";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=Lax;"
        },
        getCookie: function() {
          if (document.cookie) {
            for (var e, t, n, i = "freshworks-s360-vid", o = {}, a = document.cookie.split(";"), s = 0, r = a.length; s < r; s++)
              (e = a[s] && a[s].split("=")) && e.length && (o[e[0].trim()] = e[1]);
            return o[i] ? (n = o[i],
              this.removeCookie(i)) : n = o._fw_crm_v,
              t = n || this.generateUUID(),
              this.setCookie(t)
          }
        },
        generateUUID: function() {
          var e = (new Date).getTime()
            , t = performance && performance.now && 1e3 * performance.now() || 0;
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(n) {
              var i = 16 * Math.random();
              return e > 0 ? (i = (e + i) % 16 | 0,
                e = Math.floor(e / 16)) : (i = (t + i) % 16 | 0,
                t = Math.floor(t / 16)),
                ("x" == n ? i : 7 & i | 8).toString(16)
            }
          ))
        }
      };

    function F(e, t) {
      if (e !== t)
        throw new TypeError("Cannot instantiate an arrow function")
    }

    function A(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
        e
    }

    var R = {
        onMessageCB: function() {
          var e;
          return function() {
            // !e ? console.log("onMessageCB: Theres no `e` known!") : console.log("onMessageCB: We've got an `e`!");
            return e || (e = this.onMessage.bind(this))
          }
        }(),

        onCustomEventCB: function() {
          var e;
          return function() {
            // !e ? console.log("onCustomEventCB: Theres no `e` known!") : console.log("onCustomEventCB: We've got an `e`!");
            return e || (e = this.onCustomMessage.bind(this))
          }
        }(),

        onVisibilityChangeCB: function() {
          var e;
          return function() {
            // !e ? console.log("onVisibilityChangeCB: Theres no `e` known!") : console.log("onVisibilityChangeCB: We've got an `e`!");
            return e || (e = this.onVisibilityChange.bind(this))
          }
        }(),

        subscribe: function() {
          // console.log("Subscribing!");
          window.addEventListener ? (window.addEventListener("message", this.onMessageCB(), !1),
            window.addEventListener("focus", this.onVisibilityChangeCB(), !1),
            window.addEventListener("blur", this.onVisibilityChangeCB(), !1)) : (window.attachEvent("onmessage", this.onMessageCB()),
            window.attachEvent("focus", this.onVisibilityChangeCB()),
            window.attachEvent("blur", this.onVisibilityChangeCB())),
            this.subscribeSales360Event()
        },
        unsubscribe: function() {
          // console.log("Unsubscribing!");
          window.removeEventListener("message", this.onMessageCB(), !1);
          window.removeEventListener("focus", this.onVisibilityChangeCB(), !1);
          window.removeEventListener("blur", this.onVisibilityChangeCB(), !1);
          this.unsubscribeSales360Event();
        },
        subscribeSales360Event: function() {
          window.addEventListener ? window.addEventListener("fwcrm_event", this.onCustomEventCB(), !1) : window.attachEvent("fwcrm_event", this.onCustomEventCB())
        },
        unsubscribeSales360Event: function() {
          window.removeEventListener ? window.removeEventListener("fwcrm_event", this.onCustomEventCB(), !1) : window.detachEvent("fwcrm_event", this.onCustomEventCB())
        },

        onVisibilityChange: function(e) {
          switch (e.type) {
            case "focus":
              w.postMessage({
                action: "widget_focus"
              });
              break;
            case "blur":
              w.postMessage({
                action: "widget_blur",
                payload: {
                  title: document.title,
                  location: window.location.href
                }
              }),
                x.postMessage({
                  action: "widget_location",
                  openWindow: !1,
                  payload: window.location.href
                })
          }
        },

        onUserCreate: function(e) {
          E.publish("user:created", e)
        },

        loadWidget: function() {
          if (!1 === t.isInitialized()) {
            t.initialized(!0);
            var e = w.getJSON()
              , n = o.getProperties()
              , i = o.getConfig()
              , a = t.getTags()
              , s = t.getFaqTags()
              , r = p.getProperties();
            if (e.integrations = o.getIntegrations(),
              e.campaignRuleIds = o.getcampaignRuleIds(),
              e.externalId = o.getExternalId(),
              e.restoreId = o.getRestoreId(),
              e.flowId = o.getFlowId(),
              e.flowVersionId = o.getFlowVersionId(),
              e.previewMode = o.getPreviewMode(),
              e.isTemplateBot = o.getIsTemplateBot(),
              e.identifyByReferenceId = o.getIdentifyByReferenceId(),
            n && (e.properties = n),
            r && (e.botsMeta = r),
            i && (e.config = i),
            a && (e.tags = a),
            s && (e.faqTags = s),
              e.userAgent = v.getAgent,
              v.storageAvailable) {
              var d = e.token
                , c = localStorage.getItem(d)
                , l = e.siteId ? "".concat(e.token, "_").concat(e.siteId) : null
                , u = l ? localStorage.getItem(l) : null;
              if ((c || l && u) && (e.storage = {},
                e.storage[d] = c || JSON.stringify({}),
              l && (e.storage[l] = u || JSON.stringify({}))),
              i && i.overrideDS) {
                var f = "lsds_".concat(l || d)
                  , h = localStorage.getItem(f);
                h ? e.lsds = A({}, f, h) : (e.lsds = A({}, f, JSON.stringify({})),
                  e.migrateLFDS = !0)
              }
            }
            w.setFrameSize(),
              w.setFramePosition(),
              w.setWidgetDisplayStyle(),
              w.postMessage({
                action: "load_widget",
                payload: e
              })
          }
        },
        unloadWidget: function() {
          x.isLoaded() && x.unload(),
            t.reset(),
            o.reset(),
            O(),
            w.reset(),
            w.remove(e.frameDivId),
            this.unsubscribe(),
            E.publish("widget:destroyed", null, !0),
            E.clear()
        },
        updateFrameSettings: function(e) {
          if (null !== w.getSettings() || void 0 === e)
            return !1;
          w.setSettings(e)
        },
        onCustomMessage: function(e) {},
        onMessage: function(n) {
          var i = this
            , a = n.origin || n.originalEvent.origin
            , s = o.getConfig()
            , r = s && s.cssNames;
          if (a === w.getHost() || a === x.getHostOrigin()) {
            var d = n.data
              , c = d && d.action;
            if (this.updateFrameSettings(d.settingsPayload),
              c) {
              var l, u, f = document.getElementById(e.frameDivId), h = r && r.expanded || "expanded", p = w.checkIfMultiWidget(), g = w.getSettings(), m = null == g || null === (l = g.appearanceConfig) || void 0 === l ? void 0 : l.widgetRightOffsetPx, b = "BOTTOM_LEFT" === (null == g || null === (u = g.appearanceConfig) || void 0 === u ? void 0 : u.widgetPosition);
              switch (c) {
                case "push_subscribe_destroy_response":
                  debugger;
                  console.log("Got push_subscribe_destroy_response");
                  this.unloadWidget();
                  break;
                case "TRIGGER_JS_FUNCTION":
                  var C, _ = null === (C = d.data.functionName) || void 0 === C ? void 0 : C.replace("options.", ""), k = w.getJsFunctions()[_], L = k && k.call(this, JSON.parse(d.data.params));
                  d.data.value = L,
                    w.postMessage(d);
                  break;
                case "OPEN_URL":
                  window.open(d.data.url, d.data.target);
                  break;
                case "push_user_meta":
                  E.publish("push:subscribed", d.data),
                    w.postMessage(d);
                  break;
                case "toggle_dialog":
                  d.data ? E.publish("dialog:opened") : E.publish("dialog:closed");
                  break;
                case "reset_user_cookie":
                  N.removeCookie(),
                    w.postMessage({
                      action: "update_cookie",
                      payload: {
                        omniCookie: N.getCookie()
                      }
                    });
                  break;
                case "restore_user_cookie":
                  N.removeCookie(),
                    N.setCookie(d.alias),
                    w.postMessage({
                      action: "restore_cookie",
                      payload: {
                        alias: d.alias
                      }
                    });
                  break;
                case "notify_frame":
                  var T = d.data
                    , S = document.getElementById(e.frameDivId)
                    , B = r && r.open || "fc-open";
                  "expand" === T ? (S.style.removeProperty("max-height"),
                    S.style.removeProperty("height"),
                    S.classList.add("h-open-notify"),
                    S.classList.add(B),
                    S.classList.add(T)) : "close" === T ? (S.style.removeProperty("max-height"),
                    S.style.removeProperty("height"),
                    S.classList.remove("h-open-notify"),
                    S.classList.remove(B),
                    S.classList.remove("expand")) : "mobile-view" === T ? S.classList.add("fc-mobile-view") : (S.classList.add("h-open-notify"),
                    S.classList.add(B));
                  break;
                case "resize_frame":
                  var O = document.getElementsByTagName("BODY")[0]
                    , M = r && r.open || "fc-open";
                  t.opened(d.isOpen),
                    t.isOpened() ? (f.classList.add("h-open-container"),
                      f.classList.add(M),
                      f.classList.add("widget-open-animate"),
                      E.publish("widget:opened"),
                      setTimeout(function() {
                        F(this, i),
                          f.classList.remove("widget-open-animate")
                      }
                        .bind(this), 1e3),
                    O && O.classList.add("fc-widget-open")) : (f.style.removeProperty("max-height"),
                      f.style.removeProperty("height"),
                      f.classList.remove("h-open-container"),
                      f.classList.remove(M),
                      E.publish("widget:closed"),
                    O && O.classList.remove("fc-widget-open"));
                  break;
                case "toggle_frame":
                  d.show ? f.classList.remove("hide") : -1 === f.className.trim().indexOf("hide") && f.classList.add("hide");
                  break;
                case "push_frame_loaded":
                  x.loaded(!0),
                    x.setSource(n && n.source),
                    x.postMessage({
                      action: "widget_location",
                      openWindow: !1,
                      payload: window.location.href
                    }),
                    w.postMessage({
                      action: "widget_location",
                      payload: {
                        title: document.title,
                        location: window.location.href
                      }
                    });
                  break;
                case "frame_state_change":
                  var A = document.getElementById(e.frameDivId)
                    , R = d && d.data
                    , U = R && R.frameState
                    , j = w.getSettings() && w.getSettings().enabledFeatures
                    , V = o.getConfig();
                  E.publish("frame:statechange", d),
                  "initialized" === U && (w.isJWTEnabled() && w.isJWTStrictMode() && A.classList.add("fc_dn"),
                  null != V && V.eagerLoad && A.classList.add("hide"),
                    this.loadWidget(),
                  j && -1 !== j.indexOf("COBROWSING") && W.init({
                    host: w.getHost(),
                    locale: o.getProperties().locale
                  })),
                  "loaded" === U && w.loaded(!0),
                  "authenticated" !== U && "not_authenticated" !== U || w.isJWTEnabled() && w.isJWTStrictMode() && (d.success ? A.classList.remove("fc_dn") : 304 !== d.status && this.unloadWidget());
                  break;
                case "widget_loaded":
                  t.loaded(!0),
                    E.publish("widget:loaded");
                  var q = o.getConfig()
                    , J = document.getElementById(e.frameDivId);
                  null != q && q.eagerLoad && J.classList.remove("hide"),
                  x.isLoaded() || x.init({
                    host: d.pushDomain + "?ref=" + btoa(window.location.origin),
                    hostOrigin: v.url_domain(d.pushDomain),
                    appLogoPath: d.appLogoPath,
                    locale: d.locale,
                    sales360App: d.sales360App
                  }),
                  t.doOpen() && w.postMessage({
                    action: "open_chat"
                  }),
                    w.postMessage({
                      action: "widget_location",
                      payload: {
                        title: document.title,
                        location: window.location.href
                      }
                    });
                  break;
                case "datastore_loaded":
                  w.postMessage({
                    action: "load_rules"
                  });
                  break;
                case "rules_loaded":
                  P(),
                    D.start();
                  break;
                case "enlarge_image":
                  I.create(d.picUrl);
                  break;
                case "expand_all":
                  document.getElementById(e.frameDivId).classList.add("expanded-modal"),
                    document.getElementById(e.frameDivId).classList.add(h);
                  break;
                case "expand_article_view":
                  p && window.innerWidth < e.FAQ_EXPAND_WIDTH + m && (f.classList.add(b ? "expand-article-left" : "expand-article-right"),
                    f.style.setProperty(b ? "left" : "right", "15px")),
                    f.classList.remove("collapsed-article_view", "collapse-article-left", "collapse-article-right"),
                    f.classList.add("expanded-article_view");
                  break;
                case "collapse_article_view":
                  p && (f.classList.add(b ? "collapse-article-left" : "collapse-article-right"),
                    f.style.setProperty(b ? "left" : "right", "".concat(m, "px"))),
                    f.classList.remove("expanded-article_view"),
                    f.classList.add("collapsed-article_view");
                  break;
                case "collapse_all_article_view":
                  f.classList.remove("expanded-article_view", "collapsed-article_view"),
                  p && (f.style.setProperty(b ? "left" : "right", "".concat(m, "px")),
                    f.classList.remove("expand-article-left", "expand-article-right", "collapse-article-left", "collapse-article-right"));
                  break;
                case "set_bubble_height":
                  document.getElementById(e.frameDivId).style.height = d.height + "px";
                  break;
                case "collapse_all":
                  document.getElementById(e.frameDivId).classList.remove("expanded-modal"),
                    document.getElementById(e.frameDivId).classList.remove(h),
                    document.getElementById(e.frameDivId).classList.add("avoid-jitter"),
                    setTimeout(function() {
                      F(this, i),
                        document.getElementById(e.frameDivId).classList.remove("avoid-jitter")
                    }
                      .bind(this), 300);
                  break;
                case "user_state_change":
                  E.publish("user:statechange", d);
                  break;
                case "user_authenticated":
                  E.publish("user:authenticated", d);
                  break;
                case "user_created":
                  var z = d.data;
                  if (t.isLoaded())
                    z && o.setRestoreId(z.restoreId),
                      this.onUserCreate(d);
                  else if (d.success) {
                    var H = z && z.externalId
                      , G = z && z.restoreId
                      , X = o.getExternalId();
                    X ? X === H && (o.setRestoreId(G),
                      this.onUserCreate(d)) : this.onUserCreate(d)
                  } else
                    this.onUserCreate(d);
                  break;
                case "user_cleared":
                  E.publish("user:cleared"),
                    x.postMessage({
                      action: "clear:subscription",
                      openWindow: !1
                    }),
                    o.reset();
                  break;
                case "message_sent":
                  E.publish("message:sent", d);
                  break;
                case "message_received":
                  E.publish("message:received", d);
                  break;
                case "read_receipts_update":
                  E.publish("readReceipts:update", d);
                  break;
                case "csat_updated":
                  E.publish("csat:updated", d);
                  break;
                case "csat_received":
                  E.publish("csat:received", d);
                  break;
                case "anchor_link_clicked":
                  E.publish("anchorLink:clicked", d);
                  break;
                case "faq_clicked":
                  E.publish("faq:clicked", d);
                  break;
                case "download_file":
                  E.publish("download:file", d);
                  break;
                case "ask_permission":
                  x.postMessage({
                    action: "ask:permission",
                    openWindow: !0
                  });
                  break;
                case "clear_subscription":
                  x.postMessage({
                    action: "clear:subscription",
                    openWindow: !1
                  });
                  break;
                case "unread_count_notify":
                  E.publish("unreadCount:notify", d.data);
                  break;
                case "message_from_agent":
                  E.publish("message:received", d.data);
                  break;
                case "message_from_user":
                  E.publish("message:sent", d.data);
                  break;
                case "set_storage_item":
                  if (v.storageAvailable) {
                    var Q = d.data;
                    Q && Q.key && Q.value && localStorage.setItem(Q.key, JSON.stringify(Q.value))
                  }
                  break;
                case "remove_storage_item":
                  if (v.storageAvailable) {
                    var K = d.data;
                    K && K.key && localStorage.removeItem(K.key)
                  }
                  break;
                case "startScreenShare":
                  window.fc_cobrowse && window.fc_cobrowse.allowScreenShare(n);
                  break;
                case "set_lsds_item":
                  if (v.storageAvailable) {
                    var Y = d.data
                      , Z = Y && Y.key;
                    if (Z) {
                      var $ = Y && Y.value;
                      localStorage.setItem(Z, v.stringifyJSON($))
                    }
                  }
                  break;
                case "get_lsds_item":
                  if (v.storageAvailable) {
                    var ee = d.data
                      , te = ee && ee.key;
                    te && localStorage.getItem(te)
                  }
                  break;
                case "remove_lsds_item":
                  if (v.storageAvailable) {
                    var ne = d.data
                      , ie = ne && ne.key;
                    ie && localStorage.removeItem(ie)
                  }
                  break;
                case "requestForAudioCall":
                  window.fc_cobrowse && window.fc_cobrowse.requestForAudioCall(n);
                  break;
                case "rts_connected":
                  E.publish("rts:connected", d.data);
                  break;
                case "rts_disconnected":
                  E.publish("rts:disconnected", d.data);
                  break;
                case "stack_max_height":
                  var oe = screen.height <= 568 ? screen.height : screen.height - 250;
                  document.getElementById(e.frameDivId).style.maxHeight = oe + "px",
                    w.postMessage({
                      action: "stacked_max_height",
                      payload: {
                        height: oe
                      }
                    });
                  break;
                case "hide_widget":
                  document.getElementById(e.frameDivId).style.setProperty("display", "none");
                  break;
                default:
                  y.publish(c, d)
              }
            }
          }
        },
        syncResponse: function(e, t) {
          var n = e && e.status;
          n ? w.dispatch(t, {
            success: 200 === n,
            status: n
          }) : w.dispatch(t, {
            success: !1,
            status: 400
          })
        }
      },
      U = {
        track: function(e, t) {
          y.subscribe("track_event", {
            eventName: e,
            data: t
          })
        }
      };

    function j(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
          i.configurable = !0,
        "value"in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i)
      }
    }

    function V(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
        e
    }

    var q = function() {
      function e(t) {
        !function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
        }(this, e),
          V(this, "listenToConfigDataCB", void 0),
          V(this, "payload", void 0),
          V(this, "resolve", void 0),
          V(this, "iframeWindow", void 0),
          this.payload = t
      }
      var t, n, i;
      return t = e,
        n = [{
          key: "fetch",
          value: function() {
            var e = this;
            return new Promise(function(t) {
              !function(e, t) {
                if (e !== t)
                  throw new TypeError("Cannot instantiate an arrow function")
              }(this, e);
              var n = document.createElement("iframe");
              n.id = "config-load-iframe",
                n.style.display = "none",
                n.src = "".concat(this.payload.host, "/static/html/config_iframe.html?host=").concat(this.payload.host, "&token=").concat(this.payload.token, "&origin=").concat(window.location.origin),
                document.body.append(n),
                this.iframeWindow = n.contentWindow,
                this.resolve = t,
                this.listenToConfigDataCB = this.listenToConfigData.bind(this),
                window.addEventListener("message", this.listenToConfigDataCB)
            }
              .bind(this))
          }
        }, {
          key: "cleanUp",
          value: function() {
            this.iframeWindow = null,
              document.querySelector("#config-load-iframe").remove(),
              window.removeEventListener("message", this.listenToConfigDataCB)
          }
        }, {
          key: "listenToConfigData",
          value: function(e) {
            e.source === this.iframeWindow && (this.cleanUp(),
              this.resolve(JSON.parse(e.data)))
          }
        }],
      n && j(t.prototype, n),
      i && j(t, i),
        e
    }()
      , J = q;

    function z(e) {
      return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        }
        : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        z(e)
    }

    function H(e, t) {
      if (t && ("object" === z(t) || "function" == typeof t))
        return t;
      if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
      return G(e)
    }

    function G(e) {
      if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function X(e) {
      var t = "function" == typeof Map ? new Map : void 0;
      return X = function(e) {
        if (null === e || (n = e,
        -1 === Function.toString.call(n).indexOf("[native code]")))
          return e;
        var n;
        if ("function" != typeof e)
          throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
          if (t.has(e))
            return t.get(e);
          t.set(e, i)
        }
        function i() {
          return Q(e, arguments, Z(this).constructor)
        }
        return i.prototype = Object.create(e.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }),
          Y(i, e)
      }
        ,
        X(e)
    }

    function Q(e, t, n) {
      return Q = K() ? Reflect.construct : function(e, t, n) {
        var i = [null];
        i.push.apply(i, t);
        var o = new (Function.bind.apply(e, i));
        return n && Y(o, n.prototype),
          o
      }
        ,
        Q.apply(null, arguments)
    }

    function K() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1;
      if (Reflect.construct.sham)
        return !1;
      if ("function" == typeof Proxy)
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
        ))),
          !0
      } catch (e) {
        return !1
      }
    }

    function Y(e, t) {
      return Y = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t,
          e
      }
        ,
        Y(e, t)
    }

    function Z(e) {
      return Z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }
        ,
        Z(e)
    }

    function $(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }

    function ee(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
          i.configurable = !0,
        "value"in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i)
      }
    }

    function te(e, t, n) {
      return t && ee(e.prototype, t),
      n && ee(e, n),
        e
    }

    function ne(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
        e
    }

    var ie = function() {
      function t(e) {
        $(this, t),
          ne(this, "impostorConfig", void 0),
          this.impostorConfig = e
      }
      return te(t, [{
        key: "create",
        value: function() {
          var t, n, i, o = this, a = (t = this.impostorConfig,
            n = t.background,
            i = t.foreground,
            {
              content: '\n            <div class="freshdesk_messaging">\n                <div id="loading"><div class="flexbox">\n                    <div class="dot-loader"></div>\n                    <div class="dot-loader"></div>\n                    <div class="dot-loader"></div>\n                </div>\n                </div>\n                    <div id="static-bubble" class="d-hotline">\n                    <div id="chat-icon">\n                    </div>\n                </div>\n            </div>\n        ',
              styles: "\n        :host {\n            --background: ".concat(n, ";\n            --foreground: ").concat(i, ';\n        }\n\n        .freshdesk_messaging .d-hotline {\n                display: none;\n                border-radius: 34px 8px 34px 34px;\n                position: fixed !important;\n                bottom: 21px;\n                box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.26) !important;\n                color: #fff;\n                cursor: pointer;\n                display: table;\n                position: absolute;\n                right: 20px;\n                z-index: 3147483602 !important;\n                height: 60px;\n                width: 60px;\n                background-color: var(--background) !important;\n                color: #ffffff !important;\n                border-color: var(--background) !important;\n                -webkit-animation: 0.5s zoomIn;\n                animation: 0.5s zoomIn;\n            }\n            .freshdesk_messaging.fullscreen #static-bubble {\n                bottom: 6px !important; \n            }\n            .freshdesk_messaging.fullscreen #loading {\n                bottom: 62px;\n            }\n            .freshdesk_messaging.l2r #static-bubble {\n                left: 20px;\n            }\n            .freshdesk_messaging.l2r #loading {\n                left: 85px;\n            }\n            .freshdesk_messaging.l2r.fullscreen #static-bubble {\n                left: 5px !important;\n            }\n            .freshdesk_messaging.r2l.fullscreen #static-bubble {\n                right: 5px !important;\n            }\n            .freshdesk_messaging.r2l.fullscreen #loading {\n                right: 64px;\n            }\n            .freshdesk_messaging.l2r.fullscreen #loading {\n                left: 72px;\n            }\n            .freshdesk_messaging #chat-icon {\n                width: 38%;\n                height: 17px;\n                border-radius: 6px 6px 6px 2px;\n                position: absolute;\n                background: var(--foreground) !important;\n                top: 37%;\n                left: 32%;\n            }\n            .freshdesk_messaging #chat-icon:before {\n                border-radius: 2px 2px 2px 2px;\n                height: 2px;\n                content: "";\n                border-top: 5px;\n                background: var(--background) !important;\n                width: 65%;\n                position: absolute;\n                top: 5px;\n                left: 4px;\n            }\n            .freshdesk_messaging #chat-icon:after {\n                border-radius: 2px 2px 2px 2px;\n                height: 2px;\n                content: "";\n                border-top: 5px;\n                background: var(--background) !important;\n                width: 44%;\n                position: absolute;\n                top: 10px;\n                left: 4px;\n            }\n            .freshdesk_messaging #loading {\n                visibility: hidden;\n                position: absolute;\n                bottom: 76px;\n                right: 76px;\n                min-width: 55px !important;\n            }\n            .freshdesk_messaging .flexbox {\n                position: fixed;\n                opacity: 0.7;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -ms-flex-wrap: wrap;\n                flex-wrap: wrap;\n            }\n            .freshdesk_messaging .dot-loader {\n                height: 10px;\n                width: 10px;\n                border-radius: 50%;\n                background-color: var(--background) !important;\n                position: relative;\n                -webkit-animation: 1.2s scaleDown ease-in-out infinite;\n                animation: 1.2s scaleDown ease-in-out infinite;\n            }\n            .freshdesk_messaging .dot-loader:nth-child(2) {\n                margin: 0 10px;\n                -webkit-animation: 1.2s scaleDown ease-in-out infinite 0.15555s;\n                animation: 1.2s scaleDown ease-in-out infinite 0.15555s;\n            }\n            .freshdesk_messaging .dot-loader:nth-child(3) {\n                -webkit-animation: 1.2s scaleDown ease-in-out infinite 0.3s;\n                animation: 1.2s scaleDown ease-in-out infinite 0.3s;\n            }\n            @-webkit-keyframes scaleDown {\n                0%,\n                80%,\n                100% {\n                    -webkit-transform: scale(0);\n                    transform: scale(0);\n                }\n                40% {\n                    -webkit-transform: scale(1);\n                    transform: scale(1);\n                }\n            }\n            @keyframes scaleDown {\n                0%,\n                80%,\n                100% {\n                    -webkit-transform: scale(0);\n                    transform: scale(0);\n                }\n                40% {\n                    -webkit-transform: scale(1);\n                    transform: scale(1);\n                }\n            }\n            @-webkit-keyframes zoomIn {\n            0% {\n                -webkit-transform: scale(0);\n                transform: scale(0);\n            }\n            \n            100% {\n                -webkit-transform: scale(1);\n                transform: scale(1);\n            }\n            }\n            \n            @keyframes zoomIn {\n            0% {\n                -webkit-transform: scale(0);\n                transform: scale(0);\n            }\n            \n            100% {\n                -webkit-transform: scale(1);\n                transform: scale(1);\n            }\n            }\n\n            @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n              .mobile .d-hotline {\n                  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2) !important;\n            \n                  width: 50px;\n                  height: 50px;\n            }\n\n            .mobile #chat-icon {\n                width: 43% !important;\n                top: 32% !important;\n            }\n        ')
            });
          return function(t) {
            var n = t.onDemandWidgetCB
              , i = t.fullscreen
              , s = t.l2r
              , r = t.isMobile;
            !function(e, t) {
              if (e !== t)
                throw new TypeError("Cannot instantiate an arrow function")
            }(this, o);
            var d = e.impostor.tagName
              , c = function() {
              var e = document.createElement("template");
              return e.innerHTML = '\n              <style id="widget-style">'.concat(a.styles.toString(), "</style>\n              ").concat(a.content, "\n            "),
                e
            }()
              , l = function(e) {
              !function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                  }
                }),
                t && Y(e, t)
              }(l, e);
              var t, o, a = (t = l,
                  o = K(),
                  function() {
                    var e, n = Z(t);
                    if (o) {
                      var i = Z(this).constructor;
                      e = Reflect.construct(n, arguments, i)
                    } else
                      e = n.apply(this, arguments);
                    return H(this, e)
                  }
              );
              function l() {
                var e, t;
                $(this, l),
                  ne(G(t = a.call(this)), "onDemandCB", void 0),
                  t.attachShadow({
                    mode: "open"
                  }).appendChild(c.content.cloneNode(!0)),
                  t.onDemandCB = t.onDemand.bind(G(t)),
                null === (e = t.shadowRoot) || void 0 === e || e.querySelector("#static-bubble").addEventListener("mousedown", t.onDemandCB);
                var n, o, d = [];
                (i && d.push("fullscreen"),
                  s ? d.push("l2r") : d.push("r2l"),
                r && d.push("mobile"),
                  d.length) && (null === (n = t.shadowRoot) || void 0 === n || (o = n.querySelector(".freshdesk_messaging").classList).add.apply(o, d));
                return t
              }
              return te(l, [{
                key: "onDemand",
                value: function() {
                  this.removeMouseDownHandler(),
                    this.showLoading(),
                    n()
                }
              }, {
                key: "removeMouseDownHandler",
                value: function() {
                  var e, t = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector("#static-bubble");
                  t && t.removeEventListener("mousedown", this.onDemandCB)
                }
              }, {
                key: "removeBubble",
                value: function() {
                  this.shadowRoot.querySelector("#static-bubble").style.display = "none",
                    this.removeMouseDownHandler()
                }
              }, {
                key: "removeImpostor",
                value: function() {
                  this.removeLoading(),
                    this.shadowRoot.querySelector(".freshdesk_messaging").style.display = "none",
                    document.querySelector(d).remove()
                }
              }, {
                key: "removeLoading",
                value: function() {
                  var e;
                  (null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector(".freshdesk_messaging #loading")).style.visibility = "hidden"
                }
              }, {
                key: "showLoading",
                value: function() {
                  var e;
                  (null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector(".freshdesk_messaging #loading")).style.visibility = "visible"
                }
              }]),
                l
            }(X(HTMLElement));
            customElements.get(d) || customElements.define(d, l);
            var u = document.createElement(d, {
              is: d
            });
            return document.body.appendChild(u),
              u
          }
            .bind(this)(this.impostorConfig)
        }
      }]),
        t
    }(), oe = ie;

    function ae(e, t) {
      if (e !== t)
        throw new TypeError("Cannot instantiate an arrow function")
    }

    function se(e, t) {
      if (e !== t)
        throw new TypeError("Cannot instantiate an arrow function")
    }

    function re(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
          i.configurable = !0,
        "value"in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i)
      }
    }

    function de(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
        e
    }

    var ce = function() {
      function t(e) {
        var n;

        !function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
        }(this, t),
          de(this, "payload", void 0),
          de(this, "eagerLoad", void 0),
          de(this, "onWidgetLoadedCB", void 0),
          de(this, "onWidgetOpenedCB", void 0),
          de(this, "listenToConfigDataCB", void 0),
          de(this, "sendConfigsToFreshChatCB", void 0),
          de(this, "appConfig", void 0),
          de(this, "appConfigService", void 0),
          de(this, "impostorConfig", void 0),
          de(this, "impostor", void 0),
          de(this, "openWidgetOnLoad", void 0),
          de(this, "isWidgetBeingLoaded", void 0),
          de(this, "loadFreshChatCB", void 0),
          de(this, "unbindBrowserEventsCB", void 0),
          de(this, "rejectLoadingFreshchat", void 0),
          de(this, "activityEvents", void 0),
          de(this, "dontLoadWithImpostor", !0),
          this.payload = e,
          this.eagerLoad = null == e || null === (n = e.config) || void 0 === n ? void 0 : n.eagerLoad
      }

      var n, i, o;

      return n = t,
        i = [{
          key: "init",
          value: function() {
            var e = this;
            return new Promise(function(t, n) {
              var i, o;
              se(this, e),
                this.loadFreshChatCB = t,
                this.rejectLoadingFreshchat = n,
                null !== (i = this.payload) && void 0 !== i && null !== (o = i.config) && void 0 !== o && o.eagerLoad ? this.processImpostor() : this.loadFreshChat()
            }
              .bind(this))
          }
        }, {
          key: "onDemand",
          value: function() {
            this.isWidgetBeingLoaded ? this.openWidgetOnLoad = !0 : (this.payload.open = !0,
              this.loadFreshChat())
          }
        }, {
          key: "processImpostor",
          value: function() {
            var t = this;
            this.appConfigService = new J(this.payload),
              function(e, t) {
                var n = this
                  , i = new Promise(function(e, i) {
                  var o = this;
                  ae(this, n),
                    setTimeout(function() {
                      ae(this, o),
                        i(new Error("Timeout triggered"))
                    }.bind(this), t)
                }.bind(this));
                return Promise.race([e, i])
              }(this.appConfigService.fetch(), e.impostor.timeoutForFetchingConfigInMillis).then(function(e) {
                var n, i;
                se(this, t),
                  this.appConfig = e,
                  this.impostorConfig = this.getImpostorConfig(),
                  null !== (n = this.impostorConfig) && void 0 !== n && n.hideMessenger ? this.rejectLoadingFreshchat() : (this.listenToWidgetAndBrowserEvents(),
                  null !== (i = this.impostorConfig) && void 0 !== i && i.show && (this.impostor = new oe(this.impostorConfig).create()))
              }.bind(this), function() {
                se(this, t),
                  this.appConfigService.cleanUp(),
                  this.loadFreshChat({
                    dontLoadWithEagerLoad: !0
                  })
              }.bind(this))
          }
        }, {
          key: "getImpostorConfig",
          value: function() {
            var e, t, n, i, o, a, s, r, d, c, l, u, f, h, p, g, v, m = (null === (e = this.payload) || void 0 === e || null === (t = e.config) || void 0 === t || null === (n = t.headerProperty) || void 0 === n ? void 0 : n.hideChatButton) || !1;
            return {
              hideChatButton: m,
              hideMessenger: this.appConfig.hideMessenger || !1,
              background: (null === (i = this.payload) || void 0 === i || null === (o = i.config) || void 0 === o || null === (a = o.headerProperty) || void 0 === a ? void 0 : a.backgroundColor) || (null === (s = this.appConfig) || void 0 === s || null === (r = s.headerProperty) || void 0 === r ? void 0 : r.backgroundColor),
              foreground: (null === (d = this.payload) || void 0 === d || null === (c = d.config) || void 0 === c || null === (l = c.headerProperty) || void 0 === l ? void 0 : l.foregroundColor) || (null === (u = this.appConfig) || void 0 === u || null === (f = u.headerProperty) || void 0 === f ? void 0 : f.foregroundColor) || "white",
              show: !m,
              fullscreen: (null === (h = this.payload) || void 0 === h ? void 0 : h.config.fullscreen) || !1,
              l2r: "ltr" === (null === (p = this.payload) || void 0 === p || null === (g = p.config) || void 0 === g || null === (v = g.headerProperty) || void 0 === v ? void 0 : v.direction),
              onDemandWidgetCB: this.onDemand.bind(this),
              isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
            }
          }
        }, {
          key: "loadFreshChat",
          value: function(e) {
            this.isWidgetBeingLoaded = !0,
              this.loadFreshChatCB(e),
            this.eagerLoad && (this.sendConfigsToFreshChatCB = this.sendConfigsToFreshChat.bind(this),
              window.addEventListener("message", this.sendConfigsToFreshChatCB))
          }
        }, {
          key: "sendConfigsToFreshChat",
          value: function(t) {
            t.data.action === e.impostor.getFreshChatConfigs && (w.postMessage({
              action: "config_data",
              payload: this.appConfig
            }),
              this.appConfig = null,
              window.removeEventListener("message", this.sendConfigsToFreshChatCB))
          }
        }, {
          key: "listenToWidgetAndBrowserEvents",
          value: function() {
            this.onWidgetOpenedCB = this.onWidgetOpened.bind(this),
              this.onWidgetLoadedCB = this.onWidgetLoaded.bind(this),
              window.fcWidget.on("widget:loaded", this.onWidgetLoadedCB),
              window.fcWidget.on("widget:opened", this.onWidgetOpenedCB),
              this.activityEvents = e.impostor.activityEvents,
              this.unbindBrowserEventsCB = this.unbindBrowserEvents.bind(this, !1),
              this.bindBrowserEvents.bind(this)()
          }
        }, {
          key: "unbindBrowserEvents",
          value: function() {
            var e = this
              , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.activityEvents.forEach(function(t) {
              se(this, e),
                document.removeEventListener(t, this.unbindBrowserEventsCB, !0)
            }
              .bind(this)),
            t || this.loadFreshChat()
          }
        }, {
          key: "bindBrowserEvents",
          value: function() {
            var e = this;
            this.activityEvents.forEach(function(t) {
              se(this, e),
                document.addEventListener(t, this.unbindBrowserEventsCB, !0)
            }
              .bind(this))
          }
        }, {
          key: "onWidgetOpened",
          value: function() {
            this.cleanUp()
          }
        }, {
          key: "onWidgetLoaded",
          value: function() {
            this.openWidgetOnLoad ? window.fcWidget.open() : this.cleanUp()
          }
        }, {
          key: "cleanUp",
          value: function() {
            var e, t;
            null === (e = this.impostor) || void 0 === e || e.removeBubble(),
              this.isWidgetBeingLoaded = !1,
              this.unbindBrowserEvents(!0),
              window.fcWidget.off("widget:opened", this.onWidgetOpenedCB),
              window.fcWidget.off("widget:loaded", this.onWidgetLoadedCB),
            null === (t = this.impostor) || void 0 === t || t.removeImpostor()
          }
        }],
      i && re(n.prototype, i),
      o && re(n, o),
        t
    }(),
      le = ce;

    function ue(e, t) {
      if (e !== t)
        throw new TypeError("Cannot instantiate an arrow function")
    }

    var fe = function() {

      ue(this, undefined);

      var n = function(e) {
          var n, i;
          t.reset(),
            o.reset(),
            p.reset(),
            O(),
            R.unsubscribe(),
            w.init({
              host: e.host.trim(),
              token: e.token.trim(),
              widgetUuid: null === (n = e.widgetUuid) || void 0 === n ? void 0 : n.trim(),
              referrer: e.referrer,
              siteId: e.siteId,
              flowId: e.flowId,
              flowVersionId: e.flowVersionId,
              campaignRuleIds: e.campaignRuleIds,
              previewMode: e.previewMode,
              isTemplateBot: e.isTemplateBot,
              jwtAuthToken: e.jwtAuthToken,
              cspNonce: e.cspNonce,
              omniCookie: N.getCookie() || e.omniCookie,
              eagerLoad: (null == e || null === (i = e.config) || void 0 === i ? void 0 : i.eagerLoad) || null,
              jsFunctions: e.jsFunctions
            }),
            t.openOnLoad(e.open),
          e.identifyByReferenceId && o.setIdentifyByReferenceId(!0),
          e.flowId && o.setFlowId(e.flowId),
          e.integrations && o.setIntegrations(e.integrations),
          e.campaignRuleIds && o.setcampaignRuleIds(e.campaignRuleIds),
          e.flowVersionId && o.setFlowVersionId(e.flowVersionId),
          e.previewMode && o.setPreviewMode(e.previewMode),
            o.setIsTemplateBot(e.isTemplateBot),
          e.externalId && (o.setExternalId(e.externalId),
            o.setRestoreId(e.restoreId)),
          e.tags && e.tags.length && t.setTags(e.tags),
          e.faqTags && t.setFaqTags(e.faqTags),
          e.botsMeta && p.setProperties(e.botsMeta),
            o.setProperties({
              firstName: e.firstName,
              lastName: e.lastName,
              email: e.email,
              phone: e.phone,
              phoneCountry: e.phoneCountryCode,
              locale: e.locale,
              meta: e.meta
            }),
            o.setConfig(e.config),
          e.onLoad && E.subscribe("widget:loaded", e.onLoad),
            w.add(),
            R.subscribe()
        },

        i = function() {
          var e = document
            , t = e.createElement("link")
            , n = w.getHost();
          t.href = n + "/widget/css/widget.css?t=" + (new Date).getTime(),
            t.rel = "stylesheet",
            e.getElementsByTagName("head")[0].appendChild(t)
        };

      return {
        init: function(t) {
          window.fcWidgetMessengerConfig && (t = Object.assign(t, window.fcWidgetMessengerConfig));
          var o = function() {
            var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o.dontLoadWithImpostor && (t.config.eagerLoad = !1);
            var a = -1 !== ["Chrome", "Firefox", "Safari", "Edge", "Trident", "WebView"].indexOf(v.getAgent.name)
              , s = -1 !== ["Station"].indexOf(v.getAgent.appName);
            if (a && !s && !this.isInitialized()) {
              var r = t && t.token;
              r && r.toUpperCase() !== e.SAMPLE_TOKEN && (window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")),
                t.referrer = btoa(window.location.origin),
              void 0 === t.open && (t.open = !1),
                n(t),
                i())
            }
          }.bind(this);
          window.Promise ? new le(t).init(t).then(o, (function() {})) : o()
        },
        destroy: function() {
          x.unload(),
            w.unload()
        },
        isOpen: function() {
          return t.isOpened()
        },
        isInitialized: function() {
          return !!w.getToken()
        },
        isLoaded: function() {
          return t.isLoaded()
        },
        on: function(e, t) {
          E.subscribe(e, t)
        },
        off: function(e, t) {
          E.unsubscribe(e, t)
        },
        open: function(e) {
          e ? y.subscribe("open_channel", e) : y.subscribe("open_chat")
        },
        close: function() {
          y.subscribe("close_chat")
        },
        show: function() {
          y.subscribe("show_chat")
        },
        hide: function() {
          y.subscribe("hide_chat")
        },
        setTags: function(e) {
          t.isLoaded() && (e && e.length ? t.setTags(e) : t.setTags([]),
            y.subscribe("set_tags", {
              tags: t.getTags(),
              force: !0
            }))
        },
        setFaqTags: function(e) {
          t.isLoaded() && (e ? t.setFaqTags(e) : t.setFaqTags({}),
            y.subscribe("set_faq_tags", {
              faqTags: t.getFaqTags(),
              force: !0
            }))
        },
        setExternalId: function(e, t) {
          var n = {};
          if (e) {
            if ("string" == typeof e ? n.externalId = e : n = e,
              !(void 0 === window.Promise || t && "function" == typeof t))
              return C("set_external_id", n);
            _("set_external_id", n, t)
          }
        },
        setConfig: function(t) {
          var n = document.getElementById(e.frameDivId);
          n && t && (void 0 !== t.fullscreen && (n.classList.remove(e.classes.fullscreenClass),
          !0 === t.fullscreen && n.classList.add(e.classes.fullscreenClass)),
          t.headerProperty && (void 0 !== t.headerProperty.direction && (n.classList.remove("fc_l2r"),
          "ltr" === t.headerProperty.direction && n.classList.add("fc_l2r")),
          void 0 !== t.headerProperty.hideChatButton && (n.classList.remove("fc_dn"),
          t.headerProperty.hideChatButton && n.classList.add("fc_dn")))),
            y.subscribe("set_custom_config", t)
        },
        conversation: {
          setProperties: function(e) {
            p.setProperties(e),
              y.subscribe("set_bots_properties", p.getProperties())
          }
        },
        user: {
          get: function(e) {
            if (!(void 0 === window.Promise || e && "function" == typeof e))
              return C("get_user");
            _("get_user", e)
          },
          isExists: function(e) {
            if (!(void 0 === window.Promise || e && "function" == typeof e))
              return C("user_exists");
            _("user_exists", e)
          },
          update: function(e, t) {
            if (e.jwtAuthToken ? w.setJWTAuthToken(e.jwtAuthToken) : (e.firstName && o.setFirstName(e.firstName),
            e.lastName && o.setLastName(e.lastName),
            e.email && o.setEmail(e.email),
            e.phone && o.setPhone(e.phone),
            e.phoneCountry && o.setPhoneCountry(e.phoneCountry),
            e.meta && o.setUserMeta(e.meta)),
              !(void 0 === window.Promise || t && "function" == typeof t))
              return C("update_user", e);
            _("update_user", e, t)
          },
          setProperties: function(e, t) {
            var n = {};
            if (e.jwtAuthToken ? (w.setJWTAuthToken(e.jwtAuthToken),
              n = e) : (e.firstName && (n.firstName = e.firstName,
              delete e.firstName),
            e.lastName && (n.lastName = e.lastName,
              delete e.lastName),
            e.email && (n.email = e.email,
              delete e.email),
            e.phone && (n.phone = e.phone,
              delete e.phone),
            e.phoneCountryCode && (n.phoneCountry = e.phoneCountryCode,
              delete e.phoneCountryCode),
            e.locale && (n.locale = e.locale,
              delete e.locale),
              n.meta = e,
              o.setProperties(n)),
              !(void 0 === window.Promise || t && "function" == typeof t))
              return C("set_user_properties", n);
            _("set_user_properties", n, t)
          },
          setFirstName: function(e, t) {
            var n = {};
            if (e) {
              if ("string" == typeof e ? n.firstName = e : n = e,
                !t)
                return this.setProperties(n);
              this.setProperties(n, t)
            }
          },
          setLastName: function(e, t) {
            var n = {};
            if (e) {
              if ("string" == typeof e ? n.lastName = e : n = e,
                !t)
                return this.setProperties(n);
              this.setProperties(n, t)
            }
          },
          setEmail: function(e, t) {
            var n = {};
            if (e) {
              if ("string" == typeof e ? n.email = e : n = e,
                !t)
                return this.setProperties(n);
              this.setProperties(n, t)
            }
          },
          setPhone: function(e, t) {
            var n = {};
            if (e) {
              if ("string" == typeof e ? n.phone = e : n = e,
                !t)
                return this.setProperties(n);
              this.setProperties(n, t)
            }
          },
          setPhoneCountryCode: function(e, t) {
            var n = {};
            if (e) {
              if ("string" == typeof e ? n.phoneCountryCode = e : n = e,
                !t)
                return this.setProperties(n);
              this.setProperties(n, t)
            }
          },
          setMeta: function(e, t) {
            if (!t)
              return this.setProperties(e);
            this.setProperties(e, t)
          },
          setLocale: function(e, t) {
            var n = {};
            if (e) {
              if ("string" == typeof e ? n.locale = e : n = e,
                !t)
                return this.setProperties(n);
              this.setProperties(n, t)
            }
          },
          clear: function(e) {
            if (!(void 0 === window.Promise || e && "function" == typeof e))
              return C("reset_user");
            _("reset_user", e)
          },
          create: function(e, t) {
            if ("function" == typeof e && (t = e,
              e = null),
              !(void 0 === window.Promise || t && "function" == typeof t))
              return C("create_user", e);
            _("create_user", e, t)
          },
          clone: function(e, t) {
            if ("function" == typeof e && (t = e,
              e = null),
              !(void 0 === window.Promise || t && "function" == typeof t))
              return C("clone_user", e);
            _("clone_user", e, t)
          },
          getUUID: function(e) {
            if (!(void 0 === window.Promise || e && "function" == typeof e))
              return C("get_user_uuid");
            _("get_user_uuid", e)
          },
          generateUUID: function(e) {
            if (!(void 0 === window.Promise || e && "function" == typeof e))
              return C("generate_user_uuid");
            _("generate_user_uuid", e)
          }
        },
        track: U.track,
        trackPage: function(e, t) {
          T.track({
            newValue: e,
            title: t,
            force: !0
          })
        },
        authenticate: function(e) {
          var t = this;
          if (w.isJWTEnabled()) {
            var n = function() {
              ue(this, t),
                w.setJWTAuthToken(e),
                w.postMessage({
                  action: "authenticate_user",
                  payload: e
                })
            }
              .bind(this)
              , i = function(i) {
              ue(this, t),
                i && 200 === i.status ? this.user.update({
                  jwtAuthToken: e
                }) : n()
            }
              .bind(this);
            this.isLoaded() ? void 0 === window.Promise ? this.user.get(i) : this.user.get().then(i, i) : n()
          }
        }
      }
    }.bind(void 0)();

    if (window.fcWidget || (window.fcWidget = fe), window.fcSettings)
      if ("complete" === document.readyState) {
        var he = window.fcSettings.onInit;
        he && "function" == typeof he && he(),
          fe.init(window.fcSettings)
      } else {
        document.onreadystatechange = function(e) {
          return function() {
            if ("complete" === document.readyState) {
              var t = window.fcSettings.onInit;
              t && "function" == typeof t && t(),
                e.init(window.fcSettings)
            }
          }
        }(fe)
      }
  }()
}();
