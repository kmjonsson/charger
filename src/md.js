

import showdown from 'showdown'

var linkext = function () {
    return [
      {
        type: 'lang',
        regex: /@([^\/]+)\/([^@]+)@/g,
        replace: "<goto-page page='$1'>$2</goto-page>"
      }
    ]
  };

export default new showdown.Converter({ extensions: [linkext], tables: true });