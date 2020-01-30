const sendMail = require("sendmail")({ silent: true });
const { WebMasterEmail } = require("./conf");

function sendMailRequestAdoption(userInfo, message) {
  sendMail({
    from: userInfo.data.email,
    to: WebMasterEmail,
    replyTo: userInfo.data.email,
    subject: "Requete d'adoption",
    html: `Nom : ${userInfo.data.firstname} ${userInfo.data.lastname}
            Email : ${userInfo.data.email}
            Telephone : ${userInfo.data.phone_number}
            Chien: ${userInfo.dogInfo.name}, ${userInfo.dogInfo.id}
            Message : ${message}`
  });
}

module.exports = { sendMailRequestAdoption: sendMailRequestAdoption };
