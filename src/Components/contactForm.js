import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'GATORAID', e.target, 'user_VKGfAhY6S6niipECizbob')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div class="pad-form">
            <div className="container-fluid bg">
            <form onSubmit={sendEmail}>
            <div class="contact">
              <h3>Message us with any feedback!</h3>
            </div>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto" >
                            <input type="submit" className="btn btn-info" value="Send Message" ></input>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
