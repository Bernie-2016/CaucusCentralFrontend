import noty from 'noty';
import 'jquery';

export function notifySuccess (msg) {
  noty({
    theme: 'relax',
    text: msg,
    layout: 'topRight',
    type: 'information',
    timeout: 3000
  });
}

export function notifyError (msg) {
  noty({
    theme: 'relax',
    text: msg,
    layout: 'topRight',
    type: 'error',
    timeout: 3000
  });
}
