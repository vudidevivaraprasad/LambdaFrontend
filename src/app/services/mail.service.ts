import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser'

@Injectable({
  providedIn: 'root'
})
export class MailService {

  Verification(to_mail:string,link:string){
    return emailjs.send("service_pj92c1l","template_5zum8et",{
      subject: "Welcome Learning Commers",
      name: "Learning Commers",
      verification_link: link,
      to_email: to_mail,
      email: to_mail,
      heading: "Please click the button below to verify:",
      buttonName: "Verify",
      },"LfUXpNLPEvsm_S2Mg");
  }

  ResetPassword(to_mail:string,link:string){
    return emailjs.send("service_pj92c1l","template_5zum8et",{
      subject: "Learning Commers Reset Password",
      name: "Learning Commers",
      verification_link: link,
      to_email: to_mail,
      email: to_mail,
      heading: "Please click the button below to Reset Password:",
      buttonName: "Reset Password",
      },"LfUXpNLPEvsm_S2Mg");
  }

}
