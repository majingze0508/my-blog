
import actionTypes from './actionTypes'

const sendEmail = (data) => {
  return fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
   },
    body: JSON.stringify(data)
  })
  .then((response) => {
    return {
      type: actionTypes.SEND_MAIL_RESULT,
      payload: response.json()
    }
  });
}

export default { sendEmail }
