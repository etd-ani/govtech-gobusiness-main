document.addEventListener("DOMContentLoaded", () => {
  const chatBot = document.createElement("div");
  chatBot.setAttribute("id", "webchat");
  chatBot.setAttribute("app-id", "gt-ask-gobiz");
  chatBot.setAttribute("app-name", "GoBiz Chatbot");
  chatBot.setAttribute("app-subtitle", "Chat with us");
  chatBot.setAttribute(
    "app-welcome-message",
    "Hello there, chat with us if you have any questions!"
  );
  chatBot.setAttribute("app-icon", "/images/VICA-avatar-210px.png");
  chatBot.setAttribute("app-color", "#037e8a");
  chatBot.setAttribute("app-foreground-color1", "white");
  chatBot.setAttribute("app-background-color2", "white");
  chatBot.setAttribute("app-foreground-color-2", "#2e2e2e");
  chatBot.setAttribute("app-canvas-background-color", "#dcdcdc");
  chatBot.setAttribute("app-button-border-color", "rgba(107,193,255,0.5)");
  chatBot.setAttribute("app-quick-reply-button-background-color", "ececec");
  chatBot.setAttribute("app-font-family", "hknova-regular");
  chatBot.setAttribute("app-base-font-size", "15");
  chatBot.setAttribute("app-auto-launch", "false");
  chatBot.setAttribute("app-quick-launch-event", "welcome");
  chatBot.setAttribute("app-bot-response-trigger-event", "false");
  chatBot.setAttribute("app-environment-override", "draft");
  document.body.appendChild(chatBot);

  const script = document.createElement("script");
  script.src = "https://webchat.vica.gov.sg/static/js/chat.js";
  script.async = false;
  document.body.appendChild(script);
});
