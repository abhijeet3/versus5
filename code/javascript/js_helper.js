var JShelp = {
  CrtEle: function ({ tag, attr, content }) {
    try {
      tag = tag ? tag : 'div';
      let ele = document.createElement(tag)
      JShelp.SetAttr({ ele, attr })
      JShelp.FillEle({ ele, content })
      return ele
    }
    catch (e) {
      JShelp.DispNotif({ msg: 'Error while creating element ' + e, type: 'error' });
    }
  },

  SetAttr: function ({ ele, attr }) {
    try {
      if (!ele) {
        JShelp.DispNotif({ msg: 'No Element supplied ' + e, type: 'error' });
      }
      if (attr && Object.keys(attr).length > 0) {
        for (let key in attr) {
          ele.setAttribute(key, attr[key])
        }
      }
    }
    catch (e) {
      JShelp.DispNotif({ msg: 'Error while setting attributes to element ' + e, type: 'error' });
    }
  },

  FillEle: function ({ ele, content }) {
    try {
      if (!ele) {
        JShelp.DispNotif({ msg: 'No Element supplied ' + e, type: 'error' });
      }
      if (content) {
        if (typeof content === 'string') {
          ele.innerHTML = content || ''
        }
        else {
          ele.appendChild(content)
        }
      }
      return ele
    }
    catch (e) {
      JShelp.DispNotif({ msg: 'Error while filling element ' + e, type: 'error' });
    }
  },

  DispAlert: function ({ msg, type }) {
    try {
      //TO DO: Show alert
      console.log(type, msg)
    }
    catch (e) {
      console.log(type, msg)
    }
  },

  DispNotif: function ({ msg, type }) {
    try {
      //TO DO: Show Notif
      console.log(type, msg)
    }
    catch (e) {
      console.log(type, msg)
    }
  }
}