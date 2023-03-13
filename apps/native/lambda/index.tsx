'use strict';
//@ts-ignore
exports.handler = async (event, context, callback) => {
  const email = event.request.userAttributes.email;
  const link = `https://example.com?userName=${email}&confirmation_code=${event.request.codeParameter}`;
  const name = event.request.userAttributes.name;
  //@ts-ignore
  const template = (name, link) => `<html>
    <body style="background-color:#333; font-family: PT Sans,Trebuchet MS,sans-serif; ">
      <div style="margin: 0 auto; width: 600px; background-color: #fff; font-size: 1.2rem; font-style: normal;font-weight: normal;line-height: 19px;" align="center">
        <div style="padding: 20;">
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <img style="border: 0;display: block;height: auto; width: 100%;max-width: 373px;" alt="Animage" height="200" width="300"  src="https://publish.example.com/main-logo.png" />
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <h2
                style="font-size: 28px; margin-top: 20px; margin-bottom: 0;font-style: normal; font-weight: bold; color: #000;font-size: 24px;line-height: 32px;text-align: center;">Hi ${name}</h2>
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
            <p style="Margin-top: 20px;Margin-bottom: 0;font-size: 16px;line-height: 24px; color: #000">Your registration request was successfully approved. Click below to complete the registration</p>
            <p style="Margin-top: 20px;Margin-bottom: 0;">&nbsp;</p>
                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 24px;">
                    <div style="Margin-bottom: 20px;text-align: center;">
                        <a
                            style="border-radius: 4px;display: block;font-size: 14px;font-weight: bold;line-height: 24px;padding: 12px 24px 13px 24px;text-align: center;text-decoration: none !important;transition: opacity 0.1s ease-in;color: #ffffff !important;box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);background-color: #3b5998;font-family: PT Sans, Trebuchet MS, sans-serif; letter-spacing: 0.05rem;"
                            href="${link}">CLICK HERE TO VERIFY YOUR EMAIL</a>
                        </div>
                </div>
        </div>
      </div>
    </body>
  </html>`;
  //@ts-ignore
  const templateInvite = (name, email, code) => `<html>
  <body
    style="
      background-color: #333;
      font-family: PT Sans, Trebuchet MS, sans-serif;
    "
  >
    <div
      style="
        margin: 0 auto;
        width: 600px;
        background-color: #fff;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: normal;
        line-height: 19px;
      "
      align="center"
    >
      <div style="padding: 20">
        <img
          style="
            border: 0;
            display: block;
            height: auto;
            width: 100%;
            max-width: 373px;
          "
          alt="Animage"
          height="200"
          width="300"
          src="https://publish.example.com/main-logo.png"
        />
        <h2
          style="
            font-size: 28px;
            margin-top: 20px;
            margin-bottom: 0;
            font-style: normal;
            font-weight: bold;
            color: #000;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
          "
        >
          Hi ${name}
        </h2>
        <p
          style="
            margin-top: 20px;
            margin-bottom: 0;
            font-size: 16px;
            line-height: 24px;
            color: #000;
          "
        >
          Here is your temporary login details
        </p>
        <div style="display: inline-block; margin: 0 auto">
          <h2
            style="
              margin-top: 20px;
              margin-bottom: 0;
              font-size: 16px;
              line-height: 24px;
              color: #000;
              text-align: left;
            "
          >
            user_name: ${email}
          </h2>
          <h2
            style="
              margin-top: 20px;
              margin-bottom: 0;
              font-size: 16px;
              line-height: 24px;
              color: #000;
              text-align: left;
            "
          >
            temporary_password: ${code}
          </h2>
        </div>
      </div>
    </div>
  </body>
</html>
`;
  if (event.triggerSource === 'CustomMessage_SignUp') {
    event.response = {
      emailSubject: 'Publish | Confirm your email',
      emailMessage: template(name, link),
    };
  } else if (event.triggerSource === 'CustomMessage_AdminCreateUser') {
    event.response = {
      emailSubject: 'Publish | Your temporary account details',
      emailMessage: templateInvite(
        name,
        event.request.usernameParameter,
        event.request.codeParameter,
      ),
    };
  }
  console.log(event.response);
  callback(null, event);
};
